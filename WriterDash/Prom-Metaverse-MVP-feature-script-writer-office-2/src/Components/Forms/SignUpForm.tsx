import { Link, useNavigate } from "react-router-dom";
import TextInput from "../Inputs/TextInput";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import RedButton from "../Buttons/RedButton";
import { RegisterValidationSchema } from "../../validations/auth";
import { useRegisterMutation } from "../../store/auth";
import ErrorMessage from "./ErrorMessage";
import Connect from "../../Layouts/Wallet/ConnectToWallet";

const SignupForm = () => {
  const [request, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterValidationSchema(),
    onSubmit: () => initRequest(),
  });

  const initRequest = () => {
    request(values)
      .unwrap()
      .then(() => {
        navigate("/email-verification");
        localStorage.setItem("@prom-user-email", values.email);
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return (
    <div className="form   ">
      <TextInput
        name="email"
        type="email"
        label="E-mail"
        className="form-input--1"
        value={values.email}
        onChange={handleChange}
      />

      {errors.email && <ErrorMessage errorText={errors.email} />}

      <p className="form-notification">
        PROM will never send you any email except for the account creation
        validation.
      </p>

      <TextInput
        name="password"
        type="password"
        label="Password"
        className="form-input--2"
        value={values.password}
        onChange={handleChange}
      />

      {errors.password && <ErrorMessage errorText={errors.password} />}

      <TextInput
        name="confirmPassword"
        type="password"
        label="Confirm password"
        className="form-input--3"
        value={values.confirmPassword}
        onChange={handleChange}
      />

      {errors.confirmPassword && (
        <ErrorMessage errorText={errors.confirmPassword} />
      )}

      <RedButton
        type="submit"
        onClick={() => handleSubmit()}
        className="px-[30px] py-[10px] mt-2 text-[1rem]"
        text={isLoading ? "Loading..." : "Create an account"}
      />
      <Link
        to="/signin"
        className="welcome__message-link welcome__message-link--create mt-3 mb-3"
      >
        Already have an account ?
      </Link>

      <Connect text="Log in with wallet"></Connect>

      <ToastContainer />
    </div>
  );
};
export default SignupForm;
