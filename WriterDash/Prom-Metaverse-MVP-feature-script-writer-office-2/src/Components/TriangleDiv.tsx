type Props = {
  classNameMain?: string,
  classNameSecond?: string,

}
const TriangleDiv: React.FC<Props> = ({
  classNameMain,
  classNameSecond,
}) => {
  return (
    <div className={`${classNameMain} triangle-container`}>
      <div className={`${classNameSecond} triangle-up`}></div>
    </div>
  );
};

export default TriangleDiv;
