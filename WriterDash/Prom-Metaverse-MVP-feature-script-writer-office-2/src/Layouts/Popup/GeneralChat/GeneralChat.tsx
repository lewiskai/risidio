import { useEffect, useState } from 'react';
// import { Message } from '../../../utils/types/Message';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'; // import { Picker, BaseEmoji } from "emoji-mart";
import classNames from 'classnames';
const GeneralChat = () => {
  // const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [emojiPickerWidth, setEmojiPickerWidth] = useState(260);
  const [emojiPickerHeight, setEmojiPickerHeight] = useState(380);
  const [showChat, setShowChat] = useState(true);

  const handleSendMessage = () => {
    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   {
    //     sender: { userName: 'You', status: 'Online' },
    //     content: newMessage,
    //     timestamp: new Date(),
    //   },
    // ]);

    // Clear the input field after sending the message
    setNewMessage('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    const emoji = emojiObject.emoji;
    setNewMessage((prevMessage) => prevMessage + emoji);
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1728) {
        setEmojiPickerWidth(400);
        setEmojiPickerHeight(580);
      } else {
        setEmojiPickerWidth(260);
        setEmojiPickerHeight(380);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShowChat = () => {
    setShowChat(!showChat);
  };

  return (
    <section className={classNames('chat', { 'chat--open': showChat })}>
      <button className='chat__button' onClick={handleShowChat}>
        {showChat ? (
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9 0C11.3869 3.55683e-08 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18H4.5C3.102 18 2.403 18 1.852 17.772C1.48791 17.6212 1.15709 17.4002 0.878439 17.1216C0.599789 16.8429 0.378767 16.5121 0.228001 16.148C0 15.597 0 14.898 0 13.5V9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM13 8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7H6C5.73478 7 5.48043 7.10536 5.29289 7.29289C5.10536 7.48043 5 7.73478 5 8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9H12C12.2652 9 12.5196 8.89464 12.7071 8.70711C12.8946 8.51957 13 8.26522 13 8ZM10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11H6C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12Z'
              fill='#30374D'
            />
          </svg>
        ) : (
          <svg
            width='17'
            height='13'
            viewBox='0 0 17 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.6709 1L1.00009 6.24129L7.6709 11.4826'
              stroke='#030D2E'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.6709 1L9.00009 6.24129L15.6709 11.4826'
              stroke='#030D2E'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )}
      </button>

      <nav className='chat__nav'>
        <h1 className='chat__nav-title'>PROM chat</h1>
      </nav>

      <div className='chat__main'>
        {/* <div className='chat__main-messages'> */}
          {/* {messages.map((message, index) => (
            <div key={index} className='chat__message'>
              <div className='chat__message-img'></div>

              <div className='chat__message-info'>
                <h1 className='chat__message-sender'>
                  {/* {message.sender.userName} */}
                {/* </h1> */}
                {/* <p className='chat__message-content'>{message.content}</p> */}
              {/* </div> */}
            {/* </div> */}
          {/* ))} */}
        {/* </div> */}

        <div className='chat__input-container'>
          <input
            className='chat__input'
            type='text'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type your message here'
            onKeyDown={handleKeyDown}
          />
          <div className='chat__input-emojies'>
            <button
              className='chat__input-icon'
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 15.5C12.33 15.5 14.3 14.04 15.11 12H4.89C5.69 14.04 7.67 15.5 10 15.5ZM6.5 9C6.89782 9 7.27936 8.84196 7.56066 8.56066C7.84196 8.27936 8 7.89782 8 7.5C8 7.10218 7.84196 6.72064 7.56066 6.43934C7.27936 6.15804 6.89782 6 6.5 6C6.10218 6 5.72064 6.15804 5.43934 6.43934C5.15804 6.72064 5 7.10218 5 7.5C5 7.89782 5.15804 8.27936 5.43934 8.56066C5.72064 8.84196 6.10218 9 6.5 9ZM13.5 9C13.8978 9 14.2794 8.84196 14.5607 8.56066C14.842 8.27936 15 7.89782 15 7.5C15 7.10218 14.842 6.72064 14.5607 6.43934C14.2794 6.15804 13.8978 6 13.5 6C13.1022 6 12.7206 6.15804 12.4393 6.43934C12.158 6.72064 12 7.10218 12 7.5C12 7.89782 12.158 8.27936 12.4393 8.56066C12.7206 8.84196 13.1022 9 13.5 9ZM10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z'
                  fill='#030D2E'
                />
              </svg>
            </button>
          </div>
        </div>

        {showEmojiPicker && (
          <EmojiPicker
            className='chat__emoji'
            width={emojiPickerWidth}
            height={emojiPickerHeight}
            onEmojiClick={handleEmojiClick}
          />
        )}
      </div>
    </section>
  );
};

export default GeneralChat;
