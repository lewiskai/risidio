import { useState } from "react";

const QuestionIcon = () => {
  const [onHover, setHover] = useState<boolean>(false);
  return (
    <>

        <div 

        className={`question flex items-center justify-center${
          onHover ? 'hovered' : ''
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        ?
      </div>
      {onHover && (
        <div className='question-wrapper' onMouseLeave={() => setHover(false)}>
          <div className='question-heading-container'>
            <h2 className='heading-container-primary-heading'>
              You’re on the PROM map
            </h2>
          </div>
          <div className='question-info'>
            <p className='info-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default QuestionIcon;
