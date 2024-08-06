import classNames from "classnames";
import TransparentButton from "../../../Components/Buttons/TransparentButton";
import RedButton from "../../../Components/Buttons/RedButton";

type Props = {
  userName: string,
  userActionDescription: string,
  notificationType: 'add' | 'script',
}

const NotificationCard: React.FC<Props> = ({
  userName,
  userActionDescription,
  notificationType,
}) => {


  const handlerAccept = () => {
    // event.stopPropagation();
  }
  return (
    <div
      className={classNames(
        "notification__card",
        { "notification__card--add": notificationType === 'add' }
      )}
    >

      <div className="notification__card-top">
        <div className="navbar__img-content navbar__img-content--notification"></div>

        <div className="notification__card-top--text">
          <h1 className="notification__card-title">
            New
          </h1>


          <p className="notification__card-description">
            {userName} {userActionDescription}
          </p>

          <div
            className={classNames(
              "notification__card-buttons",
              {
                "notification__card-buttons--block": notificationType === 'add',
              }
            )}
          >
            <TransparentButton text="Deny"
              className="button--transparent"
              onClick={handlerAccept} />

            <RedButton text="Accept"
              onClick={handlerAccept}
              className="button--accept" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default NotificationCard;