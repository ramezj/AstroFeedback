import { useSession, signIn, signOut } from "next-auth/react"

export default function Button() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <h1 class="text-2xl font-medium font-red">
    Signed In As
  </h1> {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}