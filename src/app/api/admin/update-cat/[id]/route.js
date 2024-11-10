import db from "@/utils/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import cors from "@/lib/cors";
import { verifyAdmin } from "@/utils/verifyAdmin";


export async function PUT(req, { params }) {
    const { id: cat_id } = params;
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

    const cat_name = formData.get("cat_name");
    
    const updateQuery = `UPDATE category 
    SET cat_name = ?
    WHERE cat_id = ?;`;

    // Values for the update query
    const updateValues = [
      cat_name,
      cat_id
    ];

    const result = await db.execute(updateQuery, updateValues);
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error("Error in add category", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
