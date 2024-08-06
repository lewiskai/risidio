import { Link } from "react-router-dom";

type Props = {
  title: string,
  description: string,
}
const FastTravelCard: React.FC<Props> = ({
  title,
  description,
}) => {
  return (
    <Link className="travel__card"
    to={"/"}>
      <div className="travel__card-elipse">
        <div className="travel__card-icon"></div>
      </div>

      <div className="travel__card-text">
      <h1 className="travel__card-title">
        {title}
      </h1>

      <p className="travel__card-description">
        {description}
      </p>

      </div>

    </Link>
  )
}

export default FastTravelCard;