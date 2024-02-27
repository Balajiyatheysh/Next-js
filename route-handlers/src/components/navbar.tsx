import Link from "next/link";
import LogoutForm from "./logoutForm"
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav>
      <Link href="/next-cookie-session/">Homepage</Link>
      <Link href="/next-cookie-session/premium">Premium</Link>
      <Link href="/next-cookie-session/profile">Profile</Link>
      <Link href="/next-cookie-session/login">Login</Link>
      {session.isLoggedIn && <LogoutForm/>}
    </nav>
  )
}

export default Navbar
