type Props = {
title: string,
description: string,
};

const MovieCard:React.FC<Props> = ({
  title,
  description,
}) => {
  return (
<div className="moviecard">
  <div className="moviecard-img">
  </div>

  <h1 className="moviecard-title">
{title}
    </h1>
    <p className="moviecard-description">
      {description}
    </p>

</div>
  )
}

export default MovieCard;