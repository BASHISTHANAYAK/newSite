// import { defineConfig } from "drizzle-kit";

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL, ensure the database is provisioned");
// }

// export default defineConfig({
//   out: "./migrations",
//   schema: "./db/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
// });

import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export default {
  schema: "./db/schema.ts",
  out: "./migrations",
  driver: "pg",
  dialect: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;