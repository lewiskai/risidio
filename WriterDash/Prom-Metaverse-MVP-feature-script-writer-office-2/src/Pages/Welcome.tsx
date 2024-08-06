import { Link } from "react-router-dom";
import RedButton from "../Components/Buttons/RedButton";
import WhiteButton from "../Components/Buttons/WhiteButton";
import Connect from "../Layouts/Wallet/ConnectToWallet";


const Welcome = () => {
  return (
    <main>
      <div className="welcome-background">
        <div className="logo"></div>
        <div className="welcome__message">
          <div className="welcome__message-container">
            <h1 className="welcome__message-title">Welcome to Prom</h1>

            <p className="welcome__message-description">
              (A small introduction about prom) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
            <Link to="/account">
              <RedButton
                text="Create an account"
                type="submit"
                className="
                welcome__message-button--red"
              />
            </Link>

            <Link to="/" 
            className="welcome__message-link">
              Visit as a guest
            </Link>

            <Link to="/signin">
              <WhiteButton
                className="welcome__message-button--white"
                text="Sign in"/>
            </Link>
            <Connect className="welcome-connect" text="Log in with wallet"></Connect>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
