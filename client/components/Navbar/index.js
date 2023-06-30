"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = useSession()
    return (
        <>
        <div className="navbar bg-transparent">
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost normal-case text-xl ml-1 mt-2">🚀 AstroFeedback</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end mr-2 mt-3">
      {
        session 
        ? <><Link href="/dashboard" className="btn normal-case bg-indigo-500 text-white hover:bg-indigo-700">Dashboard</Link></>
        : <><Link href="/api/auth/signin" className="btn normal-case bg-indigo-500 text-white hover:bg-indigo-700">Sign In</Link></>
      }
    </div>
  </div>
</div>
</>
    )
}