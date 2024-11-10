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

    const mat_name = formData.get("mat_name");
    const applied_tax = formData.get("applied_tax");
    const is_active = formData.get("is_active");

    // Check if category already exists
    const [rows] = await db.execute(
      "SELECT * FROM material WHERE mat_name = ?",
      [mat_name]
    );

    if (rows.length > 0) {
      return NextResponse.json(
        { message: "Material name already exists" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Insert category
    const insertQuery = `INSERT INTO material(mat_name,applied_tax,is_active) VALUES (?,?,?);`;
    const [insertResult] = await db.execute(insertQuery, [mat_name,applied_tax,is_active]);

    const mat_id = insertResult.insertId;

    return NextResponse.json(
      { message: "Material added successfully", mat_id },
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Error in add material", error.message, error.stack);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
