import { NextResponse } from "next/server";
import db from "../../../utils/db";
import { verifyToken } from "@/utils/verifytoken";
import cors from "@/lib/cors";
import uploadImgToCloudinary from "@/lib/cloudinary";

// Ensure Next.js treats this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET(req) {

  // Handle CORS headers
  const corsHeaders = cors(req);

  // Return early for preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const token = req.headers.get("Authorization")?.split(" ")[1];
  // console.log("===token====>", token)
  if (!token)
    return NextResponse.json({ message: "No token provided" }, { status: 401, headers: corsHeaders });

  try {
    const decodeUser = verifyToken(token);
    const userId = decodeUser.id;
    // const [result] = await db.query("SELECT * FROM user WHERE id = ?", [
    //   userId,
    // ]);

    const [results] = await db.query(
      `SELECT 
          r.*, 
          bd.*, 
          ld.*,
          ad.auct_status
       FROM 
          user r 
       LEFT JOIN 
          bid_detail bd ON r.id = bd.bid_owner_id 
       LEFT JOIN 
          lot_detail ld ON bd.bid_lot_id = ld.lot_id
       LEFT JOIN 
          auction_detail ad ON ld.lot_auct_id = ad.auct_id 
       WHERE 
          r.id = ?`, 
      [userId]
    );

    if (results.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404, headers: corsHeaders });
    }

    const { password, ...userWithoutPassword } = results;

    return NextResponse.json({ user: userWithoutPassword },
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.log("error in profile", error);
    if(error.message === "Invalid token" || error.message === "Token has expired") {
        return NextResponse.json({ message: error.message }, { status: 401, headers: corsHeaders });
    } else {
        return NextResponse.json({ message: error.message }, { status: 500, headers: corsHeaders });
    }
  }
}


// PUT API for updating the user profile
export async function PUT(req) {
  const corsHeaders = cors(req);

  // Handle preflight requests for CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    // Parse form data
    const formData = await req.formData();

    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized access" }), { status: 401 });
    }

    let user;
    try {
      user = verifyToken(token);
    } catch (err) {
      return new Response(JSON.stringify({ error: "Invalid or expired token" }), { status: 401 });
    }

    // for changing password
    console.log("======formData.get(changePassword)====>", formData.get("changePassword"));
    const isChangePassword = formData.get("changePassword") === "true"; // Assuming you send this parameter

    if (isChangePassword) {
      const newPassword = formData.get("newPassword");
      if (!newPassword) {
        return new Response(JSON.stringify({ error: "New password is required" }), { status: 400 });
      }
      const oldPassword = formData.get("oldPassword");
      const verifyOldPassword = await bcrypt.compare(oldPassword, user.password);
      console.log("=====verifyOldPassword====>", verifyOldPassword);

      if(!verifyOldPassword) {
        return new Response(JSON.stringify({ error: "Old Password is wrong" }), { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const updateQuery = `UPDATE user SET password = ? WHERE id = ?`;
      await db.execute(updateQuery, [hashedPassword, user.id]);

      return new Response(
        JSON.stringify({ message: "Password changed successfully" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const name = formData.get("name");
    const email = formData.get("email"); // disabled on frontend
    const password = formData.get("password");
    const mobile = formData.get("mobile");
    const address = formData.get("address");
    const state = formData.get("state");
    const pincode = formData.get("pincode");
    const handlename = formData.get("handlename");

    // Extract file (profile pic)
    const profilePic = formData.get("profilePic");
    let imagePath = null;
    console.log("======profilePic====back====>", profilePic);
    if (profilePic && typeof profilePic === "object" && profilePic.name) {
      try {
        const buffer = await profilePic.arrayBuffer();
        const publicId = `profile_image/${Date.now()}_${profilePic.name}`;
        const result = await uploadImgToCloudinary(Buffer.from(buffer), publicId);
        if (result.secure_url) {
          imagePath = result.secure_url; // Store secure URL from Cloudinary
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    // To Build update query
    const updateFields = [];
    const valuesToUpdate = [];

    if (name) {
      updateFields.push("name = ?");
      valuesToUpdate.push(name);
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateFields.push("password = ?");
      valuesToUpdate.push(hashedPassword);
    }

    if (mobile) {
      updateFields.push("mobile = ?");
      valuesToUpdate.push(mobile);
    }

    if (address) {
      updateFields.push("address = ?");
      valuesToUpdate.push(address);
    }

    if (state) {
      updateFields.push("state = ?");
      valuesToUpdate.push(state);
    }

    if (pincode) {
      updateFields.push("pincode = ?");
      valuesToUpdate.push(pincode);
    }

    if (handlename) {
      updateFields.push("handlename = ?");
      valuesToUpdate.push(handlename);
    }

    if (imagePath) {
      updateFields.push("profileimage = ?");
      valuesToUpdate.push(imagePath);
    }

    valuesToUpdate.push(user.id);

    if (updateFields.length > 0) {
      const query = `UPDATE user SET ${updateFields.join(", ")} WHERE id = ?`;
      await db.execute(query, valuesToUpdate);
    }

    return new Response(
      JSON.stringify({ message: "Profile updated successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Profile update failed" }),
      { status: 500, headers: corsHeaders }
    );
  }
}

