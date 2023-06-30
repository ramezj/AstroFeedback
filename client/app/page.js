"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Navbar from "@/components/Navbar"

export default function Component() {
  return (
    <div className='bg-[url("/main.jpg")] h-full min-h-screen bg-bottom bg-cover bg-no-repeat w-full'>
      <title>AstroFeedback</title>
    <Navbar />
    </div>
  )
}