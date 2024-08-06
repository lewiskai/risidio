import { Link, NavLink, useNavigate } from "react-router-dom";
import TextInput from "../Inputs/TextInput";
import { ToastContainer, toast } from "react-toastify";
import RedButton from "../Buttons/RedButton";
import { setCredential, useLoginMutation } from "../../store/auth";
import { useFormik } from "formik";
import { LoginValidationSchema } from "../../validations/auth";
import { useAppDispatch } from "../../store/hooks";
import ErrorMessage from "./ErrorMessage";
import { useNo2FALoginMutation } from "../../store/tfa";
import { useCheckTFAStatus } from "../../utils/hooks/check-2fa-status";

const SigninForm = () => {
  const [no2FALoginRequest, { isLoading: no2FALoginIsLoading }] =
    useNo2FALoginMutation();
  const [loginRequest, { isLoading: loginIsLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const twoFAStatus = useCheckTFAStatus();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema(),
    onSubmit: async () => {
      await initRequest();
    },
  });

  const initRequest = async () => {
    try {
      if (twoFAStatus) {
        await loginRequest(values).unwrap();
        navigate("/email-verification");
      } else {
        const res = await no2FALoginRequest(values).unwrap();
        if (res.data.tfaReminderStatus === "never") {
          dispatch(
            setCredential({
              user: res.data,
              access_token: res.data.token,
            })
          );
          navigate("/onboarding");
        } else if (res.data.tfaReminderStatus === "later" && !twoFAStatus) {
          dispatch(
            setCredential({
              user: res.data,
              access_token: res.data.token,
            })
          );

          navigate("/setup-tfa");
        } else {
          dispatch(
            setCredential({
              user: res.data,
              access_token: res.data.token,
            })
          );

          navigate("/setup-tfa");
        }
      }
      localStorage.setItem("@prom-user-email", values.email);
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

  return (
    <div className="signin-form">
      <div className="signin-form-inputs">
        <TextInput
          name="email"
          type="email"
          label="E-mail"
          className={errors.email ? `border-[#DC1720] form-input--3` : `form-input--3`}
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage errorText={errors.email} />}

        <TextInput
          name="password"
          type="password"
          label="Password"
          className={errors.email ? `border-[#DC1720] form-input--3` : `form-input--4`}
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorMessage errorText={errors.password} />}
      </div>
      <NavLink
        to={"/forgot-password"}
        className={
          "block mb-6 sm:mb-10 text-left underline decoration-solid font-normal mt-4 ml-2"
        }
      >
        Forgot password
      </NavLink>

      <div className="flex items-center justify-center mb-4">
        <RedButton
          type="submit"
          onClick={() => handleSubmit()}
          className="mb-2 w-[149px] sm:w-[203px]"
          text={no2FALoginIsLoading || loginIsLoading ? "Loading..." : "Log in"}
        />
      </div>

      <Link to="/account" className="welcome__message-link mb-10">
        No account yet? Create an account
      </Link>

      <ToastContainer />
    </div>
  );
};

export default SigninForm;
