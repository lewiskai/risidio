import Connect from "../Layouts/Wallet/ConnectToWallet";
import QuestionIcon from "../Components/Icons/Question";
import EmailVerificationForm from "../Components/Forms/EmailVerificationForm";
import { useState } from "react";

const EmailVerificationPage = () => {
  const [userEmail] = useState(localStorage.getItem("@prom-user-email"));
  return (
    <main>
      <div className="welcome-background">
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>

        <div className="verification__message verification__message--form">
          <div className="welcome__message-container--form">
            <h1 className="welcome__message-title">Verify your email</h1>
            <p className="password-message mb-0 mx-auto verification-sub-title">
              A verification code has been sent to
            </p>
            <b className="verification-sub-title">{userEmail}</b>
            <EmailVerificationForm />

            <Connect text="Or connect wallet"></Connect>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmailVerificationPage;
