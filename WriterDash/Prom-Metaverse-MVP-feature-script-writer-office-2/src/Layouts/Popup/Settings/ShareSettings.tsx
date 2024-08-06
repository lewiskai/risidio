import RadioInput from "../../../Components/Inputs/RadioInput";

type Props = {
  isToggled: boolean,
  toggleShare: () => void,
  selectedOption: string, // Add selectedOption to props
  handleRadioChange: (id: string) => void;

};
const ShareSettings: React.FC<Props> = ({
  isToggled,
  toggleShare,
  selectedOption,
  handleRadioChange,


}) => {



  return (
    <section className="settings">

      <h1 className="settings-title">
        Share Settings
      </h1>

      <div className="settings__share">
        <button type="button"
          className="settings__share-button"
          onClick={toggleShare}>
          {isToggled ? (
            <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.5" y="2.5" width="39" height="19" rx="9.5" fill="white" />
              <rect x="2.5" y="2.5" width="39" height="19" rx="9.5" stroke="#5B6179" />
              <circle cx="12" cy="12" r="11.5" fill="#B6BAC4" stroke="#B6BAC4" />
            </svg>

          ) : (
            <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="2.5" width="39" height="19" rx="9.5" fill="white" />
              <rect x="0.5" y="2.5" width="39" height="19" rx="9.5" stroke="#9A101B" />
              <circle cx="30" cy="12" r="12" fill="#DC1720" />
            </svg>

          )}
        </button>

        <p className="settings__share-text">
          Share with the community
        </p>
      </div>

      {!isToggled && (
        <div className="settings__share-options">
          <RadioInput
            name={"sharedOptions"}
            id={"option1"}
            text={"With everyone"}
            value="option1"
            onRadioChange={handleRadioChange}
            isCheked={selectedOption === "option1"}
          //  isCheked={isChecked}            
          />

          <RadioInput
            name={"sharedOptions"}
            id={"option2"}
            text={"Only upon request"}
            value="option2"
            onRadioChange={handleRadioChange}
            isCheked={selectedOption === "option2"}
          // isCheked={isChecked}            

          />

          <RadioInput
            name={"sharedOptions"}
            id={"option3"}
            text={"Only with my collaborators"}
            value="option3"
            onRadioChange={handleRadioChange}
            isCheked={selectedOption === "option3"}
          // isCheked={isChecked}            

          />
        </div>

      )}




    </section>
  )
}

export default ShareSettings;