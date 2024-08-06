import QuestionIcon from "../Components/Icons/Question";
import SetUpTwoFAForm from "../Components/Forms/SetUpTwoFAForm";

const SetUpTFAPage = () => {
  return (
    <main>
      <div className="welcome-background">
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>
        <div className="welcome__message setup-tfa">
          <div className="setup-tfa-container--form">
            <h1 className="setup-tfa-header">
              Set up for 2-Factor Authentication
            </h1>

            <p className="welcome__message-description mb-4">
              We wish to protect your account by setting up a 2-factor
              authentication. After setting up with your e-mail, you will
              receive a verification code whenever you log in.
            </p>
            <p className="welcome__message-description">
              Do you wish to proceed to the set up page?
            </p>
            <SetUpTwoFAForm />
            <p className="text-[#979EA9] text-[13px]">You can always set up 2-factor authentication by going to your account settings</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SetUpTFAPage;
