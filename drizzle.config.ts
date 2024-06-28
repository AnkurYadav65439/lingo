import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: 'postgresql',
    schema: "./db/schema.ts",
    out: "./drizzle",          //where it put migrations
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
});
