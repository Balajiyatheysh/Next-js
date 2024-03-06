import { getSession } from "../../../actions";
import LoginForm from "../../../components/loginForm";
import {redirect} from "next/navigation";


const Loginpage = async() => {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/next-cookie-session/")
  }

  return (
    <div className="login">
      <h1>Welcome to the Loginpage</h1>
      <LoginForm/>
    </div>
  )
}

export default Loginpage;