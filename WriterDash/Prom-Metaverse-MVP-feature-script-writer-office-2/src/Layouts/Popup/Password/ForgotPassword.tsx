import { NavLink, useNavigate } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import TextInput from "../../../Components/Inputs/TextInput";
import { useFormik } from "formik";
import { ForgotValidationSchema } from "../../../validations/auth";
import ErrorMessage from "../../../Components/Forms/ErrorMessage";
import { useForgotMutation } from "../../../store/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotValidationSchema(),
    onSubmit: () => handleForgotPasswordRequest(),
  });

  const navigate = useNavigate()

  const [forgotPasswordRequest, { isLoading }] = useForgotMutation();

  const handleForgotPasswordRequest = () => {
    const payload = {
      email: values.email
    }
    forgotPasswordRequest(payload)
    .unwrap()
    .then((res) => {
      localStorage.setItem("@prom-user-email", values.email);
      navigate('/password-verification')
      console.log(res)
    })
    .catch((err) => {
      toast.error(err.data.message)
    })
  }

  return (
    <section className="password">
      <h1 className="password-title">forgot password</h1>

      <p className="password-message">
        Enter your e-mail and we’ll send you a link to reset your password.
      </p>

      <form className="password__form">
        <TextInput
          type="text"
          name="email"
          label={"E-mail"}
          value={values.email}
          onChange={handleChange}
          className={
            errors.email
              ? `border-[#DC1720] password__form-input`
              : `password__form-input`
          }
        />

        {errors.email && <ErrorMessage errorText={errors.email} />}

        <NavLink to={"/reset-password"}>
          <WhiteButton
            text={isLoading ? 'Loading...' : 'Submit'}
            onClick={handleSubmit}
            className="password__form-button"
          />
        </NavLink>

        <NavLink to={"/signin"} className="password-link">
          Back to login
        </NavLink>
      </form>
    </section>
  );
};

export default ForgotPassword;
