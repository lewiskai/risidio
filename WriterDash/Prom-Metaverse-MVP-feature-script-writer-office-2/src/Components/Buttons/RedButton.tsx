type Props = {
  className?: string;
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const RedButton: React.FC<Props> = ({ text, type, className, onClick }) => {
  return (
    <button
    className={`
    bg-[#DC1720] 
       rounded-full 
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

export default RedButton;
