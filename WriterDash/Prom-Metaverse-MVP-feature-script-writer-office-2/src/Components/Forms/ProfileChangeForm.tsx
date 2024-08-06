import React, { ChangeEvent, useState } from "react";
import { ToastContainer } from "react-toastify";
import RedButton from "../Buttons/RedButton";
import TextInput from "../Inputs/TextInput";
import WhiteButton from "../Buttons/WhiteButton";
import SelectInput from "../Inputs/SelectInput";

type Props = {
  closeModal: () => void,
}

const ProfileChangeForm: React.FC<Props> = ({
  closeModal,
}) => {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  // const [confirmPassword, setConfirmPassword] = useState<string>("")

  return (
    <form className="user__password-form">
      <TextInput name="username"
        type="text"
        label="Username"
        className="form-input mb-2"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUsername(e.target.value)
        }} />


      <TextInput name="email"
        type="email" label="Email Address"
        className="form-input mb-2"
        value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value)
        }} />

      <SelectInput label={"Pronouns"}
        options={['He/Him', 'She/Her', 'They/Them']}
        className="mb-2"></SelectInput>

      <SelectInput label={"Using PROM as"}
        options={['screenwriter', 'director']}
        className="mb-2"></SelectInput>


      <div className="user__password-form-buttons
      user__password-form-buttons--profile
      ">

        <WhiteButton text="Cancel"
          onClick={closeModal}></WhiteButton>
        <RedButton text="Save" type="submit"></RedButton>
      </div>
      <ToastContainer />

    </form>
  )
}

export default ProfileChangeForm;