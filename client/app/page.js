"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Navbar from "@/components/Navbar"

export default function Component() {
  return (
    <div className='bg-[url("/blue.png")] h-full min-h-screen bg-fill bg-no-repeat w-full'>
    <Navbar />
    </div>
  )
}