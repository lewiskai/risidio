type Props = {
  className?: string,
  text: string,
  type?: "button" | "submit",
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


const TransparentButton: React.FC<Props> = ({
  className,
  text,
  type,
  onClick
}) => {

  return (

    <button
      className={`${className} 
      bg-[] rounded-full 
      text-[#30374D]font-jost text-[17px] 
      font-semibold
      border border-solid border-1`
    }
      type={type}
      onClick={onClick}>
      {text}
    </button>


  );
}

export default TransparentButton;