"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import { useRouter } from 'next/navigation';

export default function Component() {
    const router = useRouter();
    const { data: session, status } = useSession({
        // Redirect User if Unauthenticated
        required:true,
        onUnauthenticated() {
          router.push('/')
        }
    })
  return (
    <div className='bg-[url("/blue.png")] h-full min-h-screen bg-fill bg-no-repeat w-full'>
    <Navbar />
    <center>
      {JSON.stringify(session.user)}
    </center>
    </div>
  )
}