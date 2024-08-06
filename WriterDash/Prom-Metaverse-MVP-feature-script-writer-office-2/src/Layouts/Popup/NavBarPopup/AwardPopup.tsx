import RedButton from "../../../Components/Buttons/RedButton";

type Props = {
  closeAwardModal: () => void,
}
const AwardPopup: React.FC<Props> = ({
  closeAwardModal,
}) => {
  return (
    <section className="award">
      <h1 className="award-title">
        You are now level 12
      </h1>

      <p className="award-message">
        To thank you for your investment in PROM, here is your reward
      </p>


      <div className="award__main">
        <p className="award__main-text">
          100
        </p>

        <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.5 63C48.897 63 63 48.897 63 31.5C63 14.103 48.897 0 31.5 0C14.103 0 0 14.103 0 31.5C0 48.897 14.103 63 31.5 63Z" fill="#FFCD61" />
          <path d="M31.0078 7.875C18.2306 7.875 7.875 18.2306 7.875 31.0078C7.875 43.785 18.2306 54.1406 31.0078 54.1406C43.785 54.1406 54.1406 43.785 54.1406 31.0078C54.1406 24.8726 51.7034 18.9887 47.3652 14.6504C43.0269 10.3122 37.143 7.875 31.0078 7.875ZM31.0078 48.3722C26.4025 48.3722 21.9858 46.5427 18.7293 43.2863C15.4729 40.0298 13.6434 35.6131 13.6434 31.0078C13.6434 26.4025 15.4729 21.9858 18.7293 18.7293C21.9858 15.4729 26.4025 13.6434 31.0078 13.6434C35.6131 13.6434 40.0298 15.4729 43.2863 18.7293C46.5427 21.9858 48.3722 26.4025 48.3722 31.0078C48.3722 35.6131 46.5427 40.0298 43.2863 43.2863C40.0298 46.5427 35.6131 48.3722 31.0078 48.3722ZM25.2394 31.0275L31.0275 39.69L36.7763 31.0275L31.0275 22.3453L25.2394 31.0275Z" fill="white" />
        </svg>

      </div>

      <RedButton text="Claim reward" type="button"
      onClick={closeAwardModal}></RedButton>
    </section>
  )
}

export default AwardPopup;