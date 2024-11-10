import db from "@/utils/db";
import { NextResponse } from "next/server";
import cors from "@/lib/cors";

// Ensure Next.js treats this route as dynamic
export const dynamic = 'force-dynamic';

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const lotId = searchParams.get("lot_id");
//   // console.log("=====lotId===>", lotId);

//    // Handle CORS headers
//    const corsHeaders = cors(req);

//    // Return early for preflight requests
//    if (req.method === "OPTIONS") {
//      return new Response(null, { status: 204, headers: corsHeaders });
//    }

//   try {
//     if (lotId) {
//       // const [rows] = await db.execute(
//       //   `SELECT ld.*, m.mat_name, c.cat_name 
//       //   FROM lot_detail AS ld
//       //   LEFT JOIN material AS m ON ld.lot_mat_id = m.mat_id
//       //   LEFT JOIN category AS c ON ld.lot_cat_id = c.cat_id
//       //   WHERE ld.lot_id = ?`,
//       //   [lotId]
//       // );

//       const [rows] = await db.execute(
//         `SELECT ld.*, m.mat_name, c.cat_name, ad.auct_status, ad.end_date, bd.bd_next_bid, bd.bd_current_bid
//          FROM lot_detail AS ld
//          LEFT JOIN material AS m ON ld.lot_mat_id = m.mat_id
//          LEFT JOIN category AS c ON ld.lot_cat_id = c.cat_id
//          LEFT JOIN auction_detail AS ad ON ld.lot_auct_id = ad.auct_id
//          LEFT JOIN bid_display AS bd ON ld.lot_id = bd.bd_lot_id
//          WHERE ld.lot_id = ?`,
//         [lotId]
//       );

//       if (rows.length === 0) {
//         return NextResponse.json({ message: "Lot not found" }, { status: 404, headers: corsHeaders });
//       }
      
//       return NextResponse.json({ data: rows[0] },
//         {
//           status: 200,
//           headers: {
//             ...corsHeaders,
//             "Cache-Control": "no-store, max-age=0, must-revalidate",
//           },
//         }
//       );
//     } else {
//       // const [rows] = await db.execute("SELECT * FROM lot_detail");
//       const [rows] = await db.execute(
//         `SELECT ld.*, bd.bd_current_bid, bd.bd_handle, ad.auct_status, ad.end_date
//         FROM lot_detail AS ld
//         LEFT JOIN bid_display AS bd ON ld.lot_id = bd.bd_lot_id
//         LEFT JOIN auction_detail AS ad ON ld.lot_auct_id = ad.auct_id`
//       );

//       // if (rows.length === 0) {
//       //   return NextResponse.json({ message: "Lot not found" }, { status: 404, headers: corsHeaders });
//       // }

//       return NextResponse.json({ data: rows },
//         {
//           status: 200,
//           headers: {
//             ...corsHeaders,
//             "Cache-Control": "no-store, max-age=0, must-revalidate",
//           },
//         }
//       );
//     }
//   } catch (error) {
//     console.log("==error in fetching bid details===>", error);
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500, headers: corsHeaders }
//     );
//   }
// }


export async function GET(req) {

  const { searchParams } = new URL(req.nextUrl);
  const lotId = searchParams.get("lot_id");
  const search = searchParams.get("search") || ""; // Search query
  const searchAuction = searchParams.get("searchAuction") || ""; // Search query
  const sort = searchParams.get("sort") || "lot_id"; // Default sort by lot_id
  const order = searchParams.get("order") || "ASC"; // Default order ASC
  const page = parseInt(searchParams.get("page"), 10) || 1; // Default page 1
  const limit = parseInt(searchParams.get("limit"), 10) || 10; // Default 10 items per page
  const offset = (page - 1) * limit;

  // Handle CORS headers
  const corsHeaders = cors(req);

  // Return early for preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    let rows;
    let totalRecords = 0;

    if (lotId) {
      // Fetch details for a specific lot by ID
      [rows] = await db.execute(
        `SELECT ld.*, m.mat_name, c.cat_name, ad.auct_status, ad.auct_code, ad.end_date, bd.bd_next_bid, bd.bd_current_bid
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

      return NextResponse.json(
        { data: rows[0] },
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Cache-Control": "no-store, max-age=0, must-revalidate",
          },
        }
      );
    } else {
      // Search, sort, paginate for all lots
      // Query with search, sort, pagination
      if(searchAuction){

        [rows] = await db.execute(
          `SELECT ld.*, bd.bd_current_bid, bd.bd_handle, ad.auct_status,ad.auct_code, ld.lot_name, ad.end_date
           FROM lot_detail AS ld
           LEFT JOIN bid_display AS bd ON ld.lot_id = bd.bd_lot_id
           LEFT JOIN auction_detail AS ad ON ld.lot_auct_id = ad.auct_id
           WHERE ad.auct_code = ?
           ORDER BY ${sort} ${order}
           LIMIT ? OFFSET ?`,
          [searchAuction, limit, offset]
        );
      }else{
      [rows] = await db.execute(
        `SELECT ld.*, bd.bd_current_bid, bd.bd_handle, ad.auct_status,ad.auct_code, ld.lot_name, ad.end_date
         FROM lot_detail AS ld
         LEFT JOIN bid_display AS bd ON ld.lot_id = bd.bd_lot_id
         LEFT JOIN auction_detail AS ad ON ld.lot_auct_id = ad.auct_id
         WHERE ld.lot_name LIKE ?
         ORDER BY ${sort} ${order}
         LIMIT ? OFFSET ?`,
        [`%${search}%`, limit, offset]
      );
     }

     let totalRecordsQuery;
     let totalRecordsParams;

     if (searchAuction) {
      // Count total records when searching by auction code
      totalRecordsQuery = `
        SELECT COUNT(*) AS totalRecords
        FROM lot_detail AS ld
        LEFT JOIN auction_detail AS ad ON ld.lot_auct_id = ad.auct_id
        WHERE ad.auct_code = ?`;
      totalRecordsParams = [searchAuction];
    } else {
      // Count total records when searching by lot name
      totalRecordsQuery = `
        SELECT COUNT(*) AS totalRecords
        FROM lot_detail AS ld
        WHERE ld.lot_name LIKE ?`;
      totalRecordsParams = [`%${search}%`];
    }
    
    const [countRows] = await db.execute(totalRecordsQuery, totalRecordsParams);

    // Extract the total number of records
    const totalRecords = countRows[0]?.totalRecords || 0;

      // Fetch total record count for pagination
      
      // const [countRows] = await db.execute(
      //     `SELECT COUNT(*) AS totalRecords
      //      FROM lot_detail AS ld
      //      WHERE ld.lot_name LIKE ?`,
      //     [`%${search}%`]
      //   );
      
      //totalRecords = countRows[0].totalRecords;

      return NextResponse.json(
        {
          data: rows,
          pagination: {
            totalPages: Math.ceil(totalRecords / limit),
            currentPage: page,
            totalItems: totalRecords,
            limit,
          },
        },
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