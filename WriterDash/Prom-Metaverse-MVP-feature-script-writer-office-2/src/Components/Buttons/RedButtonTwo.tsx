type Props = {
  className?: string;
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const RedButtonTwo: React.FC<Props> = ({ text, type, className, onClick }) => {
  return (
    <button
    className={`
    bg-[#DC1720] 
       rounded-lg
       text-white 
       font-jost 
       text-[15px] 
       font-semibold
       button--red
       ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RedButtonTwo;
