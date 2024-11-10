import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "@/lib/cors";
import db from "@/utils/db";

// Create a MySQL connection pool (reuse the same pool configuration as in registration logic)
// const pool = mysql.createPool({
//   host: process.env.NODE_ENV === 'development' ? process.env.DEV_HOST : process.env.PROD_HOST,
//   user: process.env.NODE_ENV === 'development' ? process.env.DEV_USER : process.env.PROD_USER,
//   password: process.env.NODE_ENV === 'development' ? "" : process.env.PROD_PASSWORD,
//   database: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_NAME : process.env.PROD_DB_NAME,
// });

// Token generation function
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, userhandlename: user.handlename },
    process.env.JWT_LOGIN_KEY,
    { expiresIn: "1d" }
  );
};

// Login logic
export async function POST(req) {
  const headers = cors(req); // Get CORS headers

  // Handle CORS preflight
  if (headers.status === 200) {
    return new Response(null, { status: 200, headers }); // Return early for OPTIONS request
  }

  return new Promise(async (resolve, reject) => {
    console.log("check environment===>", process.env.NODE_ENV);
    try {
      const formData = await req.formData();
      const handlename = formData.get("handlename");
      const password = formData.get("password");
      // Check if the user exists in the database
      const [user] = await db.execute(
        "SELECT * FROM user WHERE handlename = ?",
        [handlename]
      );

      if (user.length === 0) {
        // User not found
        return resolve(
          new Response(
            JSON.stringify({ error: "Invalid handlename or password" }),
            { status: 401 } // Unauthorized
          )
        );
      }

      const userRecord = user[0];

      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, userRecord.password);

      if (!isPasswordValid) {
        // Invalid password
        return resolve(
          new Response(
            JSON.stringify({ error: "Invalid handlename or password" }),
            { status: 401 }
          )
        );
      }

      // Generate a token for the user
      const token = generateToken({ id: userRecord.id, handlename: userRecord.handlename });

      // Respond with the token
      return resolve(
        new Response(
          JSON.stringify({ message: "Login successful", token }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        )
      );
    } catch (error) {
      console.error("Error in login logic:", error);
      return resolve(
        new Response(JSON.stringify({ error: "Login failed" }), {
          status: 500,
        })
      );
    }
  });
}
