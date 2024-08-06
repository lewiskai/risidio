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
  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  return (
    <form className="user__password-form">
      <TextInput name="current password" type="password" label="Current Password"
        className="form-input--4" value={currentPassword}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCurrentPassword(e.target.value)
        }} />


      <TextInput name="new password" type="password" label="New Password"
        className="form-input--4" value={newPassword} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setNewPassword(e.target.value)
        }} />

      <TextInput name="confirm password" type="password" label="Confirm Password"
        className="form-input--5" value={confirmPassword} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setConfirmPassword(e.target.value)
        }} />


      <div className="user__password-form-buttons">

        <WhiteButton text="Cancel"
        onClick={closeModal}></WhiteButton>
        <RedButton text="Save" type="submit"></RedButton>
      </div>
      <ToastContainer />

    </form>
  )
}

export default PasswordChangeForm;