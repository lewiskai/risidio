type Props = {

  className?: string,
  id?: string,
  label: string,
  classNameLabel?: string,
  options: string[],
}

const SelectInput: React.FC<Props> = ({ className, id, label, classNameLabel, options }) => {
  return (

    <label className={`form-title ${classNameLabel} `}
      htmlFor={id}>
      {label}
      <select className={`form-input ${className} outline-none`} id={id}>

        {options.map(option => (
          <option value={option}
            key={option}>
            {option}
          </option>
        ))}

        {/* {options.map((option) => return {
        <option value={option}>{option}</option>

})} */}
        {/* <option value="Producer">Producer</option>
        <option value="Photographer">Photographer</option>
        <option value="Production-Artist">Production Artist</option>
        <option value="Production-Designer">Production Designer</option> */}
      </select>
    </label>
  );
};


export default SelectInput

