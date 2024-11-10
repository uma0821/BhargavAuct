import db from "@/utils/db";
import { NextResponse } from "next/server";
import cors from "@/lib/cors";
import { verifyAdmin } from "@/utils/verifyAdmin";

export const dynamic = "force-dynamic";

export async function POST(req) {
  // Handle CORS
  const corsHeaders = cors(req);

  // If it's an OPTIONS request, return early
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const formData = await req.formData();

    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized access" },
        { status: 401, headers: corsHeaders }
      );
    }

    let admin;
    try {
      admin = verifyAdmin(token);
    } catch (err) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401, headers: corsHeaders }
      );
    }

    const cat_name = formData.get("cat_name");

    // Check if category already exists
    const [rows] = await db.execute(
      "SELECT * FROM category WHERE cat_name = ?",
      [cat_name]
    );

    if (rows.length > 0) {
      return NextResponse.json(
        { message: "Category name already exists" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Insert category
    const insertQuery = `INSERT INTO category(cat_name) VALUES (?);`;
    const [insertResult] = await db.execute(insertQuery, [cat_name]);

    const cat_id = insertResult.insertId;

    // (Optional) Update logic if needed
    // const updateQuery = `UPDATE category SET cat_name = ? WHERE cat_id = ?;`;
    // await db.execute(updateQuery, [cat_name, cat_id]);

    return NextResponse.json(
      { message: "Category added successfully", cat_id },
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Error in add category", error.message, error.stack);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
