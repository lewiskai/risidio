import { NavLink } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteButton";

const PasswordSuccessResetForm = () => {
  return (
    <section className="password password-reset">
      <p className="password-message  mx-auto verification-sub-title mb-6">
        Your password has been successfully reset!{" "}
      </p>
      <NavLink to={"/signin"}>
        <WhiteButton
          type="submit"
          text={"Back to Login"}
          className="password__form-button mt-0"
        />
      </NavLink>
    </section>
  );
};

export default PasswordSuccessResetForm;
