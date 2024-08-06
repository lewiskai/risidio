import WhiteButton from "../../Components/Buttons/WhiteButton";

type Props = {
  userName: string,
  roles: string[],
  onButtonClickAdd: (userName: string, roles: string[], status: string) => void;
};


const ContactCard: React.FC<Props> = ({
  userName,
  roles,
  onButtonClickAdd,
}) => {
  return (
    <div className="contact__card">
      <div className="navbar__img-content--contact
      h-51px">
        <div className={`contact__card-status contact__card-status--${status}`}></div>
      </div>

      <div className="contact__card-info">
        <h1 className="contact__card-title">
          {userName}
        </h1>

        <h2 className="contact__card-role">
          {roles}
        </h2>
      </div>

      <WhiteButton text="Add"
        type="button"
        className="button--user-add"
        onClick={() => onButtonClickAdd(userName, roles, status)}/>
    </div>
  );
}

export default ContactCard;