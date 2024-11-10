import db from "@/utils/db";
import { NextResponse } from "next/server";
import cors from "@/lib/cors";

// Ensure Next.js treats this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET(req) {

    // Handle CORS headers
    const corsHeaders = cors(req);

    // Return early for preflight requests
    if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
    }

    try {
        // Query to count total bids
        const [rows] = await db.execute("SELECT COUNT(*) AS count FROM bid_detail");

        // Check if any bids exist
        if (rows.length === 0 || rows[0].count === 0) {
            return NextResponse.json({ count: 0 }, { status: 200, headers: corsHeaders });
        }

        // Return the count of bids
        return NextResponse.json({ count: rows[0].count }, 
            { status: 200,
              headers: {
                ...corsHeaders,
                "Cache-Control": "no-store, max-age=0, must-revalidate",
              }, 
        });
    } catch (error) {
        console.log("error in all bids api call", error);
        return NextResponse.json({ message: error.message }, { status: 500, headers: corsHeaders });
    }
}