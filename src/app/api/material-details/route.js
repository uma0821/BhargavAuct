import db from "@/utils/db";
import { NextResponse } from "next/server";
import cors from "@/lib/cors";

// Ensure Next.js treats this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const MatId = searchParams.get("mat_id");
  

   // Handle CORS headers
   const corsHeaders = cors(req);

   // Return early for preflight requests
   if (req.method === "OPTIONS") {
     return new Response(null, { status: 204, headers: corsHeaders });
   }

  try {
    if (MatId) {
     
      const [rows] = await db.execute(
        `SELECT *
         FROM material 
         WHERE mat_id = ?`,
        [MatId]
      );

      if (rows.length === 0) {
        return NextResponse.json({ message: "Material not found" }, { status: 404, headers: corsHeaders });
      }
      
      return NextResponse.json({ data: rows[0] },
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Cache-Control": "no-store, max-age=0, must-revalidate",
          },
        }
      );
    } else {
      // const [rows] = await db.execute("SELECT * FROM lot_detail");
      const [rows] = await db.execute(
        `SELECT *
        FROM material`
      );

      // if (rows.length === 0) {
      //   return NextResponse.json({ message: "Lot not found" }, { status: 404, headers: corsHeaders });
      // }

      return NextResponse.json({ data: rows },
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Cache-Control": "no-store, max-age=0, must-revalidate",
          },
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
