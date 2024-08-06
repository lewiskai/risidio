import React, { useState } from "react";
import QuestionIcon from "../../Components/Icons/Question";
import Navbar from "../../Layouts/NavBar";
import arrowDown from "../../assets/arrowDown.svg";
// import OnBoardingFirst from "../Layouts/Popup/OnboardingPopup/OnboardingFirst";
import { collaboratorsArray, users } from "../../utils/arrays/arrays";
import closeIcon from "../../assets/closeIcon.svg";
import uploadIcon from "../../assets/uploadIcon.svg";
import pdfIcon from "../../assets/pdfIcon.svg";
import addIcon from "../../assets/addIcon.svg";
import Thanks from "./Thanks";
interface UploadScriptForm {
  title: string;
  gener: string[]; // Assuming 'gener' is an array of strings
  status: string; // Assuming 'status' is a string
  synopsis: string;
  contributors: string[]; // Assuming 'contributors' is an array of strings
  pdfFile: File[]; // Assuming 'pdfFile' is an array of File objects
  imageFile: File[]; // Assuming 'imageFile' is an array of File objects
}

interface UploadProgress {
  [key: string]: number;
}

function ScriptUploadFileNew() {
  const [callVisibility, setCallVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [fetchedCollaboratos, setFetchedCollaborators] =
    useState(collaboratorsArray);
  const [noFound, setNoFound] = useState(false);
  const [noFoundUser, setNoFoundUser] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [searchInputUsers, setSearchInputUsers] = useState("");

  //  Script Upload status -----------------------------------

  // upload form state for submit the form
  const [uploadScriptForm, setUploadScriptForm] = useState<UploadScriptForm>({
    title: "",
    gener: [],
    status: "",
    synopsis: "",
    contributors: [],
    pdfFile: [],
    imageFile: [],
  });
  // state to show the script Upload container
  const [showScript, setShowScript] = useState(false);
  //  state for progress bar when upload (not working yet)
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({});
  //  state for progress bar when upload (not working yet)
  const [progressPercentage, setProgressPercentage] = useState({});
  //  status dropdown state
  const [openStatus, setOpenStatus] = useState(false);
  // gender dropdwon state
  const [openGener, setOpenGener] = useState(false);
  // preserve the selected status
  const [selectedGener, setSelectedGener] = useState([]);
  // pdf upload state
  const [uploadingPdf, setUploadingPdf] = useState(false);
  // image state
  const [selectedImage, setSelectedImage] = useState<File[]>([]);

  //  state for upload script anoymously
  const [isChecked, setIsChecked] = useState(false);
  // thank you popup state
  const [showThankYou, setShowThankYou] = useState(false);
  // status array
  const statusOptions = ["In Progress", "On Hold", "Cancelled", "Finished"];
  // geners array
  const genreOptions = ["Action", "Adventure", "Cancelled", "Finished"];
  //  return to userProfile Component
  const handleThankYou = () => {
    setShowThankYou(!showThankYou);
    setShowScript(true);
  };
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);
    setSelectedImage(files); // Update selected image state
  };

  const toggleDropdownGener = () => {
    setOpenGener(!openGener);
  };
  const [selectedStatus, setSelectedStatus] = useState("");
  const toggleDropdownStatus = () => {
    setOpenStatus(!openStatus);
  };

  const setStatus = (status: string) => {
    setUploadScriptForm((prevState) => ({
      ...prevState,
      status: status,
    }));
    setSelectedStatus(status); // Update the selectedStatus state
    setOpenStatus(false); // Close the dropdown after selecting a status
  };

  const setGener = (gener: string) => {
    // Check if the gener is already selected
    if (uploadScriptForm.gener.includes(gener)) {
      // If already selected, remove it
      setUploadScriptForm((prevState) => ({
        ...prevState,
        gener: prevState.gener.filter((item) => item !== gener),
      }));
    } else {
      // If not selected, add it
      setUploadScriptForm((prevState) => ({
        ...prevState,
        gener: [...prevState.gener, gener],
      }));
    }
  };
  //  clg for build

  // onChange upload form method
  const handleScriptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUploadScriptForm({
      ...uploadScriptForm,
      [name]: value,
    });
  };

  const handleAddContributors = () => {
    const newContributor = prompt("Enter the name of the contributor");
    if (newContributor) {
      setUploadScriptForm((prevState) => ({
        ...prevState,
        contributors: [...prevState.contributors, newContributor],
      }));
    }
  };
  const handlePdfFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadingPdf(true);
    const files = Array.from(e.target.files || []);
    setUploadScriptForm((prevState: UploadScriptForm) => ({
      ...prevState,
      pdfFile: files,
    }));
  };
  const handleUploadPdf = () => {
    uploadScriptForm.pdfFile.forEach((file: File) => {
      const progressInterval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const currentProgress = (prevProgress[file.name] || 0) + 10;
          return {
            ...prevProgress,
            [file.name]: currentProgress,
          };
        });
      }, 1000);

      setTimeout(() => {
        clearInterval(progressInterval);
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.name]: 100,
        }));
        // Update progress percentage to 100% when upload completes
        setProgressPercentage((prevPercentage) => ({
          ...prevPercentage,
          [file.name]: 100,
        }));
      }, 3000);
    });
  };

  // Inside scriptUploadSubmit function
  const scriptUploadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation logic to check for empty fields
    if (
      !uploadScriptForm.title ||
      uploadScriptForm.gener.length === 0 || // Check if genre is not selected
      uploadScriptForm.status.length === 0 ||
      !uploadScriptForm.status ||
      !uploadScriptForm.synopsis ||
      selectedImage.length === 0
    ) {
      // If any required field is empty, display an error message
      return; // Exit the function, preventing form submission
    }

    // Create a FormData object to store form data
    const formData = new FormData();

    // Append form data to the FormData object
    formData.append("title", uploadScriptForm.title);
    formData.append("gener", uploadScriptForm.gener.join(","));
    formData.append("status", uploadScriptForm.status);
    formData.append("synopsis", uploadScriptForm.synopsis);
    formData.append("contributors", uploadScriptForm.contributors.join(","));

    // Append image files to FormData object
    selectedImage.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    // Submit the form data
    setShowThankYou(true);
  };

  // --------------------------------------------------
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
  const handleAddUser = (userName: string, role: string[], status: string) => {
    // Check if the user is not already in the collaboratorsArray
    if (
      !collaboratorsArray.some(
        (collaborator) => collaborator.userName === userName
      )
    ) {
      // Add a new collaborator with the provided userName, role, and status
      const newUser = {
        userName,
        roles: role, // Assuming roles is the correct property name for the role array
        status,
      };
    }
  };
  return (
    <main className=" bg-red-700 w-full h-full fixed top-0 left-0 flex items-center justify-center">
      <div>
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>

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
        <div className="script-upload-container">
          <nav className="script__top bg-[#d39ea4]">
            <h1 className="">Upload your script</h1>

            <button
              className="script__top-close"
              type="button"
              onClick={() => setShowScript(true)}
            >
              <img src={closeIcon} alt={closeIcon} />
            </button>
          </nav>
          <form action="">
            <div className="script__upload_wrapper">
              <div className="script__upload_leftside">
                <h4 className="script__upload_primary">Upload Your Script</h4>

                <div className="script__upload_btn-container">
                  <a className="script__upload_movie-btn">Movie</a>
                  <a className="script__upload_TvShow-btn">TvShow</a>
                </div>

                <div className="script__upload_input-container">
                  <div className="script__upload_input_movieName">
                    <label
                      htmlFor="movie_title_upload_script"
                      className="script__upload_input_titles"
                    >
                      Title of the movie
                    </label>
                    <input
                      id="movie_title_upload_script"
                      name="title"
                      value={uploadScriptForm.title}
                      onChange={handleScriptChange}
                      type="text"
                      placeholder="Title of your script"
                      className="script__upload_input_field"
                      required
                    />
                  </div>
                  <div className="script__upload_input_flexbox">
                    <div className="script__upload_input_movieName">
                      <label
                        htmlFor="movie_title_upload_script"
                        className="script__upload_input_titles"
                      >
                        Title of the movie
                      </label>
                      <input
                        id="movie_title_upload_script"
                        name="title"
                        value={uploadScriptForm.title}
                        onChange={handleScriptChange}
                        type="text"
                        placeholder="Title of your script"
                        className="script__upload_input_field"
                        required
                      />
                    </div>
                    <div className="script__upload_input_movieName">
                      <label
                        htmlFor="movie_title_upload_script"
                        className="script__upload_input_titles"
                      >
                        Title of the movie
                      </label>
                      <input
                        id="movie_title_upload_script"
                        name="title"
                        value={uploadScriptForm.title}
                        onChange={handleScriptChange}
                        type="text"
                        placeholder="Title of your script"
                        className="script__upload_input_field"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ScriptUploadFileNew;
