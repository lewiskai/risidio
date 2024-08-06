import classNames from "classnames";

type Props = {
  userName: string,
  handleCallVisibility: () => void,
}
const OutgoingCall: React.FC<Props> = ({
  userName,
  handleCallVisibility,
}) => {
  return (
    <div
      className={classNames('call call--outgoing', {
      })}
    >
      <div className="call__left">
        <div className="call-img"></div>
        <div className="call__text">
          <p>calling...</p>
          <h1 className="call__text-title">{userName}</h1>
        </div>

      </div>
      <button
        type="reset"
        onClick={handleCallVisibility}
        className="call__button--hang-out">
        <svg width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="52.1158" height="51" rx="25.5" fill="#DC1720" />
          <path d="M38.0894 33.0017C37.9124 33.1811 37.6905 33.3096 37.4469 33.3738C37.2032 33.438 36.9468 33.4355 36.7044 33.3665L36.544 33.309L29.5684 30.3733C29.2876 30.2553 29.0528 30.0492 28.8993 29.7862C28.7458 29.5232 28.6818 29.2175 28.7171 28.915L28.7478 28.7479L29.3962 26.0823L29.231 26.0436C27.1791 25.5917 25.052 25.6056 23.0062 26.0843L22.8435 26.1252L23.5237 28.7811C23.5997 29.076 23.5778 29.3877 23.4614 29.6691C23.3449 29.9505 23.1402 30.1865 22.878 30.3415L22.7255 30.4181L15.7888 33.4448C15.558 33.5458 15.3043 33.5828 15.0543 33.5521C14.8042 33.5214 14.5671 33.4241 14.3675 33.2703L14.2396 33.1578L10.2386 29.2089C8.58123 27.573 8.56375 24.9039 10.2608 23.1884C19.2515 15.1217 32.8438 15.0327 41.9993 23.0383C42.7647 23.7937 43.2126 24.813 43.2512 25.8878C43.2898 26.9625 42.9163 28.0114 42.207 28.8198L42.0383 29.0007L38.0894 33.0017Z" fill="white" />
        </svg>

      </button>

    </div>
  )
}

export default OutgoingCall;