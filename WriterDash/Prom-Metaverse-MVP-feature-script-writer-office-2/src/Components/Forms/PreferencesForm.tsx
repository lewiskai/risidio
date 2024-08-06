import React, { ChangeEvent, useState } from "react";
import { ToastContainer } from "react-toastify";
import RedButton from "../Buttons/RedButton";
import WhiteButton from "../Buttons/WhiteButton";

type Props = {
  closeModal: () => void;
};

const PreferencesForm: React.FC<Props> = ({ closeModal }) => {
  const [phoneCalls, setPhoneCalls] = useState<string>("Everyone");
  const [privateMessages, setPrivateMessages] = useState<string>("Everyone");
  const [allowConnectionRequests, setAllowConnectionRequests] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      phoneCalls,
      privateMessages,
      allowConnectionRequests,
    });
  };

  return (
    <div className="justify-center items-center">
      <form
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <h2 className="text-2xl mb-2 text-center">Allow phone calls from:</h2>
          <label className="mb-2 custom-radio">
            <input
              type="radio"
              name="phoneCalls"
              value="Everyone"
              checked={phoneCalls === "Everyone"}
              onChange={() => setPhoneCalls("Everyone")}
              className="mr-2"
            />
            Everyone
          </label>
          <label className="mb-2 custom-radio">
            <input
              type="radio"
              name="phoneCalls"
              value="Connections only"
              checked={phoneCalls === "Connections only"}
              onChange={() => setPhoneCalls("Connections only")}
              className="mr-2"
            />
            Connections only
          </label>
          <label className="custom-radio">
            <input
              type="radio"
              name="phoneCalls"
              value="Nobody"
              checked={phoneCalls === "Nobody"}
              onChange={() => setPhoneCalls("Nobody")}
              className="mr-2"
            />
            Nobody
          </label>
        </div>
       
        <hr/>
        <br/>
        <div className="mb-6">
          <h2 className="text-2xl mb-2 text-center">Allow private messages from:</h2>
          <label className="mb-2 custom-radio">
            <input
              type="radio"
              name="privateMessages"
              value="Everyone"
              checked={privateMessages === "Everyone"}
              onChange={() => setPrivateMessages("Everyone")}
              className="mr-2"
            />
            Everyone
          </label>
          <label className="mb-2 custom-radio">
            <input
              type="radio"
              name="privateMessages"
              value="Connections only"
              checked={privateMessages === "Connections only"}
              onChange={() => setPrivateMessages("Connections only")}
              className="mr-2"
            />
            Connections only
          </label>
          <br/>
          <hr/>
          <br/>
          <label className="mb-2">
            <span
              onClick={() => setAllowConnectionRequests(!allowConnectionRequests)}
              className={`relative inline-block w-10 h-6 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
                allowConnectionRequests ? 'bg-red-700' : 'bg-gray-400'
              }`}
            >
              <span
                className={`absolute left-0 top-0 w-6 h-6 bg-white border border-gray-300 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  allowConnectionRequests ? 'translate-x-4' : ''
                }`}
              />
              
            </span>
            <span className="px-4">Allow connection requests</span>
          </label>
        </div>

        <div className="user__password-form-buttons">
          <WhiteButton text="Cancel" onClick={closeModal} />
          <RedButton text="Save" type="submit" />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default PreferencesForm;
