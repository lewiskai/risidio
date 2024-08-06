import { NavLink } from 'react-router-dom';
import WhiteButton from '../../Components/Buttons/WhiteButton';
import Connect from './ConnectToWallet';
import QuestionIcon from '../../Components/Icons/Question';

const InvalidWallet = () => {
  return (
    <div className='welcome-background'>
      <div className='logo'></div>
      <QuestionIcon></QuestionIcon>

      <article className='wallet'>
        <h1 className='wallet-title'>OOPS!</h1>

        <p className='wallet-description'>
          Looks like you don’t currently have these wallet, to continue download
          it below!
        </p>

        <div className='wallet-img'></div>

        <Connect text={'Or try these wallets'}></Connect>

        <NavLink to={'/signin'} className='wallet-button'>
          <WhiteButton
            className='button--wallet'
            text='Back to Log in'
          ></WhiteButton>
        </NavLink>
      </article>
    </div>
  );
};

export default InvalidWallet;
