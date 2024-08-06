import TriangleDiv from '../../../Components/TriangleDiv';
import NotificationCard from '../../Cards/NotificationCard/NotificationCard';

const NotificationPopup = () => {
  return (
    <article className='notification'>
      <h1 className='notification-title'>Notifications</h1>

      <section className='notification__card-container'>
        <NotificationCard
          notificationType='add'
          userName='userName'
          userActionDescription='wants to add you in their contact list'
        />

        <NotificationCard
          notificationType='script'
          userName='userName'
          userActionDescription="reviews your script 'script title"
        />

        <NotificationCard
          notificationType='script'
          userName='userName'
          userActionDescription="reviews your script 'script title"
        />

        <NotificationCard
          notificationType='script'
          userName='userName'
          userActionDescription="reviews your script 'script title"
        />
      </section>

      <TriangleDiv
        classNameMain='triangle-container--notification'
        classNameSecond='triangle-up--notification'
      ></TriangleDiv>
    </article>
  );
};

export default NotificationPopup;
