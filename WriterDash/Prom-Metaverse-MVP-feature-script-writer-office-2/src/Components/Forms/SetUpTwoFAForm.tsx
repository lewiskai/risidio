import { Checkbox } from "@mui/material";
import RedButton from "../Buttons/RedButton";
import WhiteButton from "../Buttons/WhiteButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useEnable2FALoginMutation,
  useSetTFAReminderMutation,
} from "../../store/tfa";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../store/auth";

const SetUpTwoFAForm = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const [setTFAReminderRequest] = useSetTFAReminderMutation();
  const [enable2FARequest, { isLoading }] = useEnable2FALoginMutation();

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleDelaySetupTFA = () => {
    const payload = { status: checked ? "never" : "later" };
    setTFAReminderRequest(payload)
      .unwrap()
      .then(() => navigate("/onboarding"))
      .catch((err) => toast.error(err.data.message));
  };

  const handleSetupTFA = () => {
    const enable2FARequestPayload = { email: user?.email };
    enable2FARequest(enable2FARequestPayload)
      .unwrap()
      .then(() => navigate("/onboarding"))
      .catch((err) => toast.error(err.data.message));
  };

  return (
    <div className="flex flex-col">
      <div className="user__password-form-buttons gap-[15px]">
        <RedButton
          className="setup-tfa-button--red"
          text={isLoading ? "Loading..." : "Set up now"}
          type="submit"
          onClick={handleSetupTFA}
        />
        <WhiteButton
          onClick={handleDelaySetupTFA}
          className="setup-tfa-button--white"
          text={checked ? "Close" : "Remind me later"}
        />
      </div>
      <div className="flex justify-center items-center my-6">
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p>Don’t show this again</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SetUpTwoFAForm;
