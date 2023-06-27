"use client"
import { useSession, signIn, signOut } from "next-auth/react"
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
        ? <><button class="btn btn-primary normal-case">Dashboard</button></>
        : <><button class="btn btn-primary normal-case">Sign In</button></>
      }
    </div>
  </div>
</div>
</>
    )
}