import Password from "../../../Components/Forms/PasswordChangeForm";
type Props = {
  closeModal: () => void;
};

const ChangePassword: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-1">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <section className="user__password">

          <h1 className="user__password-title">change password</h1>

          <Password closeModal={closeModal}></Password>
        </section>
      </div>
    </div>
  );
};

export default ChangePassword;
