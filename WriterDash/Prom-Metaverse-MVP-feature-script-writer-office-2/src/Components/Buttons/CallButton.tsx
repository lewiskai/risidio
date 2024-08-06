type Props = {
  pathName: string,
  buttonName: string,
  className?: string,
  onClick?: () => void,
}
const CallButton: React.FC<Props> = ({
  pathName,
  buttonName,
  className,
  onClick,
}) => {
  return (
<button type='button' className={className}
onClick={onClick}>
  <img src={pathName}
  className="w-3.25 h-3.18"
   alt={buttonName} />

   <h1 className="Jost text-base text-gray-500">
    {buttonName}
   </h1>
</button>
  )
}

export default CallButton;