"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Component() {
    const router = useRouter();
    const [ user, setUser ] = useState();
    const { data: session, status } = useSession({
        // Redirect User if Unauthenticated
        required:true,
        onUnauthenticated() {
          router.push('/')
        }
    })
  return (
    <div className='bg-[#010306] h-full min-h-screen bg-center bg-no-repeat w-full'>
    <title>AstroFeedback | Dashboard</title>
    <Navbar />
    <center>
      {JSON.stringify(session?.user)}
    </center>
    </div>
  )
}