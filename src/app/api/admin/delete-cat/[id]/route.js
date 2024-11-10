import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;

  try {

    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized access" },
        { status: 401 }
      );
    }

    const result = await db.query('DELETE FROM category WHERE cat_id = ?', [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Category deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error("error in delete Category",error);
    return NextResponse.json({ message: 'Error deleting Category' }, { status: 500 });
  }
}
