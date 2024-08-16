import { env } from "@/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts", // Ensure this path is correct
  dialect: "postgresql",
  out: "./drizzle", // Adjust the output directory as needed
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
