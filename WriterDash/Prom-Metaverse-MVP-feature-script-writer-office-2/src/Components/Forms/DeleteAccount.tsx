import React, { ChangeEvent, useState } from "react";
import { ToastContainer } from "react-toastify";
import RedButton from "../Buttons/RedButton";
import TextInput from "../Inputs/TextInput";
import WhiteButton from "../Buttons/WhiteButton";

type Props = {
  closeModal: () => void,
}

const PasswordChangeForm: React.FC<Props> = ({
  closeModal,
}) => {
  const [currentPassword, setCurrentPassword] = useState<string>("")

  return (
    <form className="flex flex-col gap-4">
      <p className="leading-8 text-center mt-[17px]">
        This action cannot be undone and will permanently <br /> delete your profile, data, and progress.
      </p>
      <TextInput
        name="current password"
        type="password"
        label="Enter your password to delete your account"
        className="form-input--4"
        value={currentPassword}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCurrentPassword(e.target.value)
        }}
      />
      <div className="flex flex-col items-center gap-2 w-full mt-4">
      <WhiteButton 
      text="Cancel"
      className="w-[80%] mt-[30px]"
      onClick={closeModal} />
      <RedButton 
      text="I understand, delete my account"
      className="w-[80%] mt-[32px]"
      type="submit"></RedButton>
      </div>
      <ToastContainer />
    </form>
  )
}

export default PasswordChangeForm;
