import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // custom login page
  },
  callbacks: {
    async signIn({ user }) {
      // ✅ After Google signup, redirect user to login page
      console.log("User signed in:", user);
      return true;
    },
    async redirect({ url, baseUrl }) {
      // After signup → go to login page
      return "/login";
    },
  },
});

export { handler as GET, handler as POST };
