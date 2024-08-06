import { ChangeEvent } from "react";
type Props = {
  type: string;
  name: string;
  id?: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  disabled?: boolean;
};

const TextInput: React.FC<Props> = ({
  type,
  name,
  id,
  label,
  value,
  disabled,
  onChange,
  className,
}) => {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="form-title">
        {label}
      </label>
      <input
        type={type}
        name={name}
        disabled={disabled}
        id={id}
        value={value}
        onChange={onChange}
        className={`form-input ${className} outline-none`}
      />
    </div>
  );
};

export default TextInput;
