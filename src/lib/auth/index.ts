import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/lib/db";
import { config } from "dotenv";
import {
  accountsTable,
  sessionsTable,
  usersTable,
  verificationsTable,
} from "@/lib/db/schema";

config({ path: ".env.local" });

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user: usersTable,
      session: sessionsTable,
      verification: verificationsTable,
      account: accountsTable,
    },
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
