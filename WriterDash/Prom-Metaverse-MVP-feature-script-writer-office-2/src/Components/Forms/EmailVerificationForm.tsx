import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import VerificationInput from "react-verification-input";
import RedButton from "../Buttons/RedButton";
import { ToastContainer, toast } from "react-toastify";
import { setCredential } from "../../store/auth";
import {
  useSendVerificationEmailMutation,
  useVerifyLoginMutation,
  useVerifySignupMutation,
} from "../../store/tfa";
import { useCheckTFAStatus } from "../../utils/hooks/check-2fa-status";

const EmailVerificationForm = () => {
  const [input, setInput] = useState("");
  const [timeInSeconds, setTimeInSeconds] = useState(899);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const twoFAStatus = useCheckTFAStatus();
  const email = localStorage.getItem("@prom-user-email");

  const [verifySignup, { isLoading: verifySignupLoading }] =
    useVerifySignupMutation();
  const [resendEmail] = useSendVerificationEmailMutation();
  const [verifyLogin, { isLoading: verifyLoginLoading }] =
    useVerifyLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (value: string) => {
    setInput(value);
  };

  const handleVerification = async () => {
    const payload = { email, code: input || code };

    try {
      const response = await (twoFAStatus ? verifyLogin : verifySignup)(
        payload
      ).unwrap();
      dispatch(
        setCredential({
          user: response.data,
          access_token: response.data.token,
        })
      );
      navigate(twoFAStatus ? "/onboarding" : "/character-creation");
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

  const handleResendEmail = async () => {
    try {
      const response = await resendEmail({ email }).unwrap();
      toast.success(response.message);
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

  useEffect(() => {
    if (timeInSeconds <= 0) return;

    const timerId = setInterval(() => {
      setTimeInSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeInSeconds]);

  const formattedTime = `${String(Math.floor(timeInSeconds / 60)).padStart(
    2,
    "0"
  )}:${String(timeInSeconds % 60).padStart(2, "0")}`;

  return (
    <div className="relative">
      <p className="verification-enter-code">Enter code</p>
      <VerificationInput
        classNames={{ container: "verification-container" }}
        validChars="0-9"
        placeholder=""
        onChange={handleInput}
        value={input || code || ""}
      />
      <p className="verification-dash">-</p>
      {timeInSeconds > 0 ? (
        <p className="verification-resend flex justify-end">
          Resend code in: {formattedTime}
        </p>
      ) : (
        <div className="verification-resend flex justify-end">
          <button className="font-medium underline" onClick={handleResendEmail}>
            Resend
          </button>
        </div>
      )}
      <div className="flex items-center justify-center mb-4 mt-6">
        <RedButton
          type="submit"
          className="mb-2 none"
          onClick={handleVerification}
          text={
            verifyLoginLoading || verifySignupLoading ? "Loading..." : "Verify"
          }
        />
        <RedButton
          type="submit"
          onClick={handleVerification}
          className="mb-2"
          text={
            verifyLoginLoading || verifySignupLoading ? "Loading..." : "Verify"
          }
        />
      </div>
      <p className="verification-spam-folder">
        Can’t find it? Please check your spam folder.
      </p>
      <ToastContainer />
    </div>
  );
};

export default EmailVerificationForm;
