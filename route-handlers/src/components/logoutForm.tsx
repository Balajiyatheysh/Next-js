import { logout } from "../actions";

const logoutForm = () => {
  return (
    <form action={logout}>
      <button>Logout</button>
    </form>
  )
}

export default logoutForm;