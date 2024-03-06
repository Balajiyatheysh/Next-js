import { getSession } from "../../../actions";
import Link from "next/link";
import {redirect} from "next/navigation";


const PremiumPage = async () =>{
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/next-cookie-session/");
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only premium user can see the content!</h1>
        <Link href="/next-cookie-session/profile">
          Go to the profile page to upgrade to premium
        </Link>
      </div>
    );
  };

  return (
    <div className="premium">
      <h2>Welcome to Premium page</h2>
      <ul>
        <li>Mocktail</li>
        <li>Cocktail</li>
        <li>Beer</li>
      </ul>
    </div>
  );
};

export default PremiumPage;