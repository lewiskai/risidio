/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import RedButton from "../../Components/Buttons/RedButton";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import ShareSettings from "../Popup/Settings/ShareSettings";
import CollaboratorsScriptPopup from "../Popup/ScriptPopups/CollaboratorsScriptPopup";
import { collaboratorsArray } from "../../utils/arrays/arrays";
import { NavLink } from "react-router-dom";
import texasImge from "../../assets/script.svg";

type Movie = {
  title: string;
  status: string;
  type: string;
  pagesAmount: number;
  genres: string[];
  privacy: string;
  author: string;
  cowriters: string[];
  description: string;
};
type Props = {
  movie: Movie;
  setMovie: React.Dispatch<React.SetStateAction<Movie>>;
};
const ScriptOwner: React.FC<Props> = ({ movie, setMovie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToggled, setToggled] = useState(true);

  const [showCollaboratorsPopup, setShowCollaboratorsPopup] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleToggleShare = () => {
    setToggled((prevIsToggled) => {
      const newPrivacy = prevIsToggled ? "Public script" : "Private script";
      setMovie((prevMovie) => ({ ...prevMovie, privacy: newPrivacy }));
      return !prevIsToggled;
    });
  };

  const handleRadioChange = (id: string) => {
    setSelectedOption(id);

    setMovie((prevMovie) => {
      const newPrivacy =
        id === "option1" ? "Public script" : "Shared upon request";
      return { ...prevMovie, privacy: newPrivacy };
    });
  };

  const handleShareClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    handleRadioChange(selectedOption);
  }, [selectedOption]);

  const handleShowCollaboratosPopup = () => {
    setShowCollaboratorsPopup(!showCollaboratorsPopup);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredCollaborators = collaboratorsArray.filter((collaborator) =>
    collaborator.userName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <article className="script">
      <nav className="script__top">
        <h1 className="">{movie.title} info - Your Script</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="16"
          viewBox="0 0 35 16"
          fill="none"
        >
          <path
            d="M1.09375 2.13333C0.803669 2.13333 0.52547 2.02095 0.320352 1.82091C0.115234 1.62088 0 1.34956 0 1.06667C0 0.783769 0.115234 0.512458 0.320352 0.31242C0.52547 0.112381 0.803669 0 1.09375 0H33.9062C34.1963 0 34.4745 0.112381 34.6796 0.31242C34.8848 0.512458 35 0.783769 35 1.06667C35 1.34956 34.8848 1.62088 34.6796 1.82091C34.4745 2.02095 34.1963 2.13333 33.9062 2.13333H1.09375ZM1.09375 9.06667C0.803669 9.06667 0.52547 8.95429 0.320352 8.75425C0.115234 8.55421 0 8.2829 0 8C0 7.7171 0.115234 7.44579 0.320352 7.24575C0.52547 7.04571 0.803669 6.93333 1.09375 6.93333H33.9062C34.1963 6.93333 34.4745 7.04571 34.6796 7.24575C34.8848 7.44579 35 7.7171 35 8C35 8.2829 34.8848 8.55421 34.6796 8.75425C34.4745 8.95429 34.1963 9.06667 33.9062 9.06667H1.09375ZM1.09375 16C0.803669 16 0.52547 15.8876 0.320352 15.6876C0.115234 15.4875 0 15.2162 0 14.9333C0 14.6504 0.115234 14.3791 0.320352 14.1791C0.52547 13.979 0.803669 13.8667 1.09375 13.8667H33.9062C34.1963 13.8667 34.4745 13.979 34.6796 14.1791C34.8848 14.3791 35 14.6504 35 14.9333C35 15.2162 34.8848 15.4875 34.6796 15.6876C34.4745 15.8876 34.1963 16 33.9062 16H1.09375Z"
            fill="#979EA9"
          />
        </svg>
        <NavLink to={"/onboarding"}>
          <button className="script__top-close" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0114 12.6921L16.7467 19.4197C17.1041 19.7767 17.5888 19.9772 18.0943 19.9772C18.5997 19.9772 19.0844 19.7767 19.4418 19.4197C19.7992 19.0627 20 18.5785 20 18.0736C20 17.5688 19.7992 17.0846 19.4418 16.7276L12.704 10L19.4405 3.27238C19.6174 3.09562 19.7577 2.88579 19.8534 2.65487C19.9491 2.42395 19.9983 2.17646 19.9983 1.92654C19.9982 1.67662 19.9489 1.42915 19.8531 1.19828C19.7573 0.967401 19.6169 0.757635 19.4399 0.580956C19.2629 0.404276 19.0529 0.264142 18.8217 0.168555C18.5905 0.0729685 18.3427 0.0238009 18.0925 0.0238599C17.8423 0.0239188 17.5946 0.0732027 17.3634 0.168898C17.1323 0.264594 16.9223 0.404827 16.7454 0.58159L10.0114 7.30921L3.2761 0.58159C3.10044 0.399757 2.89028 0.254687 2.6579 0.154847C2.42551 0.0550063 2.17554 0.00239379 1.92258 7.98025e-05C1.66962 -0.00223418 1.41873 0.0457963 1.18456 0.141369C0.950377 0.236941 0.737599 0.378142 0.558637 0.556731C0.379675 0.735321 0.238113 0.947724 0.14221 1.18154C0.046308 1.41537 -0.00201381 1.66592 6.42879e-05 1.9186C0.00214238 2.17127 0.0545786 2.421 0.154314 2.65322C0.254049 2.88543 0.399086 3.09549 0.580961 3.27111L7.3188 10L0.582232 16.7289C0.400356 16.9045 0.25532 17.1146 0.155584 17.3468C0.0558492 17.579 0.00341238 17.8287 0.00133429 18.0814C-0.000743808 18.3341 0.047578 18.5846 0.14348 18.8185C0.239383 19.0523 0.380945 19.2647 0.559907 19.4433C0.738869 19.6219 0.951647 19.7631 1.18583 19.8586C1.42 19.9542 1.67089 20.0022 1.92385 19.9999C2.17681 19.9976 2.42678 19.945 2.65917 19.8452C2.89155 19.7453 3.10171 19.6002 3.27736 19.4184L10.0114 12.6933V12.6921Z"
                fill="#030D2E"
              />
            </svg>
          </button>
        </NavLink>
      </nav>

      <section className="script__main">
        <div className="script__left">
          {/* <h1 className="script__left-title">{movie.title}</h1> */}
          <h1 className="script__left-title">Movie title</h1>
          <ul className="script__left-list">
            <li className="script__left-item">{movie.type}</li>

            <li className="script__left-item">{movie.status}</li>

            <li className="script__left-item">{movie.pagesAmount} pages</li>
          </ul>

          <div className="script__left-imgContainer">
            <img
              src={texasImge}
              alt=""
              className="script__left-imgContainer-img"
            />
          </div>

          {/* change the path */}

          <div className="script__left-button">
            <RedButton text="Read the script" className=""></RedButton>
          </div>
        </div>

        <div className="script__right">
          <div className="script__right-header">
            <h1 className="script__right-title script__right-title--main">
              {movie.privacy}
            </h1>

            <div className="script__right-button-container script__right-button-container-header">
              <WhiteButton
                text="Share"
                className="script__right-button--share"
                onClick={handleShareClick}
              ></WhiteButton>

              <button type="button">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="50"
                    height="50"
                    rx="25"
                    stroke="#B6BAC4"
                  />
                  <path
                    d="M13.0757 38.5945V32.7364L30.8807 14.5763C31.1505 14.3236 31.4486 14.1283 31.775 13.9904C32.1015 13.8526 32.4441 13.7837 32.8029 13.7837C33.1626 13.7837 33.511 13.8526 33.8482 13.9904C34.1855 14.1283 34.4777 14.335 34.725 14.6107L36.5797 16.5404C36.8495 16.7932 37.0464 17.0918 37.1705 17.4364C37.2946 17.781 37.3562 18.1256 37.3553 18.4702C37.3553 18.8377 37.2937 19.1883 37.1705 19.5219C37.0473 19.8554 36.8504 20.1596 36.5797 20.4344L18.8084 38.5945H13.0757ZM32.7691 20.3999L34.6576 18.4702L32.7691 16.5404L30.8807 18.4702L32.7691 20.3999Z"
                    fill="#30374D"
                  />
                </svg>
              </button>
              {isModalOpen && (
                <ShareSettings
                  toggleShare={handleToggleShare}
                  isToggled={isToggled}
                  selectedOption={selectedOption}
                  handleRadioChange={handleRadioChange}
                  // value={selectedOption}
                  // onRadioChange={handleRadioChange}
                  // isChecked={isChecked}
                />
              )}
            </div>
          </div>

          {movie.privacy === "Public script" &&
            selectedOption === "option1" && (
              <div className="script__public ">
                <div className="script__public-container">
                  <p className="script__public-text">prom note</p>
                  <div className="script__public-stars">
                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0089 16.4661L20.5578 16.8601L20.6922 17.4438L22.3799 24.7697L22.3805 24.7723C22.4252 24.9639 22.4124 25.1645 22.3438 25.3489C22.2752 25.5333 22.1539 25.6933 21.9951 25.8089C21.8363 25.9245 21.6471 25.9906 21.4511 25.9991C21.2555 26.0075 21.0617 25.9582 20.8938 25.8573C20.8935 25.857 20.8932 25.8568 20.8928 25.8566L14.5108 21.9826L13.9913 21.6673L13.4722 21.9831L7.10469 25.8566C7.10423 25.8569 7.10377 25.8572 7.10331 25.8575C6.93549 25.9583 6.74183 26.0075 6.54639 25.9991C6.35039 25.9906 6.16118 25.9245 6.0024 25.8089C5.84361 25.6933 5.72228 25.5333 5.65369 25.3489C5.5851 25.1645 5.57234 24.9639 5.61704 24.7723L5.61766 24.7696L7.30278 17.4512L7.43706 16.868L6.98659 16.4741L1.35163 11.546L1.35164 11.546L1.34672 11.5417C1.19776 11.4131 1.08995 11.2433 1.03693 11.0535C0.983904 10.8637 0.988063 10.6624 1.04888 10.4749C1.10969 10.2875 1.22441 10.1223 1.37853 9.99999C1.53264 9.87771 1.7193 9.80375 1.9151 9.78729L1.91766 9.78707L9.34517 9.14324L9.94753 9.09103L10.1811 8.53336L13.0804 1.61254L13.0811 1.61097C13.1566 1.42985 13.2839 1.27527 13.4469 1.1666C13.6099 1.05793 13.8012 1 13.9969 1C14.1925 1 14.3839 1.05793 14.5469 1.1666C14.7098 1.27527 14.8371 1.42985 14.9126 1.61097L14.9137 1.61353L17.8218 8.53435L18.0557 9.09107L18.6573 9.14324L26.0823 9.78707L26.0849 9.78728C26.2807 9.80375 26.4674 9.87771 26.6215 9.99998L27.243 9.21662L26.6215 9.99999C26.7756 10.1223 26.8903 10.2875 26.9511 10.4749C27.0119 10.6624 27.0161 10.8637 26.9631 11.0535C26.9188 11.2121 26.8363 11.3567 26.7234 11.475L26.6426 11.5456L21.0089 16.4661Z"
                        stroke="#B6BAC4"
                        stroke-width="2"
                      />
                    </svg>

                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0089 16.4661L20.5578 16.8601L20.6922 17.4438L22.3799 24.7697L22.3805 24.7723C22.4252 24.9639 22.4124 25.1645 22.3438 25.3489C22.2752 25.5333 22.1539 25.6933 21.9951 25.8089C21.8363 25.9245 21.6471 25.9906 21.4511 25.9991C21.2555 26.0075 21.0617 25.9582 20.8938 25.8573C20.8935 25.857 20.8932 25.8568 20.8928 25.8566L14.5108 21.9826L13.9913 21.6673L13.4722 21.9831L7.10469 25.8566C7.10423 25.8569 7.10377 25.8572 7.10331 25.8575C6.93549 25.9583 6.74183 26.0075 6.54639 25.9991C6.35039 25.9906 6.16118 25.9245 6.0024 25.8089C5.84361 25.6933 5.72228 25.5333 5.65369 25.3489C5.5851 25.1645 5.57234 24.9639 5.61704 24.7723L5.61766 24.7696L7.30278 17.4512L7.43706 16.868L6.98659 16.4741L1.35163 11.546L1.35164 11.546L1.34672 11.5417C1.19776 11.4131 1.08995 11.2433 1.03693 11.0535C0.983904 10.8637 0.988063 10.6624 1.04888 10.4749C1.10969 10.2875 1.22441 10.1223 1.37853 9.99999C1.53264 9.87771 1.7193 9.80375 1.9151 9.78729L1.91766 9.78707L9.34517 9.14324L9.94753 9.09103L10.1811 8.53336L13.0804 1.61254L13.0811 1.61097C13.1566 1.42985 13.2839 1.27527 13.4469 1.1666C13.6099 1.05793 13.8012 1 13.9969 1C14.1925 1 14.3839 1.05793 14.5469 1.1666C14.7098 1.27527 14.8371 1.42985 14.9126 1.61097L14.9137 1.61353L17.8218 8.53435L18.0557 9.09107L18.6573 9.14324L26.0823 9.78707L26.0849 9.78728C26.2807 9.80375 26.4674 9.87771 26.6215 9.99998L27.243 9.21662L26.6215 9.99999C26.7756 10.1223 26.8903 10.2875 26.9511 10.4749C27.0119 10.6624 27.0161 10.8637 26.9631 11.0535C26.9188 11.2121 26.8363 11.3567 26.7234 11.475L26.6426 11.5456L21.0089 16.4661Z"
                        stroke="#B6BAC4"
                        stroke-width="2"
                      />
                    </svg>

                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0089 16.4661L20.5578 16.8601L20.6922 17.4438L22.3799 24.7697L22.3805 24.7723C22.4252 24.9639 22.4124 25.1645 22.3438 25.3489C22.2752 25.5333 22.1539 25.6933 21.9951 25.8089C21.8363 25.9245 21.6471 25.9906 21.4511 25.9991C21.2555 26.0075 21.0617 25.9582 20.8938 25.8573C20.8935 25.857 20.8932 25.8568 20.8928 25.8566L14.5108 21.9826L13.9913 21.6673L13.4722 21.9831L7.10469 25.8566C7.10423 25.8569 7.10377 25.8572 7.10331 25.8575C6.93549 25.9583 6.74183 26.0075 6.54639 25.9991C6.35039 25.9906 6.16118 25.9245 6.0024 25.8089C5.84361 25.6933 5.72228 25.5333 5.65369 25.3489C5.5851 25.1645 5.57234 24.9639 5.61704 24.7723L5.61766 24.7696L7.30278 17.4512L7.43706 16.868L6.98659 16.4741L1.35163 11.546L1.35164 11.546L1.34672 11.5417C1.19776 11.4131 1.08995 11.2433 1.03693 11.0535C0.983904 10.8637 0.988063 10.6624 1.04888 10.4749C1.10969 10.2875 1.22441 10.1223 1.37853 9.99999C1.53264 9.87771 1.7193 9.80375 1.9151 9.78729L1.91766 9.78707L9.34517 9.14324L9.94753 9.09103L10.1811 8.53336L13.0804 1.61254L13.0811 1.61097C13.1566 1.42985 13.2839 1.27527 13.4469 1.1666C13.6099 1.05793 13.8012 1 13.9969 1C14.1925 1 14.3839 1.05793 14.5469 1.1666C14.7098 1.27527 14.8371 1.42985 14.9126 1.61097L14.9137 1.61353L17.8218 8.53435L18.0557 9.09107L18.6573 9.14324L26.0823 9.78707L26.0849 9.78728C26.2807 9.80375 26.4674 9.87771 26.6215 9.99998L27.243 9.21662L26.6215 9.99999C26.7756 10.1223 26.8903 10.2875 26.9511 10.4749C27.0119 10.6624 27.0161 10.8637 26.9631 11.0535C26.9188 11.2121 26.8363 11.3567 26.7234 11.475L26.6426 11.5456L21.0089 16.4661Z"
                        stroke="#B6BAC4"
                        stroke-width="2"
                      />
                    </svg>

                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0089 16.4661L20.5578 16.8601L20.6922 17.4438L22.3799 24.7697L22.3805 24.7723C22.4252 24.9639 22.4124 25.1645 22.3438 25.3489C22.2752 25.5333 22.1539 25.6933 21.9951 25.8089C21.8363 25.9245 21.6471 25.9906 21.4511 25.9991C21.2555 26.0075 21.0617 25.9582 20.8938 25.8573C20.8935 25.857 20.8932 25.8568 20.8928 25.8566L14.5108 21.9826L13.9913 21.6673L13.4722 21.9831L7.10469 25.8566C7.10423 25.8569 7.10377 25.8572 7.10331 25.8575C6.93549 25.9583 6.74183 26.0075 6.54639 25.9991C6.35039 25.9906 6.16118 25.9245 6.0024 25.8089C5.84361 25.6933 5.72228 25.5333 5.65369 25.3489C5.5851 25.1645 5.57234 24.9639 5.61704 24.7723L5.61766 24.7696L7.30278 17.4512L7.43706 16.868L6.98659 16.4741L1.35163 11.546L1.35164 11.546L1.34672 11.5417C1.19776 11.4131 1.08995 11.2433 1.03693 11.0535C0.983904 10.8637 0.988063 10.6624 1.04888 10.4749C1.10969 10.2875 1.22441 10.1223 1.37853 9.99999C1.53264 9.87771 1.7193 9.80375 1.9151 9.78729L1.91766 9.78707L9.34517 9.14324L9.94753 9.09103L10.1811 8.53336L13.0804 1.61254L13.0811 1.61097C13.1566 1.42985 13.2839 1.27527 13.4469 1.1666C13.6099 1.05793 13.8012 1 13.9969 1C14.1925 1 14.3839 1.05793 14.5469 1.1666C14.7098 1.27527 14.8371 1.42985 14.9126 1.61097L14.9137 1.61353L17.8218 8.53435L18.0557 9.09107L18.6573 9.14324L26.0823 9.78707L26.0849 9.78728C26.2807 9.80375 26.4674 9.87771 26.6215 9.99998L27.243 9.21662L26.6215 9.99999C26.7756 10.1223 26.8903 10.2875 26.9511 10.4749C27.0119 10.6624 27.0161 10.8637 26.9631 11.0535C26.9188 11.2121 26.8363 11.3567 26.7234 11.475L26.6426 11.5456L21.0089 16.4661Z"
                        stroke="#B6BAC4"
                        stroke-width="2"
                      />
                    </svg>

                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0089 16.4661L20.5578 16.8601L20.6922 17.4438L22.3799 24.7697L22.3805 24.7723C22.4252 24.9639 22.4124 25.1645 22.3438 25.3489C22.2752 25.5333 22.1539 25.6933 21.9951 25.8089C21.8363 25.9245 21.6471 25.9906 21.4511 25.9991C21.2555 26.0075 21.0617 25.9582 20.8938 25.8573C20.8935 25.857 20.8932 25.8568 20.8928 25.8566L14.5108 21.9826L13.9913 21.6673L13.4722 21.9831L7.10469 25.8566C7.10423 25.8569 7.10377 25.8572 7.10331 25.8575C6.93549 25.9583 6.74183 26.0075 6.54639 25.9991C6.35039 25.9906 6.16118 25.9245 6.0024 25.8089C5.84361 25.6933 5.72228 25.5333 5.65369 25.3489C5.5851 25.1645 5.57234 24.9639 5.61704 24.7723L5.61766 24.7696L7.30278 17.4512L7.43706 16.868L6.98659 16.4741L1.35163 11.546L1.35164 11.546L1.34672 11.5417C1.19776 11.4131 1.08995 11.2433 1.03693 11.0535C0.983904 10.8637 0.988063 10.6624 1.04888 10.4749C1.10969 10.2875 1.22441 10.1223 1.37853 9.99999C1.53264 9.87771 1.7193 9.80375 1.9151 9.78729L1.91766 9.78707L9.34517 9.14324L9.94753 9.09103L10.1811 8.53336L13.0804 1.61254L13.0811 1.61097C13.1566 1.42985 13.2839 1.27527 13.4469 1.1666C13.6099 1.05793 13.8012 1 13.9969 1C14.1925 1 14.3839 1.05793 14.5469 1.1666C14.7098 1.27527 14.8371 1.42985 14.9126 1.61097L14.9137 1.61353L17.8218 8.53435L18.0557 9.09107L18.6573 9.14324L26.0823 9.78707L26.0849 9.78728C26.2807 9.80375 26.4674 9.87771 26.6215 9.99998L27.243 9.21662L26.6215 9.99999C26.7756 10.1223 26.8903 10.2875 26.9511 10.4749C27.0119 10.6624 27.0161 10.8637 26.9631 11.0535C26.9188 11.2121 26.8363 11.3567 26.7234 11.475L26.6426 11.5456L21.0089 16.4661Z"
                        stroke="#B6BAC4"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="script__public-text script__public-text--rate">
                      3.01/5{" "}
                      <span className="script__public-text--votes">
                        123 votes
                      </span>
                    </p>
                  </div>
                </div>

                <div className="script__public-container script__public-container--right">
                  <p className="script__public-text">bookmark</p>
                  <svg
                    width="24"
                    height="34"
                    viewBox="0 0 24 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 7.55556V34L12 26.4444L0 34V7.55556C0 5.5517 0.842854 3.62991 2.34315 2.21297C3.84344 0.796029 5.87827 0 8 0H16C18.1217 0 20.1566 0.796029 21.6569 2.21297C23.1571 3.62991 24 5.5517 24 7.55556Z"
                      fill="#DC1720"
                    />
                  </svg>
                  <p className="script__public-text">23</p>
                </div>
              </div>
            )}

          {movie.privacy === "Shared upon request" &&
            selectedOption === "option2" && (
              <div className="script__request">
                <p className="script__request-text">Shared with:</p>

                <div className="script__request-images">
                  <div className="script__request-images-img"></div>
                  <div className="script__request-images-img"></div>
                  <div className="script__request-images-img"></div>

                  <div
                    className="
                script__request-images-amount"
                  >
                    +3
                  </div>
                </div>

                <button
                  type="button"
                  className="script__request-button"
                  onClick={handleShowCollaboratosPopup}
                >
                  Manage
                </button>
                {showCollaboratorsPopup && (
                  <CollaboratorsScriptPopup
                    searchInput={searchInput}
                    searchInputChange={handleSearchInputChange}
                    // collaborators={collaboratorsArray}
                    collaborators={filteredCollaborators}
                  />
                )}
              </div>
            )}

          <div className="script__right-button-container mb-4 ">
            {movie.genres.map((genre) => {
              return (
                <RedButton
                  text={genre}
                  className="script__right-button"
                ></RedButton>
              );
            })}
          </div>

          <h2 className="script__right-title mb-10">
            <span className="scritp__right-title--head mr-3 font-[500]">
              Contributors:
            </span>
            {/* {movie.cowriters.map((author) => {
              return (
                <>
                  <span className="script__right-title--underline mr-3 font-[400]">
                    {author}
                  </span>{" "}
                  <span className="script__right-title--contributor mr-3 font-[400]">
                    co-writer,
                  </span>
                </>
              );
            })} */}
            <p className="text-[12px]">
              {`{username}`} co-writer, {`{username}`} producer, name director
            </p>
          </h2>

          <section className="script__right-summary">
            <h3 className="script__right-title script__right-title--main">
              Summary
            </h3>

            <p className="script__right-summary-description">
              {movie.description}
            </p>
          </section>

          <section className="script__right-review">
            <h3 className="script__right-title script__right-title--main">
              Reviews
            </h3>

            <p className="script__right-review-text">
              Share your script with the community to get reviewed
            </p>
          </section>
        </div>
      </section>

      {/* {isModalOpen && (
        <ShareSettings
          toggleShare={handleToggleShare}
          isToggled={isToggled}
          selectedOption={selectedOption}
          handleRadioChange={handleRadioChange}
          // value={selectedOption}
          // onRadioChange={handleRadioChange}
          // isChecked={isChecked}
        />
      )} */}
    </article>
  );
};

export default ScriptOwner;
