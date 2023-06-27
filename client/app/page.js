"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "@/components/Navbar"

export default function Component() {
  return (
    <>
    <Navbar />
    </>
  )
}