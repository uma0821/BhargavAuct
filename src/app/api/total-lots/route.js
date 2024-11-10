import db from "@/utils/db";
import { NextResponse } from "next/server";
import cors from "@/lib/cors";

// Ensure Next.js treats this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const lotId = searchParams.get("lot_id");
  // console.log("=====lotId===>", lotId);

   // Handle CORS headers
   const corsHeaders = cors(req);

   // Return early for preflight requests
   if (req.method === "OPTIONS") {
     return new Response(null, { status: 204, headers: corsHeaders });
   }

  try {
    if (lotId) {
      // const [rows] = await db.execute(
      //   `SELECT ld.*, m.mat_name, c.cat_name 
      //   FROM lot_detail AS ld
      //   LEFT JOIN material AS m ON ld.lot_mat_id = m.mat_id
      //   LEFT JOIN category AS c ON ld.lot_cat_id = c.cat_id
      //   WHERE ld.lot_id = ?`,
      //   [lotId]
      // );

      const [rows] = await db.execute(
        `SELECT ld.*, m.mat_name, c.cat_name, ad.auct_status, ad.end_date, bd.bd_next_bid, bd.bd_current_bid
         FROM lot_detail AS ld
         LEFT JOIN material AS m ON ld.lot_mat_id = m.mat_id
         LEFT JOIN category AS c ON ld.lot_cat_id = c.cat_id
         LEFT JOIN auction_detail AS ad ON ld.lot_auct_id = ad.auct_id
         LEFT JOIN bid_display AS bd ON ld.lot_id = bd.bd_lot_id
         WHERE ld.lot_id = ?`,
        [lotId]
      );

      if (rows.length === 0) {
        return NextResponse.json({ message: "Lot not found" }, { status: 404, headers: corsHeaders });
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
        `SELECT ld.*, bd.bd_current_bid, bd.bd_handle, ad.auct_status, ad.end_date
        FROM lot_detail AS ld
        LEFT JOIN bid_display AS bd ON ld.lot_id = bd.bd_lot_id
        LEFT JOIN auction_detail AS ad ON ld.lot_auct_id = ad.auct_id`
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
    console.log("==error in fetching bid details===>", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}


