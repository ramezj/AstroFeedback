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
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
          }),
    ],
    session: {
        strategy: "jwt",
    },
    // pages: {
    //     signIn: "/login",
    // },
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,

}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }