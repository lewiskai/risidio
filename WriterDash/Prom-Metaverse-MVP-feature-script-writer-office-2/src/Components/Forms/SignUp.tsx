import { Link } from "react-router-dom";
import TextInput from "../Inputs/TextInput";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import RedButton from "../Buttons/RedButton";
import { RegisterValidationSchema } from "../../validations/auth";
import { useRegisterMutation } from "../../store/auth";

const SignupForm = () => {
  const [request, { isLoading }] = useRegisterMutation();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: RegisterValidationSchema(),
    onSubmit: () => initRequest(),
  });

  const initRequest = () => {
    request(values)
      .unwrap()
      .then(() => {
        toast.success("Registered Successfully");
      })
      .catch((error) => {
        console.group(error);
        toast.error(`Failed: ${error.message}`);
      });
  };

  return (
    <div className="form">
      <TextInput
        name="email"
        type="email"
        label="E-mail"
        className="form-input--1"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-900">{errors.email}</p>}
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
      {errors.password && <p className="text-red-900">{errors.password}</p>}

      {/* <TextInput
        name="password"
        type="password"
        label="Confirm password"
        className="form-input--3"
        value={confirmPassword}
        onChange={handleChange}
      /> */}

      {/* <button className="form-button"> */}

      <RedButton
        type="submit"
        className="mb-2 none"
        onClick={() => handleSubmit()}
        text={isLoading ? "loading..." : "Create an account"}
      />
      <RedButton
        type="submit"
        onClick={() => handleSubmit()}
        className="mb-2"
        text={isLoading ? "loading..." : "Create an account"}
      />

      <Link
        to="/signin"
        className="welcome__message-link
        welcome__message-link--create mt-7 mb-5"
      >
        Already have an account ?
      </Link>

      {/* </button> */}

      <ToastContainer />
    </div>
  );
};

export default SignupForm;
