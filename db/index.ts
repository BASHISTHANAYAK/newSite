// import { drizzle } from "drizzle-orm/neon-serverless";
// import ws from "ws";
// import * as schema from "@db/schema";

// if (!process.env.DATABASE_URL) {
//   throw new Error(
//     "DATABASE_URL must be set. Did you forget to provision a database?",
//   );
// }

// export const db = drizzle({
//   connection: process.env.DATABASE_URL,
//   schema,
//   ws: ws,
// });


import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "@db/schema";

const db = drizzle({
  connection: process.env.DATABASE_URL + "?sslmode=require",
  schema,
  ws: process.env.NODE_ENV === "production" ? undefined : ws,
});

export { db };