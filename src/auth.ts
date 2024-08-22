// // import { DrizzleAdapter } from "@auth/drizzle-adapter";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { database } from "@/db/database";
// import Google from "next-auth/providers/google";
// import { DrizzleAdapter } from "@auth/drizzle-adapter";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   adapter: DrizzleAdapter(database),
//   providers: [Google({ 
//     clientId: process.env.AUTH_GOOGLE_ID as string,
//     clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
//   })],
// });
