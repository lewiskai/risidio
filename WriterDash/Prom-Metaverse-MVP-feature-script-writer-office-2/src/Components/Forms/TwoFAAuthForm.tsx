import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import RedButton from "../Buttons/RedButton";
import WhiteButton from "../Buttons/WhiteButton";
import {
  useDisable2FALoginMutation,
  useEnable2FALoginMutation,
} from "../../store/tfa";

type TwoFASettingsProps = {
  closeModal: () => void;
  twoFAStatus: boolean | undefined;
  open2FAConfirmPopup: () => void;
};

const TwoFAAuthForm: React.FC<TwoFASettingsProps> = ({
  closeModal,
  twoFAStatus,
  open2FAConfirmPopup,
}) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [enable2FARequest, { isLoading: enable2FALoading }] =
    useEnable2FALoginMutation();
  const [disable2FARequest, { isLoading: disable2FALoading }] =
    useDisable2FALoginMutation();
    
  const handleRequest = async () => {
    if (email !== confirmEmail) {
      toast.error("Emails do not match.");
      return;
    }

    const payload = { email: email };
    const request = twoFAStatus ? disable2FARequest : enable2FARequest;

    try {
      await request(payload).unwrap();
      closeModal();
      open2FAConfirmPopup();
    } catch (err) {
      let errorMessage = "An unexpected error occurred";

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "object" && err !== null && "data" in err) {
        const errorData = (err as { data?: { message?: string } }).data;
        if (errorData && typeof errorData.message === "string") {
          errorMessage = errorData.message;
        }
      }

      toast.error(errorMessage);
    }
  };

  const isLoading = enable2FALoading || disable2FALoading;
  const buttonText = isLoading ? "Loading..." : "Submit";

  return (
    <div className="user__password-form">
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-black">
          E-mail
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input mt-1 w-full rounded-full border-gray-300 shadow-sm"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 text-sm font-medium text-black">
          Confirm E-mail
        </label>
        <input
          type="email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          className="form-input mt-1 block w-full rounded-full border-gray-300 shadow-sm"
        />
      </div>
      
      <div className="user__password-form-buttons user__password-form-buttons--profile mt-16">
        <WhiteButton text="Cancel" onClick={closeModal} />
        <RedButton onClick={handleRequest} text={buttonText} type="submit" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default TwoFAAuthForm;
