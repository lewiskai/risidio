import { useState } from 'react';
import avatar from '../../../assets/avatarSmall.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import dialIcon from '../../../assets/dialIcon.svg';
import emojis from '../../../assets/emojis.svg';
import sendMessage from '../../../assets/sendMessage.svg';

interface UserData {
  username: string;
  role: string;
  avatar?: string;
}

const userData: UserData[] = [
  { username: 'Peter', role: 'ScreenWriter', avatar: avatar },
  { username: 'Louai', role: 'ScreenWriter', avatar: avatar },
  { username: 'Celeine', role: 'ScreenWriter', avatar: avatar },
  { username: 'Natalia', role: 'ScreenWriter', avatar: avatar },
  { username: 'David', role: 'ScreenWriter', avatar: avatar },
  { username: 'David', role: 'ScreenWriter', avatar: avatar },
  { username: 'David', role: 'ScreenWriter', avatar: avatar },
];

const MessagePopup = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredUserData, setFilteredUserData] = useState(userData);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim().toLowerCase();
    setSearchValue(inputValue);

    if (inputValue === '') {
      setFilteredUserData(userData);
    } else {
      const matchedUserIndex = userData.findIndex((user) =>
        user.username.toLowerCase().includes(inputValue)
      );

      if (matchedUserIndex !== -1) {
        const matchedUser = userData[matchedUserIndex];
        const restOfUsers = userData.filter(
          (_user, index) => index !== matchedUserIndex
        );
        setFilteredUserData([matchedUser, ...restOfUsers]);
      } else {
        setFilteredUserData([]);
      }
    }
  };

  return (
    <section className='message'>
      <div className='message__user-chat-wrapper'>
        <div className='user-chat-input-wrapper'>
          <input
            type='text'
            placeholder='Search'
            className='input-wrapper'
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          <img
            src={searchIcon}
            alt='searchIcon'
            className='search-icon-input'
          />
        </div>
        <div className='user-list-container'>
          {filteredUserData.map((user, index) => (
            <div key={index} className='chat-list-users-wrapper'>
              <div className='user-chats-container'>
                <img src={user.avatar} alt={user.avatar} />
                <div>
                  <h6 className='user-chats-heading'>{user.username}</h6>
                  <span className='user-chats-role'>{user.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='new-chat-btn-wrapper'>
          <button type='button'>New</button>
        </div>
      </div>
      <div className='message__user-chat-details'>
        {/* user details wrapper */}
        <div className='user-chat-header'>
          <div className='user-info'>
            <img src={avatar} alt={avatar} className='user-header-avatar' />
            <span className='user-chats-heading'>username</span>
          </div>
          <div className='user-profile-wrapper'>
            {/* call wrapper */}
            <div className='dial-icon-wrapper'>
              <img src={dialIcon} alt='' className='dial-icon' />
            </div>
            {/* profile wrapper */}
            <div className='profile-chat-btn-wrapper'>
              <button type='button'>Profile</button>
            </div>
          </div>
        </div>
        <div className='chat-details'>
          <div className='chat-for-user'>
            <img src={avatar} alt={avatar} />
            <div className='chat-message'>
              <p className='message-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <span className='message-time'>Jan 10 - 1.23pm</span>
            </div>
          </div>
          <div className='chat-for-friend'>
            <img src={avatar} alt={avatar} />
            <div className='chat-message'>
              <p className='message-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <span className='message-time'>Jan 10 - 1.23pm</span>
            </div>
          </div>
        </div>
        <div className='chat-input-wrapper'>
          <input
            type='text'
            placeholder='Type your message here'
            className='chat-input'
          />
          <img src={emojis} alt='' className='chat-emojis' />
          <img src={sendMessage} alt='' className='chat-send-message' />
        </div>
      </div>
      <div className='triangle-up-message'></div>
    </section>
  );
};

export default MessagePopup;
