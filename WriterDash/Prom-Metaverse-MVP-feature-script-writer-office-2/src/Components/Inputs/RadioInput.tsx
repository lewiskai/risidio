import React from "react";

type Props = {
  name: string,
  id: string,
  value: string,
  onRadioChange: (id: string) => void,
  text: string,
  isCheked: boolean,
  // setIsCheked: () => void,

}
const RadioInput: React.FC<Props> = ({
  name,
  id,
  value,
  onRadioChange,
  text,
  isCheked,
  // setIsCheked,
}) => {

  // const [isChecked, setIsChecked] = useState(id === "option1");

  const handleChange = () => {
    onRadioChange(id);
    // setIsCheked(); 
  };
  return (

    <div className="checkbox-wrapper">
      <label>
        {text}
        <input
        // id={id}
          type="radio"
          className="modern-radio"
          value={value}
          name={name}
          checked={isCheked}
          onChange={handleChange} />
        <span></span>
      </label>

    </div>


  )
}
export default RadioInput;