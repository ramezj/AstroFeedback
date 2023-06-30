import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        // }),
    ],
    // callbacks: {
    //     async signIn({ account, profile }) {
    //       if (account.provider === "google") {
    //         return profile.email_verified && profile.email.endsWith("@example.com")
    //       }
    //       return true // Do different verification for other providers that don't have `email_verified`
    //     },
    //   },
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,

}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }