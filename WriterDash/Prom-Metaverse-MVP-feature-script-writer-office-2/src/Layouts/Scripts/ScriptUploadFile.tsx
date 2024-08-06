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
import { useParams } from "react-router-dom";

//  interface
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

const ScriptUploadFile = () => {
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
  const [showScript, setShowScript] = useState(true);
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
    <>
      {/* make show script ! remove this sign */}
      {showScript && (
        <main className="bg-red-700 w-full h-full fixed top-0 left-0 flex items-center justify-center">
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

            <div
              className={`${
                showThankYou
                  ? "script-upload-container-close"
                  : "script-upload-container"
              }`}
            >
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
              <form
                className="pb-3 script_upload_form"
                onSubmit={scriptUploadSubmit}
              >
                <div className="script-upload-wrapper">
                  {/* left side container for the script upload */}
                  <div className="script-upload-left-side">
                    <div className="script-upload-left-heading-container">
                      <h4 className="script-upload-primary">
                        Upload Your script
                      </h4>
                    </div>
                    <div className="script-upload-btn-container">
                      <a className={`script-upload-movie-btn`}>Movie</a>
                      <a className={`script-upload-TvShow-btn`}>TvShow</a>
                    </div>
                    <div className="script-upload-movie-container">
                      <label
                        htmlFor="movie_title_upload_script"
                        className="script_upload_input_titles font-medium"
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
                        className="script-upload-movie-input  text-[#5B6179] font-jost  ring-black-600 rounded-full bg-white  ring-1 ring-gray-300"
                        required
                      />
                    </div>
                    <div className="script-upload-movie-selection">
                      <div className="script-upload-input-container">
                        <div className="w-[100%]">
                          <h4 className="script_upload_input_titles font-medium">
                            Genre
                          </h4>
                          <div className="relative w-[100%]">
                            <div
                              className="w-[100%]"
                              onClick={toggleDropdownGener}
                            >
                              <button
                                type="button"
                                className={`rounded-full bg-white ring-1 ring-gray-300 gener-input ${
                                  openGener ? "ring-black-600" : ""
                                }`}
                              >
                                <div className="flex items-center justify-start">
                                  {uploadScriptForm.gener.length > 0 ? (
                                    uploadScriptForm.gener.map(
                                      (genre, index) => (
                                        <span
                                          key={index}
                                          className={`ml-5  font-[400] font-jost flex items-center justify-center choose-status-text  ${
                                            index !==
                                            uploadScriptForm.gener.length - 1
                                              ? "mr-1"
                                              : ""
                                          }`}
                                        >
                                          <span
                                            className="inline-block rounded-8px bg-[#DC1720] text-[#fff]"
                                            style={{
                                              width: "100px",
                                              height: "26px",
                                              borderRadius: "8px",
                                              fontSize: "16px",
                                              fontWeight: "400",
                                            }}
                                          >
                                            {genre}
                                          </span>
                                        </span>
                                      )
                                    )
                                  ) : (
                                    <span className="  text-[#5B6179] font-[400] font-jost  choose-genre-text ">
                                      Choose genre
                                    </span>
                                  )}
                                </div>
                              </button>
                            </div>
                            {openGener && (
                              <ul className="z-2 rounded-lg absolute mt-3 ml-24 w-[194px] max-h-[164px] overflow-y-auto bg-[#fff] ring-1 ring-gray-300 flex flex-col items-center justify-center">
                                {genreOptions.map((option, index) => (
                                  <li
                                    key={index}
                                    className={`cursor-pointer mb-1 select-none w-[160px] h-[30px] hover:bg-[#E8EBEF] font-jost flex items-center justify-center font-[500] text-[#030D2E] ${
                                      uploadScriptForm.gener.includes(option)
                                        ? "text-black-600"
                                        : ""
                                    }`}
                                    onClick={() => setGener(option)}
                                  >
                                    {option}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                        <div className="w-[100%]">
                          <h4 className="script_upload_input_titles font-medium ">
                            Status
                          </h4>
                          <div className="relative w-[100%]">
                            <div onClick={toggleDropdownStatus}>
                              <button
                                type="button"
                                className={` rounded-full bg-white  ring-1 ring-gray-300 status-input`}
                              >
                                {/* ${openStatus ? "ring-black-600" : ""} */}
                                <div className="flex items-center justify-between">
                                  <span className="  font-[400] text-[#5B6179] font-jost choose-status-text">
                                    {selectedStatus
                                      ? selectedStatus
                                      : "Choose status"}
                                  </span>
                                  <div className="mr-5">
                                    <img
                                      className="status-arrow"
                                      src={arrowDown}
                                      alt={arrowDown}
                                    />
                                  </div>
                                </div>
                              </button>
                            </div>
                            {openStatus && (
                              <ul className="z-2 absolute mt-3 w-[194px] h-[164px] rounded bg-[#fff] ring-1 ring-gray-300 flex flex-col items-center justify-center">
                                {statusOptions.map((option, index) => (
                                  <li
                                    key={index}
                                    className="cursor-pointer mb-1 select-none w-[160px] h-[30px]  hover:bg-[#E8EBEF] font-jost flex items-center justify-center font-[500] text-[#030D2E]"
                                    onClick={() => setStatus(option)}
                                  >
                                    {option}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="script-upload-text-field">
                      <h4 className="script_upload_input_titles  font-medium">
                        Synopsis
                      </h4>
                      <textarea
                        name="synopsis"
                        required
                        value={uploadScriptForm.synopsis}
                        className=" p-4 border synopsis-textarea border-gray-300 rounded font-jost"
                        placeholder="Write a short description of your script"
                      ></textarea>
                      <div className="script-upload-contributors-btn-container">
                        <img
                          src={addIcon}
                          alt={addIcon}
                          className="ml-5 mr-5"
                        />

                        <button
                          className="font-jost text-[#30374D] text-[16px]"
                          onClick={handleAddContributors}
                        >
                          Add contributors
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* right side container for the script upload */}
                  <div className="script-upload-right-side">
                    <div className="script-right-side-heading">
                      <h4 className="mb-2 font-jost text-[16px] text-[#000000] font-medium ">
                        Your Script
                      </h4>
                    </div>
                    {/* Pdf upload  */}

                    {!uploadingPdf && (
                      <>
                        {/* <div className="w-full flex mt-1"> */}
                        <div>
                          {/* <div className="w-[650px] h-[270px] extraOutline rounded-lg "> */}
                          <div>
                            {/* <div className="w-[591px] h-[270px] flex"> */}
                            <div>
                              {/* <div className="extraOutline  bg-white w-max  m-auto rounded-lg"> */}
                              <div>
                                {/* <div className="file_upload flex flex-col items-center justify-center border-4 border-dotted border-gray-300 rounded-lg w- mb-1"> */}
                                <div className="file_upload">
                                  <img src={uploadIcon} alt={uploadIcon} />

                                  <div className="title text-[#7B7B7B] font-jost align-middle text-center">
                                    <label>
                                      <input
                                        className="text-sm cursor-pointer w-36 hidden font-jost"
                                        onChange={handlePdfFileChange}
                                        multiple
                                        type="file"
                                        required
                                      />

                                      <div className="text-[#000000] mt-5 rounded font-semibold cursor-pointer font-jost">
                                        Drag & Drop or
                                        <span className="text-[#3871B5] font-[400] mr-1 ml-1 underline">
                                          Choose file
                                        </span>
                                        to upload
                                      </div>
                                    </label>
                                    <button
                                      onClick={handleUploadPdf}
                                      className="text-center"
                                    >
                                      PDF
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {uploadScriptForm.pdfFile.map((file, index) => (
                      <div key={index} className="script-uploaded-wrapper">
                        <div className="script-uploaded-content">
                          <img src={pdfIcon} alt={pdfIcon} />

                          <button
                            className="script-uploaded-content-close-icon"
                            type="button"
                          >
                            <img src={closeIcon} alt={closeIcon} />
                          </button>
                          <div className="flex items-end  justify-between w-[100%]">
                            <div>
                              <p className="script-uploaded-name">
                                {file.name}
                              </p>

                              <p className="script-uploaded-size">
                                {file.size}
                              </p>
                            </div>
                            {/* Progress bar */}

                            <div className="text-[20px] progress-perc">
                              ${uploadProgress[file.name] || 0}%
                            </div>
                          </div>
                        </div>
                        <div className="progress-container">
                          <div className="progress-bar"></div>
                        </div>
                      </div>
                    ))}
                    {/* image upload */}
                    <div className="script-right-side-heading">
                      <h4 className="mb-2 font-jost text-[16px] text-[#000000] font-medium">
                        Add a cover image
                      </h4>
                    </div>
                    <div>
                      <div className=" ">
                        <div className=" ">
                          {selectedImage.length > 0 ? (
                            <div className=" bg-white rounded-lg">
                              <div className="file_upload ">
                                {/* close button  */}
                                <button
                                  className="absolute top-5 right-5"
                                  type="button"
                                >
                                  <img src={closeIcon} alt={closeIcon} />
                                </button>
                                <article>
                                  {selectedImage.map((image, index) => (
                                    <div
                                      key={index}
                                      className="w-[225px] h-[177px]  "
                                    >
                                      <div className="flex flex-row sm:flex-col gap-5">
                                        {/* <div> */}
                                        <img
                                          src={URL.createObjectURL(image)}
                                          alt={`Image ${index}`}
                                        />
                                        <div className="flex flex-col text-center">
                                          <p className="mt-2 text-[16px] font-jost text-[#000000]">
                                            {image.name}
                                          </p>
                                          <span className="text-[#6D6D6D] text-[14px]  font-jost">
                                            {(image.size / 1024).toFixed(2)} KB
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </article>
                              </div>
                            </div>
                          ) : (
                            <div className="extraOutline bg-white rounded-lg">
                              <div className="file_upload file_upload_cover ">
                                <img src={uploadIcon} alt={uploadIcon} />

                                <div className="input_field flex flex-col w-max mx-auto text-center">
                                  <label>
                                    <input
                                      className="text-sm cursor-pointer w-36 hidden font-jost"
                                      type="file"
                                      accept="image/*"
                                      multiple
                                      onChange={handleImageChange}
                                      required
                                    />
                                    <div className="text-[#000000] mt-5 rounded font-semibold cursor-pointer font-jost">
                                      Drag & Drop or
                                      <span className="text-[#3871B5] font-[400] mr-1 ml-1 underline">
                                        Choose file
                                      </span>
                                      to upload
                                    </div>

                                    <div className="title text-[#7B7B7B] font-jost align-middle">
                                      PNG or JPEG <br />
                                      (add here minimum size and format)
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* toggle switch */}
                        <div className="anonymous-wrapper">
                          <label
                            className={`anonymous-wrapper-container ${
                              uploadingPdf
                                ? "flex cursor-pointer select-none label-ano items-center justify-between mt-5"
                                : "flex cursor-pointer mt-2 select-none items-center justify-between  "
                            }`}
                          >
                            <div className="relative flex items-center">
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={isChecked}
                                // onChange={toggleCheckbox}
                              />
                              <div
                                className="block h-6 w-14 rounded-full border  border-[black] border-solid"
                                onClick={toggleCheckbox}
                              ></div>
                              <div
                                onClick={toggleCheckbox}
                                className={`dot absolute rounded-full transition ${
                                  isChecked ? "left-7" : ""
                                }`}
                                style={{
                                  backgroundColor: isChecked
                                    ? "#DC1720"
                                    : "#B6BAC4",
                                  // border: isChecked
                                  //   ? "1px solid #9A101B"
                                  //   : "1px solid #E5E7EB",
                                }}
                              ></div>
                              <span className="ml-2 font-jost text-[15px] text-[#000000] font-[400]">
                                Upload script anonymously
                              </span>
                            </div>
                            <div className="mt-8 bg-[#E8EBEF] w-[332px] h-[82px] flex items-center justify-center rounded-[8px] pl-2 pr-2 pt-2 pb-2">
                              <span className="text-[14px] text-[#7B7B7B] font-jost font-[400] leading-15 tracking-normal text-justify">
                                Anonymous scripts will still be visible in your
                                personal script collection but people won’t be
                                able to see the publisher. You can always change
                                this later.
                              </span>
                            </div>
                          </label>
                        </div>
                        {/* script buttons for draft and upload */}
                        <div className="script-upload-footer-container">
                          <div className="script-upload-footer-btn-wrapper">
                            {!uploadingPdf && (
                              <button
                                type="button"
                                className="script-upload-btn--draft"
                              >
                                Save as draft
                              </button>
                            )}

                            <button
                              type="submit"
                              className={`${
                                uploadingPdf
                                  ? "script-upload-btn--uploaded"
                                  : "script-upload-btn--upload"
                              }`}
                              onClick={handleThankYou}
                            >
                              Upload your Script
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      )}

      {/* Thank You message Popup */}
      {showThankYou && <Thanks handleThankYou={handleThankYou}></Thanks>}
    </>
  );
};

export default ScriptUploadFile;
