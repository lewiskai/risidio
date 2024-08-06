import { Link } from "react-router-dom";

type Props = {
  text: string;
  className?: string;
};
const Connect: React.FC<Props> = ({ text, className }) => {
  const walletArray = ["wallet1", "wallet2", "wallet3,"];

  return (
    <>
      <p className={`welcome__message-connect ${className}`}>
        {text}
      </p>
      <div className="welcome__icon-container">
        {walletArray.map((wallet) => {
          return (
            <Link to={"/invalid-wallet"} key={wallet}>
              <svg
                width="38"
                height="38"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  id="Ellipse 422"
                  cx="21.5"
                  cy="21.5"
                  r="21.5"
                  fill="#D9D9D9"
                />
              </svg>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Connect;
