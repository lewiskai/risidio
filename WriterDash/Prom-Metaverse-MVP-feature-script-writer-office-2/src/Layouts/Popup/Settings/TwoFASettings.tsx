import TwoFAAuthForm from "../../../Components/Forms/TwoFAAuthForm";

type Props = {
  closeModal: () => void;
  twoFAStatus: boolean | undefined;
  open2FAConfirmPopup: () => void;
};
const TwoFASettings: React.FC<Props> = ({
  closeModal,
  twoFAStatus,
  open2FAConfirmPopup,
}) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-1">
      <div className="w-full h-full flex flex-col justify-center items-center">
      <section className="user__password font-jost h-[auto]">
        <h1 className="user__password-title font-light mb-0 text-[33px]">
          ADD YOUR EMAIL
        </h1>
        <p className="text-center font-normal  mb-8">
        Add your e-mail to receive a verification code whenever you log in.
        </p>

        <TwoFAAuthForm
          open2FAConfirmPopup={open2FAConfirmPopup}
          twoFAStatus={twoFAStatus}
          closeModal={closeModal}
        ></TwoFAAuthForm>
      </section>
    </div>
  </div>
  );
};

export default TwoFASettings;
