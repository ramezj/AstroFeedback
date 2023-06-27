"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = useSession()
    return (
        <>
        <div className="navbar bg-transparent">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl ml-1 mt-2">🚀 AstroFeedback</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end mr-1 mt-2">
      {
        session 
        ? <><Link href="/dashboard" class="btn btn-primary normal-case">Dashboard</Link></>
        : <><Link href="/api/auth/signin" class="btn btn-primary normal-case">Sign In</Link></>
      }
    </div>
  </div>
</div>
</>
    )
}