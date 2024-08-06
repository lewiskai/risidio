import DeleteAccountForm from "../../../Components/Forms/DeleteAccount";
type Props = {
  closeModal: () => void;
};

const DeleteAccount: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <section className="user__password">

          <h1 className="user__password-title">delete account</h1>

          <DeleteAccountForm closeModal={closeModal}></DeleteAccountForm>
        </section>
      </div>
    </div>
  );
};

export default DeleteAccount;
