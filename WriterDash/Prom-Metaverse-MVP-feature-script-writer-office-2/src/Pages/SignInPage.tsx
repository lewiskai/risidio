import SigninForm from '../Components/Forms/SignInForm';
import Connect from '../Layouts/Wallet/ConnectToWallet';
import QuestionIcon from '../Components/Icons/Question';

const SignInPage = () => {
  return (
    <main>
      <div className='welcome-background'>
        <div className='logo'></div>
        <QuestionIcon></QuestionIcon>
        <div className='welcome__signin'>
          <div className='welcome__signin-container--form'>
            <h1 className='welcome__signin-title'>Log in</h1>
            <SigninForm />

            <Connect className='welcome__signin-connect' text='Or Log in with wallet'></Connect>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
