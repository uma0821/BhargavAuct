import db from "@/utils/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import cors from "@/lib/cors";
import { verifyAdmin } from "@/utils/verifyAdmin";


export async function PUT(req, { params }) {
    const { id: mat_id } = params;
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

    const mat_name = formData.get("mat_name");
    const applied_tax = formData.get("applied_tax");
    const is_active = "Y";
    
    const updateQuery = `UPDATE material 
    SET mat_name = ?, applied_tax=?, is_active=?
    WHERE mat_id = ?;`;

    // Values for the update query
    const updateValues = [
        mat_name,
        applied_tax,
        is_active,
        mat_id
    ];

    const result = await db.execute(updateQuery, updateValues);
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error("Error in add material", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
