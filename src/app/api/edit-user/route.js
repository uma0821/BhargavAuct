import db from "@/utils/db";
import { NextResponse } from 'next/server';
import cors from "@/lib/cors";

export async function GET(req) {
    
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('user_id'); 

    // Handle CORS headers
   const corsHeaders = cors(req);

   // Return early for preflight requests
   if (req.method === "OPTIONS") {
     return new Response(null, { status: 204, headers: corsHeaders });
   }

    try {
        
        if(userId) {
            const [rows] = await db.execute('SELECT * FROM user WHERE id = ?', [userId]); 
            if (rows.length === 0) {
                return NextResponse.json({ message: 'User not found' }, { status: 404, headers: corsHeaders });
            }
            return NextResponse.json({ data: rows[0] }, { status: 200, headers: {
                ...corsHeaders,
                "Cache-Control": "no-store, max-age=0, must-revalidate",
              } });

        } 

    } catch (error) {
        console.log("error in fetching user", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500, headers: corsHeaders });
    }

} 