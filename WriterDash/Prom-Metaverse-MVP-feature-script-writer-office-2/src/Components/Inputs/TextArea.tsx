type Props = {
  name: string,
  id?: string,
  label: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
  value?: string,
  className?: string,

};
const TextArea: React.FC<Props> = (
  {
    name,
    id,
    label,
    onChange,
    value,
    className,
  }
) => {
  return (
    <label htmlFor={id} className="form-title">
      {label}
      <textarea name={name} id={id}
        value={value}
        onChange={onChange}
        className={`form-input ${className} outline-none`}
      />
    </label>

  )
}

export default TextArea;