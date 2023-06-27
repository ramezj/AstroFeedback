import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session ({session, token, user}) {
            session.accessToken = token
            session.user.id = user.id
            return session
        }
    },
    adapter: PrismaAdapter(prisma),
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }