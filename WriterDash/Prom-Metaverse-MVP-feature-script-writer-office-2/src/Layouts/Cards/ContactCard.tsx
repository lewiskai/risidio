type Props = {
  userName: string,
  roles: string[],
  status: string,
  handleCallVisibility: () => void,
  onButtonClick: (userName: string) => void;
  // showGuestUserProfile: (userName: string) => void,
  showGuestUserProfile: () => void,
};  



const ContactCard: React.FC<Props> = ({
  userName,
  roles,
  status,
  handleCallVisibility,
  onButtonClick,
  showGuestUserProfile,
}) => {
  return (
    <div className="contact__card">
      <button
      // onClick={() =>showGuestUserProfile(userName)}
      onClick={showGuestUserProfile}
       className="navbar__img-content--contact
      h-51px">
        <div className={`contact__card-status contact__card-status--${status}`}></div>
      </button>

      <div className="contact__card-info">
        <h1 className="contact__card-title">
          {userName}
        </h1>

        <h2 className="contact__card-role">
          {roles}
        </h2>
      </div>

      <div className="contact__card-buttons">
        <button type="button"
          className="contact__card-button"
          name="message">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <rect x="0.5" y="0.5" width="29.6563" height="29" rx="14.5" stroke="#5B6179" />
            <path d="M19.6943 9.75H10.6943C10.0739 9.75 9.56934 10.2529 9.56934 10.8705V17.6295C9.56934 18.2471 10.0739 18.75 10.6943 18.75H12.3818V21L15.9543 18.75H19.6943C20.3148 18.75 20.8193 18.2471 20.8193 17.6295V10.8705C20.8184 10.5728 20.6995 10.2877 20.4886 10.0776C20.2777 9.86751 19.992 9.7497 19.6943 9.75Z" fill="#5B6179" />
          </svg>
        </button>

        <button className="contact__card-button"
          type="button"
          name="call"
          onClick={() => {
            onButtonClick(userName);
            handleCallVisibility();
          }}
          disabled={status !== undefined && status !== 'online'}>

          {(status !== undefined && status !== 'online') ? (
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.25">
                <rect x="1.24658" y="0.5" width="29.2532" height="28.6055" rx="14.3027" stroke="#5B6179" />
                <path d="M14.0979 9.86841C14.202 9.86838 14.3042 9.89633 14.3937 9.94933C14.4833 10.0023 14.557 10.0784 14.607 10.1697L14.6366 10.2335L15.7976 13.136C15.8444 13.2528 15.8519 13.3816 15.8192 13.5031C15.7864 13.6245 15.7151 13.732 15.6159 13.8094L15.5579 13.8489L14.5861 14.4317L14.6227 14.4915C15.0852 15.2258 15.7065 15.8471 16.4408 16.3096L16.5 16.3456L17.0834 15.375C17.1481 15.2671 17.246 15.1831 17.3626 15.1357C17.4791 15.0882 17.6079 15.08 17.7295 15.1121L17.7963 15.1347L20.6988 16.2957C20.7954 16.3343 20.8799 16.3981 20.9435 16.4805C21.007 16.5629 21.0472 16.6609 21.0599 16.7642L21.0639 16.8344V19.1564C21.0639 20.1183 20.2843 20.8979 19.2876 20.8967C14.3075 20.5943 10.3374 16.6243 10.0344 11.6099C10.0344 11.1657 10.2041 10.7383 10.5089 10.4151C10.8136 10.0919 11.2303 9.89737 11.6738 9.87131L11.7759 9.86841H14.0979Z" fill="#5B6179" />
              </g>
            </svg>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
              <rect x="0.75" y="0.5" width="29.6563" height="29" rx="14.5" stroke="#5B6179" />
              <path d="M13.7793 10C13.8847 9.99997 13.9883 10.0283 14.079 10.082C14.1698 10.1357 14.2444 10.2128 14.2952 10.3053L14.3252 10.37L15.5016 13.3112C15.549 13.4295 15.5567 13.56 15.5235 13.6831C15.4903 13.8061 15.418 13.9151 15.3175 13.9935L15.2587 14.0335L14.274 14.6241L14.311 14.6847C14.7797 15.4288 15.4093 16.0584 16.1534 16.5271L16.2134 16.5635L16.8046 15.58C16.8701 15.4706 16.9693 15.3855 17.0874 15.3375C17.2055 15.2894 17.336 15.281 17.4593 15.3135L17.5269 15.3365L20.4681 16.5129C20.566 16.552 20.6517 16.6167 20.716 16.7002C20.7804 16.7837 20.8211 16.883 20.834 16.9876L20.8381 17.0588V19.4118C20.8381 20.3865 20.0481 21.1765 19.0381 21.1753C13.9916 20.8688 9.96868 16.8459 9.66162 11.7647C9.6616 11.3146 9.83358 10.8815 10.1424 10.554C10.4512 10.2265 10.8734 10.0293 11.3228 10.0029L11.4263 10H13.7793Z" fill="#5B6179" />
            </svg>

          )}



        </button>
      </div>
    </div>
  );
}

export default ContactCard;