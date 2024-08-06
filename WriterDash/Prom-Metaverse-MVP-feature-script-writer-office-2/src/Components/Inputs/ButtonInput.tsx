type Props = {
  name: string,
  value: string,
  className: string,
  children?: React.ReactNode;
};

const ButtonInput: React.FC<Props> = ({
  name,
  value,
  className,
  children,
}) => {
  return (
    <input type="button"
      name={name}
      value={value}
      className={className} >
      {children}
    </input>

  );
}

export default ButtonInput;