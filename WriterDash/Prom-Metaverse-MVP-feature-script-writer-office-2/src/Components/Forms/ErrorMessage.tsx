import React from "react";

interface FormErrorProps {
  errorText: string | undefined;
}

const ErrorMessage: React.FC<FormErrorProps> = ({ errorText }) => {
  return <p className="text-[#DC1720] font-medium text-left ml-3">{errorText}</p>;
};

export default ErrorMessage;
