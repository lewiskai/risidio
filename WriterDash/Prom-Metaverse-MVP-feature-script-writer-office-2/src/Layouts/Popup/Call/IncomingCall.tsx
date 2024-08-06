import classNames from "classnames";
import { callButtons } from "../../../utils/arrays/arrays";
import CallButton from "../../../Components/Buttons/CallButton";
import hangout from '../../../assets/hangout.svg';

type Props = {
  userName: string,
  handleCallVisibility: () => void,
}
const IncomingCall: React.FC<Props> = ({
  userName,
  handleCallVisibility,
}) => {
  return (
//remove hidden attribute
    <><section className="call call--mobile" hidden>

      <div className='flex flex-col items-center gap-3 mb-6'>
        <div className="call-img"></div>

        <h1 className='call__text-title'>{userName}</h1>
<p className="call__text text-red-600 font-normal"> calling...</p>
      </div>

      <div className='call__buttons'>
        {callButtons.map((button) => {
          return (
            <CallButton pathName={button.imgPath}
              buttonName={button.buttonName} />
          );
        })}
      </div>

      <CallButton className='mx-auto flex flex-col items-center'
        pathName={hangout} buttonName='End'
        onClick={handleCallVisibility} />
    </section><div
      className={classNames('call call--incoming', {})}
    >
        <div className="call__left">
          <div className="call-img"></div>
          <div className="call__text">
            <h1 className="call__text-title">{userName}</h1>
            <p>is calling...</p>
          </div>

        </div>

        <div className="call__buttons">
          <button
            type="reset"
            onClick={handleCallVisibility}
            className="call__button--hang-out">
            <svg width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="52.1158" height="51" rx="25.5" fill="#DC1720" />
              <path d="M38.0894 33.0017C37.9124 33.1811 37.6905 33.3096 37.4469 33.3738C37.2032 33.438 36.9468 33.4355 36.7044 33.3665L36.544 33.309L29.5684 30.3733C29.2876 30.2553 29.0528 30.0492 28.8993 29.7862C28.7458 29.5232 28.6818 29.2175 28.7171 28.915L28.7478 28.7479L29.3962 26.0823L29.231 26.0436C27.1791 25.5917 25.052 25.6056 23.0062 26.0843L22.8435 26.1252L23.5237 28.7811C23.5997 29.076 23.5778 29.3877 23.4614 29.6691C23.3449 29.9505 23.1402 30.1865 22.878 30.3415L22.7255 30.4181L15.7888 33.4448C15.558 33.5458 15.3043 33.5828 15.0543 33.5521C14.8042 33.5214 14.5671 33.4241 14.3675 33.2703L14.2396 33.1578L10.2386 29.2089C8.58123 27.573 8.56375 24.9039 10.2608 23.1884C19.2515 15.1217 32.8438 15.0327 41.9993 23.0383C42.7647 23.7937 43.2126 24.813 43.2512 25.8878C43.2898 26.9625 42.9163 28.0114 42.207 28.8198L42.0383 29.0007L38.0894 33.0017Z" fill="white" />
            </svg>

          </button>

          <button type="button"
            className="call__button--incoming">
            <svg width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="52.1158" height="51" rx="25.5" fill="#B0C147" />
              <path d="M21.9474 12C22.2021 11.9999 22.4522 12.0709 22.6715 12.2055C22.8907 12.34 23.0711 12.5333 23.1936 12.7649L23.2661 12.927L26.1082 20.2962C26.2227 20.5927 26.2412 20.9197 26.161 21.2281C26.0808 21.5364 25.9061 21.8094 25.6634 22.0059L25.5213 22.1061L23.1425 23.5859L23.232 23.7377C24.3642 25.6021 25.8851 27.1794 27.6827 28.3537L27.8277 28.4451L29.2558 25.9808C29.4141 25.7068 29.6539 25.4936 29.9392 25.3731C30.2244 25.2527 30.5397 25.2317 30.8375 25.3132L31.0009 25.3707L38.1062 28.3183C38.3427 28.4162 38.5496 28.5783 38.7051 28.7875C38.8606 28.9968 38.959 29.2455 38.9901 29.5077L39 29.6861V35.5814C39 38.0236 37.0915 40.0029 34.6516 40C22.4604 39.2321 12.7418 29.1525 12 16.4215C11.9999 15.2937 12.4154 14.2085 13.1614 13.388C13.9074 12.5674 14.9275 12.0735 16.0131 12.0074L16.2632 12H21.9474Z" fill="white" />
            </svg>

          </button>

        </div>

      </div></>
  )
}

export default IncomingCall;