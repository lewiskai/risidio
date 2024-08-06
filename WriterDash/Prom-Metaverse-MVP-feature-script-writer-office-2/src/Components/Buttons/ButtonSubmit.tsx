type Props = {
  textButton: string,
}

const ButtonSubmit: React.FC<Props> = ( {
  textButton,
}) => {
return (
  <button type="submit" 
  className="button--form">
    {textButton}
  </button>
)
}

export default ButtonSubmit;