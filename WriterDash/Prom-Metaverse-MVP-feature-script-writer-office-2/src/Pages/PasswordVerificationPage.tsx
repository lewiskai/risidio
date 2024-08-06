import Connect from "../Layouts/Wallet/ConnectToWallet";
import QuestionIcon from "../Components/Icons/Question";
import { useState } from "react";
import PasswordVerificationForm from "../Components/Forms/PasswordVerificationForm";

const PasswordVerificationPage = () => {
  const [userEmail] = useState(localStorage.getItem("@prom-user-email"));
  return (
    <main>
      <div className="welcome-background">
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>

        <div className="verification__message verification__message--form">
          <div className="welcome__message-container--form">
            <h1 className="welcome__message-title">Reset your password</h1>
            <p className="password-message mb-0 mx-auto verification-sub-title">
              A password reset code has been sent to
            </p>
            <b className="verification-sub-title">{userEmail}</b>
            <PasswordVerificationForm />

            <Connect text="Or connect wallet"></Connect>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PasswordVerificationPage;
