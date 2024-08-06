import UserIcon from "./UserIcon";

type Props = {
  imgPath?: string,
  imgAlt: string,
  onClick: () => void,
  className?: string,
  isUserIcon?: boolean,

}
const Icon: React.FC<Props> = ({
  imgPath,
  imgAlt,
  onClick,
  className,
  isUserIcon,
 }) => {
  return (
  isUserIcon ? (
    <UserIcon iconClick={onClick}/>
  ) : (
    <div className={`${className} navbar__icons-icon`}>
      <button onClick={onClick}>
      <img src={imgPath} alt={imgAlt} />

      </button>
    </div>

  )
  );
}

export default Icon;