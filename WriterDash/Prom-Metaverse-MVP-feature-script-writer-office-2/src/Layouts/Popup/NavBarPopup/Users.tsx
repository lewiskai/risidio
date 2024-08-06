import { NavLink } from 'react-router-dom';
import WhiteButton from '../../../Components/Buttons/WhiteButton';
import TriangleDiv from '../../../Components/TriangleDiv';
import { PromUser } from '../../../utils/types/User';
import UserCard from '../../Cards/UserCard';

type Props = {
  contactValueUser: string;
  handleInputChangeUser: (event: React.ChangeEvent<HTMLInputElement>) => void;
  users: PromUser[];
  onButtonClickAddUser: (
    userName: string,
    roles: string[],
    status: string
  ) => void;
  showNoFoundUser: boolean;
  onButtonClickBack: () => void;
};

const Users: React.FC<Props> = ({
  contactValueUser,
  handleInputChangeUser,
  onButtonClickAddUser,
  showNoFoundUser,
  users,
  onButtonClickBack,
}) => {
  return (
    <article className='contact'>
      <form className='contact__form' action='get'>
        <div className='contact__form-top'>
          <h1 className='contact__form-title'>Users</h1>

          <WhiteButton
            className='button--contact'
            type='button'
            text='Back to collaborators'
            onClick={onButtonClickBack}
          />
        </div>

        <div className='contact__form-search-container'>
          <input
            type='text'
            className='contact__form-search-input'
            placeholder='Search a contact'
            onChange={handleInputChangeUser}
            value={contactValueUser}
          />

          <i className='contact__form-search-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.52377 1.50471e-08C5.4834 9.06589e-05 4.45814 0.25462 3.53352 0.742353C2.6089 1.23009 1.81174 1.93688 1.20854 2.80376C0.605347 3.67065 0.213604 4.67249 0.0659994 5.7257C-0.0816049 6.7789 0.0192094 7.85294 0.360031 8.8582C0.700854 9.86346 1.2718 10.7708 2.02524 11.5045C2.77867 12.2382 3.69275 12.777 4.69121 13.0759C5.68967 13.3749 6.74355 13.4253 7.76494 13.223C8.78632 13.0206 9.74559 12.5715 10.5627 11.9129L13.3659 14.7796C13.5106 14.9226 13.7045 15.0018 13.9058 15C14.107 14.9982 14.2995 14.9156 14.4419 14.7701C14.5842 14.6245 14.6649 14.4277 14.6666 14.2218C14.6684 14.016 14.591 13.8177 14.4512 13.6697L11.648 10.8029C12.4064 9.81904 12.8786 8.63669 13.0106 7.39118C13.1425 6.14567 12.929 4.88732 12.3943 3.76014C11.8596 2.63296 11.0255 1.6825 9.98726 1.01752C8.94906 0.352541 7.74878 -8.41056e-05 6.52377 1.50471e-08ZM1.53458 6.67235C1.53458 5.31911 2.06022 4.0213 2.99588 3.06442C3.93153 2.10754 5.20055 1.56996 6.52377 1.56996C7.84698 1.56996 9.116 2.10754 10.0517 3.06442C10.9873 4.0213 11.513 5.31911 11.513 6.67235C11.513 8.02559 10.9873 9.3234 10.0517 10.2803C9.116 11.2372 7.84698 11.7747 6.52377 11.7747C5.20055 11.7747 3.93153 11.2372 2.99588 10.2803C2.06022 9.3234 1.53458 8.02559 1.53458 6.67235Z'
                fill='#30374D'
              />
            </svg>
          </i>
        </div>
      </form>
      <section className='contact__contacts-container'>
        {showNoFoundUser ? (
          users.map((user) => (
            <UserCard
              userName={user.userName}
              roles={user.roles || []}
              key={user.userName}
              onButtonClickAdd={onButtonClickAddUser}
            />
          ))
        ) : (
          <>
            <p className='contact__error-text'>
              user with a name {contactValueUser} is not found
            </p>
            <NavLink
              to={'users'}
              className='contact__error-text contact__error-link'
            >
              search for user
            </NavLink>
          </>
        )}
      </section>
      <TriangleDiv classNameSecond='triangle-up--contact'></TriangleDiv>
    </article>
  );
};

export default Users;
