import { useState, useEffect } from "react";
import ProfileForm from "../Components/Forms/ProfileForm";
import QuestionIcon from "../Components/Icons/Question";
import Navbar from "../Layouts/NavBar";
import { collaboratorsArray, users } from "../utils/arrays/arrays";

const CharacterCreation_backup = () => {
  const [callVisibility, setCallVisibility] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedUser, setSelectedUser] = useState("");
  const [fetchedCollaboratos, setFetchedCollaborators] =
    useState(collaboratorsArray);
  const [noFound, setNoFound] = useState(false);
  const [noFoundUser, setNoFoundUser] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [searchInputUsers, setSearchInputUsers] = useState("");
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
    // Check if the user is not already in the collaboratorsArray
    if (
      !collaboratorsArray.some(
        (collaborator) => collaborator.userName === userName
      )
    ) {
      // Add a new collaborator with the provided userName, role, and status
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
      setNoFoundUser(false)
    }
  }, [filteredUsers])

  return (
    <>


      <section className="character character--mobile">
        <div className="logo logo--character"></div>

        <div className="character-container">
          <h1 className="character-title">
            About
            <br></br>
            you
          </h1>
        </div>
        <ProfileForm />

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
      </section>

      <section className="character character--desktop">
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>

        <div className="character-container ">
          <h1 className="character-title">
            About
            <br></br>
            you
          </h1>
          <ProfileForm></ProfileForm>
        </div>
      </section>
    </>
  );
};

export default CharacterCreation_backup;
