import db from "@/utils/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import cors from "@/lib/cors";
import { verifyAdmin } from "@/utils/verifyAdmin";

// Create the uploads directory path
const uploadsDir = path.join(process.cwd(), "public/profileImage");
console.log("====>uploadsDir===>", uploadsDir);
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

export async function PUT(req, { params }) {
    const { id: user_id } = params;
  try {
    const formData = await req.formData();

    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return new NextResponse.json(
        { message: "Unauthorized access" },
        { status: 401 }
      );
    }

    let admin;
    try {
      admin = verifyAdmin(token);
    } catch (err) {
      return new NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }
    console.log("=====admin==lots===>", admin);

    // const lot_name = formData.get("lot_name");
    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const address = formData.get("address");
    const bid_limit = formData.get("bid_limit");
    const state = formData.get("state");
    //const profilePic = formData.get("profilePic");
    const handlename = formData.get("handlename");
    const user_status = formData.get("user_status");


    // extract images
    const user_image = formData.get("profilePic");
    let imagePath = null;

    // lot front image validation
    if (
        user_image &&
      typeof user_image === "object" &&
      user_image.name
    ) {
      const imageFileName = `${Date.now()}-${user_image.name}`; // To ensure unique names
      imagePath = path.join(uploadsDir, imageFileName);

      const buffer = await user_image.arrayBuffer();
      await fs.promises.writeFile(imagePath, Buffer.from(buffer));

      // Save only the relative path to the image
      imagePath = `/profileImage/${imageFileName}`;
    } else {
        imagePath = user_image;
    }

    
    const updateQuery = `UPDATE user 
    SET name = ?,
        email = ?,
        mobile = ?,
        address = ?,
        bid_limit=?,
        state = ?,
        handlename = ?,
        user_status = ?,
        profileimage = ?
    WHERE id = ?;`;

    // Values for the update query
    const updateValues = [
      name,
      email,
      mobile, 
      address, 
      bid_limit,
      state,
      handlename, 
      user_status,
      imagePath || '',
      user_id
    ];

    const result = await db.execute(updateQuery, updateValues);

    return NextResponse.json({ message: "User Updated Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error in update user", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
