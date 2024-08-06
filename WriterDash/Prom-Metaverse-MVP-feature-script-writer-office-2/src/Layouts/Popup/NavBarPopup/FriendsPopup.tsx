import { NavLink } from 'react-router-dom';
import WhiteButton from '../../../Components/Buttons/WhiteButton';
import TriangleDiv from '../../../Components/TriangleDiv';
import ContactCard from '../../Cards/ContactCard';
import { PromUser } from '../../../utils/types/User';
import searchIcon from '../../../assets/searchIcon.svg';
type Props = {
  contactValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCallVisibility: () => void;
  collaborators: PromUser[];
  onButtonClick: (userName: string) => void;
  showNoFound: boolean;
  onButtonClickAdd: () => void;
  // showGuestUserProfile: (userName: string) => void,
  showGuestUserProfile: () => void;
};

const FriendsPopup: React.FC<Props> = ({
  contactValue,
  handleInputChange,
  handleCallVisibility,
  collaborators,
  onButtonClick,
  showNoFound,
  onButtonClickAdd,
  showGuestUserProfile,
}) => {
  return (
    <article className='contact'>
      <form className='contact__form' action='get'>
        <div className='contact__form-top'>
          <h1 className='contact__form-title'>Your Connections</h1>

          <WhiteButton
            className='button--contact'
            type='button'
            text='Add Contact'
            onClick={onButtonClickAdd}
          />
        </div>

        <div className='contact__form-search-container'>
          <input
            type='text'
            className='contact__form-search-input'
            placeholder='Search a contact'
            onChange={handleInputChange}
            value={contactValue}
          />

          <i className='contact__form-search-icon'>
            <img src={searchIcon} alt={searchIcon} />
          </i>
        </div>
      </form>

      <section className='contact__contacts-container'>
        {showNoFound ? (
          collaborators.map((collaborator) => (
            <ContactCard
              userName={collaborator.userName}
              roles={collaborator.roles || []}
              status={collaborator.status}
              key={collaborator.userName}
              handleCallVisibility={handleCallVisibility}
              onButtonClick={onButtonClick}
              showGuestUserProfile={showGuestUserProfile}
            />
          ))
        ) : (
          <>
            <p className='contact__error-text'>
              {contactValue} is not on your collaborators list
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

export default FriendsPopup;
