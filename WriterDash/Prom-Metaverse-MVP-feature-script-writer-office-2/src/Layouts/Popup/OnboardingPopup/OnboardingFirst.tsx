import { useState } from "react";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import TriangleDiv from "../../../Components/TriangleDiv";

type Props = {
  textArray: string[];
  userName?: string;
  titleArray: string[];
  onTutorialCompletion: () => void; // Callback function for tutorial completion
};
const OnBoardingFirst: React.FC<Props> = ({
  textArray,
  userName,
  titleArray,
  onTutorialCompletion,
}) => {
  const [onboardingIndex, setOnboardingIndex] = useState<number>(0);

  const [showTriangle, setShowTriangle] = useState(true);

  const handleButtonClick = () => {
    setOnboardingIndex((prevIndex) => prevIndex + 1);
    setShowTriangle(true);

    // Check if the tutorial is completed
    if (onboardingIndex === textArray.length - 1) {
      // Call the callback function to notify that the tutorial is completed
      onTutorialCompletion();
    }
  };

  const handleSkipClick = () => {
    setOnboardingIndex(4);
    // Call the callback function to notify that the tutorial is completed
    onTutorialCompletion();
  };
  return (
    <article
      className={` onboarding-message onboarding-message--${onboardingIndex}`}
    >
      <div className="onboarding-message-img"></div>

      <div className="onboarding-message-container">
        <h1 className="onboarding-message-title">
          {titleArray[onboardingIndex]} {userName}
        </h1>

        <p className="onboarding-message-message">
          {textArray[onboardingIndex]}
        </p>
      </div>

      <div className="onboarding-message__buttons">
        <WhiteButton
          text="Skip Tutorial"
          onClick={handleSkipClick}
          type="button"
        ></WhiteButton>

        <button
          type="button"
          className="onboarding-message__buttons-button"
          onClick={handleButtonClick}
        >
          <svg
            width="12"
            height="19"
            viewBox="0 0 12 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.44012 17.6603L10.6201 9.50033L1.44012 1.34033"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {onboardingIndex === 3 && <div className="building-tutorial"></div>}

      {showTriangle && (
        <TriangleDiv
          classNameSecond={`triangle-up--travel--${onboardingIndex}`}
        ></TriangleDiv>
      )}
    </article>
  );
};

export default OnBoardingFirst;
