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
        ? <><Link href="/dashboard" className="btn normal-case bg-[#1a1c1e] text-white hover:bg-[#141618]">Dashboard</Link></>
        : <><button onClick={() => {signIn("google")}} className="btn normal-case bg-[#1a1c1e] text-white hover:bg-[#141618]">Sign In</button></>
      }
    </div>
  </div>
</div>
</>
    )
}