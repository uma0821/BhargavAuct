import db from "@/utils/db";
import { NextResponse } from "next/server";
import cors from "@/lib/cors";

// Ensure Next.js treats this route as dynamic
export const dynamic = 'force-dynamic';

// export async function GET(req) {
//   // Handle CORS headers
//   const corsHeaders = cors(req);

//   // Return early for preflight requests
//   if (req.method === "OPTIONS") {
//     return new Response(null, { status: 204, headers: corsHeaders });
//   }

//   try {
//     const [rows] = await db.execute("SELECT * FROM auction_detail");

//     if (rows.length === 0) {
//       return NextResponse.json(
//         { message: "auctions not found" },
//         { status: 404, headers: corsHeaders }
//       );
//     }

//     return NextResponse.json(
//       { data: rows },
//       {
//         status: 200,
//         headers: {
//           ...corsHeaders,
//           "Cache-Control": "no-store, max-age=0, must-revalidate",
//         },
//       }
//     );
//   } catch (error) {
//     console.error("Error in auction_detail API call:", error);
//     return NextResponse.json(
//       { message: error.message },
//       { status: 500, headers: corsHeaders }
//     );
//   }
// }


export async function GET(req) {
  // Handle CORS headers
  const corsHeaders = cors(req);

  // Return early for preflight requests
  if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Get query parameters from the request URL
  const url = new URL(req.nextUrl); // req.nextUrl for full URL in Next.js

  // Extract search, sortColumn, sortOrder, page, and limit from query params
  const search = url.searchParams.get('search') || '';  // Default empty string if not present
  const sortColumn = url.searchParams.get('sortColumn') || 'auct_id'; // Default to 'id' if not present
  const sortOrder = url.searchParams.get('sortOrder') === 'DESC' ? 'DESC' : 'ASC'; // Default to 'ASC'
  const page = parseInt(url.searchParams.get('page') || '1', 10);  // Default to page 1
  const limit = parseInt(url.searchParams.get('limit') || '10', 10); // Default to limit 10

  console.log({ search, sortColumn, sortOrder, page, limit }); // Log the query parameters for debugging

  // Validate the sort column
  const allowedColumns = ['auct_id', 'auct_name', 'auct_code', 'auct_location', 'auct_status'];
  if (!allowedColumns.includes(sortColumn)) {
      return NextResponse.json(
          { message: `Invalid sort column: ${sortColumn}` },
          { status: 400, headers: corsHeaders }
      );
  }

  try {
      // Calculate the offset for pagination
      const offset = (page - 1) * limit;

      // Construct the SQL query with search, sorting, and pagination
      const query = `
          SELECT * FROM auction_detail
          WHERE auct_name LIKE ?  -- Search for auction by name
          ORDER BY ${sortColumn} ${sortOrder}  -- Sort the results by the given column and order
          LIMIT ? OFFSET ?  -- Paginate the results
      `;

      // Execute the query with parameters to prevent SQL injection
      const [rows] = await db.execute(query, [`%${search}%`, limit, offset]);

      if (rows.length === 0) {
          return NextResponse.json(
              { message: "Auction not found" },
              { status: 404, headers: corsHeaders }
          );
      }

      // Construct the response with pagination details
      const totalQuery = `
          SELECT COUNT(*) as total FROM auction_detail WHERE auct_name LIKE ?
      `;
      const [[{ total }]] = await db.execute(totalQuery, [`%${search}%`]);

      return NextResponse.json(
          {
              data: rows,
              pagination: {
                  currentPage: page,
                  totalPages: Math.ceil(total / limit),
                  totalItems: total,
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
  } catch (error) {
      console.error("Error in auction API call:", error);
      return NextResponse.json(
          { message: "Internal server error", error: error.message },
          { status: 500, headers: corsHeaders }
      );
  }
}
