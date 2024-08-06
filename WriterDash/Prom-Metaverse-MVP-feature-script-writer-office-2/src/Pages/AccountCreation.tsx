import SignupForm from "../Components/Forms/SignUpForm";
import QuestionIcon from "../Components/Icons/Question";

const AccountCreation = () => {
  return (
    <main>
      <div className="welcome-background">
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>

        <div className="welcome__message welcome__message--form ">
          {/* <div className="welcome__message-container--form  bg-red-800 "> */}
          <h1 className="welcome__message-title ">Create your account</h1>
          <SignupForm />

          {/* </div> */}
        </div>
      </div>
    </main>
  );
};

export default AccountCreation;
