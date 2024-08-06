type Props = {
  iconClick: () => void,
}
const UserIcon: React.FC<Props> = ({
  iconClick,
}) => {
  return (
     <button
        onClick={iconClick}
        className="navbar__img-container">
        <div className="navbar__img-content"></div>


      </button>

  )
}

export default UserIcon;