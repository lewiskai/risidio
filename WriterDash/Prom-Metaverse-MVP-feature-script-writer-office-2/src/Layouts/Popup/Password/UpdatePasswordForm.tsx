import { NavLink, useNavigate } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import TextInput from "../../../Components/Inputs/TextInput";
import { useFormik } from "formik";
import { UpdatePasswordValidationSchema } from "../../../validations/auth";
import ErrorMessage from "../../../Components/Forms/ErrorMessage";
import { useUpdatePasswordMutation } from "../../../store/auth";
import { ToastContainer, toast } from "react-toastify";

const UpdatePasswordForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: UpdatePasswordValidationSchema(),
    onSubmit: () => handleUpdatePassword(),
  });

  const navigate = useNavigate();

  const [updatePasswordRequest, { isLoading }] = useUpdatePasswordMutation();

  const handleUpdatePassword = () => {
    const payload = {
      email: localStorage.getItem("@prom-user-email"),
      password: values.password,
    };
    updatePasswordRequest(payload)
      .unwrap()
      .then(() => {
        navigate("/password-success-reset");
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return (
    <section className="password">
      <h1 className="password-title">reset password</h1>

      <form className="password__form">
        <TextInput
          type="password"
          name="password"
          label={"New Password"}
          value={values.password}
          onChange={handleChange}
          className="password__form-input--1 "
        />

        {errors.password && <ErrorMessage errorText={errors.password} />}

        <TextInput
          type="password"
          name="confirmPassword"
          label={"Confirm New Password"}
          value={values.confirmPassword}
          onChange={handleChange}
          className="password__form-input "
        />

        {errors.confirmPassword && (
          <ErrorMessage errorText={errors.confirmPassword} />
        )}

        <NavLink to={"/reset-password"}>
          <WhiteButton
            type="submit"
            onClick={handleSubmit}
            text={isLoading ? "Loading..." : "Submit"}
            className="password__form-button"
          />
        </NavLink>

        <NavLink to={"/signin"} className="password-link">
          Back to login
        </NavLink>
      </form>
      <ToastContainer />
    </section>
  );
};

export default UpdatePasswordForm;
