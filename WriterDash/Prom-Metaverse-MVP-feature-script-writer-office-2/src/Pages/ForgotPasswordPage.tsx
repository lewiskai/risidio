import ForgotPassword from "../Layouts/Popup/Password/ForgotPassword";
import { ToastContainer } from "react-toastify";


const ForgotPasswordPage = () => {
  return (
    <div className="onboarding">
      <ForgotPassword />
      <ToastContainer />
    </div>
  );
};

export default ForgotPasswordPage;
