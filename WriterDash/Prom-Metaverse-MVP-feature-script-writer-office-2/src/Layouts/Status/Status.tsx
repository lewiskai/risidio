type Props = {
  statusClick: (statusName: string) => void,
  className?: string,
}

const Status: React.FC<Props> = ({
  statusClick,
  className,
}) => {
  return (
    <div className={`status ${className}`}>
      <div className="status__row">
        <button className="status__row--online"
          onClick={() => statusClick('online')}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="7.5" fill="#B0C147" />
          </svg>
        </button>

        <p className="status__row-text">Online</p>
      </div>

      <div className="status__row">
        <button className="status__row--absent"
        onClick={() => statusClick('absent')}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="7.5" fill="#FFCD61" />
          </svg>
        </button>

        <p className="status__row-text">Absent</p>
      </div>


      <div className="status__row">
        <button className="status__row--offline"
        onClick={() => statusClick('offline')}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="7.5" fill="#5B6179" />
          </svg>
        </button>

        <p className="status__row-text">Offline</p>
      </div>

    </div>
  );
}

export default Status;