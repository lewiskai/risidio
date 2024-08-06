import { object, string, ref } from "yup";

export const LoginValidationSchema = () => {
  return object({
    email: string().email().required().label("Email address"),
    password: string().required("Password is required"),
  });
};

export const RegisterValidationSchema = () => {
  return object({
    email: string()
      .email("Enter a valid email address")
      .required("Email Address is required"),
    password: string()
      .min(8, "Password must be minimum 8 characters long.")
      .required("Password is required"),
    confirmPassword: string()
      .oneOf([ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });
};

export const VerifyEmailValidationSchema = () => {
  return object({
    code: string()
      .min(6, "Code is minimum of 6 digits")
      .required("Code is required"),
  });
};

export const ForgotValidationSchema = () => {
  return object({
    email: string()
      .email()
      .required("Email address is required")
      .label("Email address"),
  });
};

export const ResetPasswordValidationSchema = () => {
  return object({
    password: string().required("Password is required"),
    confirm_password: string()
      .required("Confirm Password is required")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });
};

export const AccountTypeValidationSchema = () => {
  return object({
    account_type: string()
      .required("Email address is required")
      .label("Account type"),
  });
};

export const UpdatePasswordValidationSchema = () => {
  return object({
    password: string()
      .min(8, "Password must be minimum 8 characters long.")
      .required("Password is required"),
    confirmPassword: string()
      .oneOf([ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });
};
