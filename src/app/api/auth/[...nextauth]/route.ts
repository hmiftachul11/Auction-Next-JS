import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { database } from "@/db/database";
import { Adapter } from "next-auth/adapters";
import { accounts, sessions, users, verificationTokens } from "@/db/schema";

// Extend the session interface to include user.id
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  adapter: DrizzleAdapter(database, {
    usersTable: users,
    accountsTable: accounts as any,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }) as unknown as Adapter,
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      if (session.user) {
        session.user.id = user.id; // Assign the user's ID to the session
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
