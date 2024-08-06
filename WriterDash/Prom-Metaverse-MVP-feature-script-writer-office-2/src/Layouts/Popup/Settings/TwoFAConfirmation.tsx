import WhiteButton from "../../../Components/Buttons/WhiteButton";

type Props = {
  closeModal: () => void;
  twoFAStatus: boolean | undefined;
};
const TwoFAConfirmation: React.FC<Props> = ({ twoFAStatus }) => {
  return (
    <section className="user__password h-[auto]">
      <h1 className="user__password-title font-medium mb-0 text-[33px]">
        {!twoFAStatus ? "2fa enabled" : "2fa disabled"}
      </h1>

      <p className="text-center font-normal mb-8">
        {!twoFAStatus
          ? "You just enabled the 2-factor authentication. "
          : "You just disabled the 2-factor authentication. "}
      </p>

      <div
        className="user__password-form-buttons
      user__password-form-buttons--profile mt-16"
      >
        <WhiteButton
          text="Close"
          onClick={() => window.location.reload()}
        ></WhiteButton>
      </div>
    </section>
  );
};

export default TwoFAConfirmation;
