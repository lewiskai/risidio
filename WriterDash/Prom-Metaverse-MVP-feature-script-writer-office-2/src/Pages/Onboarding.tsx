import { useEffect, useState } from "react";
import QuestionIcon from "../Components/Icons/Question";
import Navbar from "../Layouts/NavBar";
import OutgoingCall from "../Layouts/Popup/Call/OutgoingCall";
import OnBoardingFirst from "../Layouts/Popup/OnboardingPopup/OnboardingFirst";
import IncomingCall from "../Layouts/Popup/Call/IncomingCall";
import ActiveCall from "../Layouts/Popup/Call/ActiveCall";
import {
  collaboratorsArray,
  textArray,
  titleArray,
  users,
} from "../utils/arrays/arrays";
import Pin from "../Components/Icons/Pin";
import GeneralChat from "../Layouts/Popup/GeneralChat/GeneralChat";
import Billboard from "../Layouts/Popup/BillboardPopup/Billboard";
import { ToastContainer } from "react-toastify";
// import { useGetProfileQuery } from "../store/profile";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const [callVisibility, setCallVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [fetchedCollaboratos, setFetchedCollaborators] =
    useState(collaboratorsArray);
  const [noFound, setNoFound] = useState(false);
  const [noFoundUser, setNoFoundUser] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [searchInputUsers, setSearchInputUsers] = useState("");
  const [tutorialCompleted, setTutorialCompleted] = useState(false);

  // const { data, error, isLoading } = useGetProfileQuery(null);
  // console.log(data, 'data from profile query');
  const navigate = useNavigate()

  const { user } = useAuth();
  console.log(user, "user from useAuth");

  const handleCallVisibility = () => {
    setCallVisibility(!callVisibility);
  };

  const handleButtonClick = (userName: string) => {
    setSelectedUser(userName);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleInputChangeUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputUsers(e.target.value);
  };

  const filteredCollaborators = fetchedCollaboratos.filter((collaborator) =>
    collaborator.userName.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchInputUsers.toLowerCase())
  );

  const handleAddUser = (userName: string, roles: string[], status: string) => {
    if (
      !collaboratorsArray.some(
        (collaborator) => collaborator.userName === userName
      )
    ) {
      const newUser = {
        userName,
        roles, // You can provide a default role for the new user
        status, // You can provide a default status for the new user
      };

      // Update the collaboratorsArray using the state setter
      setFetchedCollaborators((prevCollaborators) => [
        ...prevCollaborators,
        newUser,
      ]);
    }
  };

  useEffect(() => {
    if (filteredCollaborators.length > 0) {
      setNoFound(true);
    } else {
      setNoFound(false);
    }
  }, [filteredCollaborators]);

  useEffect(() => {
    if (filteredUsers.length > 0) {
      setNoFoundUser(true);
    } else {
      setNoFoundUser(false);
    }
  }, [filteredUsers]);

  // TFA information popups. Commented for now

  // useEffect(() => {
  //   if (user?.tfaReminderStatus === "never" && !twoFAStatus) {
  //     toast.info(
  //       "You can always set up 2-factor authentication by going to your account settings"
  //     );
  //     console.log("never");
  //   } else if (user?.tfaReminderStatus === "later") {
  //     toast.info(
  //       "You can always set up 2-factor authentication by going to your account settings"
  //     );
  //     console.log("later");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (user?.tfaReminderStatus === "disabled") {
  //     toast.success(`You've successfully enabled 2-factor authentication`);
  //   }
  // }, []);

  return (
    <>
      <div className="scroll-container">
        <div className="scrollable-background"></div>
        <main>
          <div
            className={`onboarding ${!tutorialCompleted && "show-tutorial"} `}
          >
            <div className="logo"></div>
            <QuestionIcon />

            <GeneralChat></GeneralChat>

            <OnBoardingFirst
              textArray={textArray}
              titleArray={titleArray}
              onTutorialCompletion={() => setTutorialCompleted(true)}
            />

            <Navbar
              userName="userName"
              level={1}
              contactValue={searchInput}
              handleInputChange={handleInputChange}
              handleCallVisibility={handleCallVisibility}
              collaborators={filteredCollaborators}
              onButtonClick={handleButtonClick}
              showNoFound={noFound}
              users={filteredUsers}
              contactValueUser={searchInputUsers}
              handleInputChangeUser={handleInputChangeUsers}
              onButtonClickAddUser={handleAddUser}
              showNoFoundUser={noFoundUser}
            />

            {callVisibility && (
              <OutgoingCall
                handleCallVisibility={handleCallVisibility}
                userName={selectedUser}
              />
            )}

            {callVisibility && (
              <IncomingCall
                handleCallVisibility={handleCallVisibility}
                userName={selectedUser}
              />
            )}

            {callVisibility && (
              <ActiveCall
                handleCallVisibility={handleCallVisibility}
                userName={selectedUser}
                callDuration={"10:05"}
              />
            )}
          </div>
          {tutorialCompleted && (
            <Pin
              menuBuildingName="Scriptwriter Building"
              menuBuildingText="Here you can come read, review and share scripts with the other PROM citizens"
              billboardName="Billboard"
              billboardText="Have a look at our news and partners"
              onClick={() => navigate("/world/scriptwriter-building")}
            />
          )}
        </main>
        <ToastContainer />
      </div>
    </>
  );
};

export default OnBoarding;
