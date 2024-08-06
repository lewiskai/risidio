import { useState } from "react";
import RedButton from "../../../Components/Buttons/RedButton";
import RedButtonTwo from "../../../Components/Buttons/RedButtonTwo";
import TransparentButton from "../../../Components/Buttons/TransparentButton";
import TextArea from "../../../Components/Inputs/TextArea";
import ChangePassword from "../Settings/ChangePassword";
import ProfileSettings from "../Settings/ProfileSettings";
import ScriptUploadFile from "../../Scripts/ScriptUploadFile";
import { NavLink } from "react-router-dom";
import TwoFASettings from "../Settings/TwoFASettings";
import TwoFAConfirmation from "../Settings/TwoFAConfirmation";
import DeleteAccount from "../Settings/DeleteAccount";
import { useCheckTFAStatus } from "../../../utils/hooks/check-2fa-status";
import Preferences from "../Settings/PreferencesSettings";
import BadgeIcon from "../../../assets/badge.svg";
import RoleIcon from "../../../assets/role.svg";

type Props = {
  userName: string;
  roles: string[];
  pronouns: string;
  scriptNumber: number;
  closeModal: () => void;
};

const UserProfile: React.FC<Props> = ({
  userName,
  roles,
  pronouns,
  scriptNumber,
  closeModal,
}) => {
  const redButtonsArrayText = ["Open-minded", "Open-minded", "Open-minded"];

  const [inputValue, setInputValue] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  );

  const twoFAStatus = useCheckTFAStatus();

  const [showSettings, setShowSettings] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showProfileChange, setShowProfileChange] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [show2FAPopup, setShow2FAPopup] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [scriptUpload, setScriptUpload] = useState(false);
  const [show2FAConfirmationPopup, setShow2FAConfirmationPopup] =
    useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const openSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
    setShowSettings(false);
  };

  const handleProfileSettings = () => {
    setShowProfileChange(!showProfileChange);
    setShowSettings(false);
  };

  const handle2FAPopup = () => {
    setShow2FAPopup(!show2FAPopup);
    setShowSettings(false);
  };

  const handleScriptUpload = () => {
    setScriptUpload(!scriptUpload);
  };
  const close2FAConfirmationPopup = () => {
    setShow2FAConfirmationPopup(false);
  };
  const open2FAConfirmationPopup = () => {
    setShow2FAConfirmationPopup(true);
  };
  const showPreferencesPopup = () => {
    setShowPreferences(!showPreferences);
    setShowPreferences(true);
  };
  const handleDeleteAccount = () => {
    setShowDeleteAccount(!showDeleteAccount);
    setShowDeleteAccount(true);
  };

  return (
    <>
    <div className="user">
      <nav className="user__top">
        <h1 className="user__top-title">Your profile</h1>
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
        <button className="user__top-close" type="button" onClick={closeModal}>
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
      </nav>

      <section className="user__main ">
        <div className="user__left">
          <h1 className="user__left-title-container">
            <span className="user__left-title">{userName}</span>
            <span className="user__left-title--pronoun">{pronouns}</span>
            <img src={BadgeIcon} alt="badge" className="badge-icon" />
          </h1>

          <ul className="user__left-list">
            {roles.map((role, index) => (
              <li key={index} className="user__left-item">
                <span>{role}</span>
                {role === "Screenwriter" && (
                  <img src={RoleIcon} alt="role icon" />
                )}
              </li>
            ))}
          </ul>

          <div className="user__left-img"></div>

          <div className="user__left-button">
            <RedButton text="Change your Avatar" className="button--avatar" />
          </div>
        </div>

        <div className="user__right">
          <div className="user__right-top">
            <div className="user__right-button-container">
              {redButtonsArrayText.map((text, index) => (
                <div key={index} className="flex-shrink-0">
                  <RedButtonTwo text={text} className="button--user-right" />
                </div>
              ))}
              <button>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="26" height="26" rx="8" fill="#30374D" />
                  <path
                    d="M5 13C5 13.2546 5.10114 13.4988 5.28118 13.6788C5.46121 13.8589 5.70539 13.96 5.96 13.96H12.04V20.04C12.04 20.2946 12.1411 20.5388 12.3212 20.7188C12.5012 20.8989 12.7454 21 13 21C13.2546 21 13.4988 20.8989 13.6788 20.7188C13.8589 20.5388 13.96 20.2946 13.96 20.04V13.96H20.04C20.2946 13.96 20.5388 13.8589 20.7188 13.6788C20.8989 13.4988 21 13.2546 21 13C21 12.7454 20.8989 12.5012 20.7188 12.3212C20.5388 12.1411 20.2946 12.04 20.04 12.04H13.96V5.96C13.96 5.70539 13.8589 5.46121 13.6788 5.28118C13.4988 5.10114 13.2546 5 13 5C12.7454 5 12.5012 5.10114 12.3212 5.28118C12.1411 5.46121 12.04 5.70539 12.04 5.96V12.04H5.96C5.70539 12.04 5.46121 12.1411 5.28118 12.3212C5.10114 12.5012 5 12.7454 5 13Z"
                      fill="white"
                    />
                  </svg>
              </button>
            </div>
            <span className="right-0 SettingsText">Profile Settings</span>
            <button
              type="button"
              onClick={openSettings}
              className="user__right-button--settings"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="26" rx="8" fill="#30374D" />
                <circle cx="7" cy="13" r="2" fill="white" />
                <circle cx="13" cy="13" r="2" fill="white" />
                <circle cx="19" cy="13" r="2" fill="white" />
              </svg>
            </button>

            {showSettings && (
              <div className="user__right-settings">
                <button
                  className="user__right-settings-option"
                  onClick={handleChangePassword}
                >
                  Change password
                </button>
                <button
                  className="user__right-settings-option"
                  onClick={handleProfileSettings}
                >
                  Profile details
                </button>
                <button
                  className="user__right-settings-option"
                  onClick={handle2FAPopup}
                >
                  {twoFAStatus
                    ? "Disable 2-factor authentication"
                    : "Enable 2-factor authentication"}
                </button>
                <button
                  className="user__right-settings-option"
                  onClick={showPreferencesPopup}
                >
                  Preferences
                </button>
                <button
                  className="user__right-settings-option"
                  onClick={handleDeleteAccount}
                >
                  Delete account
                </button>
              </div>
            )}
          </div>

          <h1 className="user__right-title">
            <span className="user__right-title--underline">
              <b>29</b> collaborators
            </span>{" "}
            | <b>1029</b> persons enjoyed your work
          </h1>

          <form action="" className="user__form">
            <TextArea
              name={"about"}
              label={"About"}
              onChange={handleInputChange}
              value={inputValue}
              className="user__form-input"
            />
            <TransparentButton
              text="Edit Description"
              className="button--edit"
            />
            <div className="user__form-dashboard">
              <span>Go to My Dashboard</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
                className="ml-2"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#5B6179"
                    fillRule="evenodd"
                    d="M0 9a9 9 0 1 0 18 0A9 9 0 0 0 0 9Zm10.684 4.045 3.594-3.591a.643.643 0 0 0 0-.91l-3.594-3.589a.643.643 0 0 0-1.098.454v2.305H4.82a1.286 1.286 0 1 0 0 2.572h4.766v2.305a.643.643 0 0 0 1.098.454Z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M18 0v18H0V0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </form>

          <div className="user__scripts">
            <div className="user__scripts-header">
              <h1 className="user__scripts-title">
                Scripts
                <span className="user__scripts-title--span">
                  ({scriptNumber})
                </span>
              </h1>
              <div className="user__scripts-wrapper">
                <button onClick={handleScriptUpload}>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="8" fill="#30374D" />
                    <path
                      d="M5 13C5 13.2546 5.10114 13.4988 5.28118 13.6788C5.46121 13.8589 5.70539 13.96 5.96 13.96H12.04V20.04C12.04 20.2946 12.1411 20.5388 12.3212 20.7188C12.5012 20.8989 12.7454 21 13 21C13.2546 21 13.4988 20.8989 13.6788 20.7188C13.8589 20.5388 13.96 20.2946 13.96 20.04V13.96H20.04C20.2946 13.96 20.5388 13.8589 20.7188 13.6788C20.8989 13.4988 21 13.2546 21 13C21 12.7454 20.8989 12.5012 20.7188 12.3212C20.5388 12.1411 20.2946 12.04 20.04 12.04H13.96V5.96C13.96 5.70539 13.8589 5.46121 13.6788 5.28118C13.4988 5.10114 13.2546 5 13 5C12.7454 5 12.5012 5.10114 12.3212 5.28118C12.1411 5.46121 12.04 5.70539 12.04 5.96V12.04H5.96C5.70539 12.04 5.46121 12.1411 5.28118 12.3212C5.10114 12.5012 5 12.7454 5 13Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="user__scripts-container">
              <NavLink to="/script">
                <div className="user__scripts-img"></div>
              </NavLink>
              <div className="user__scripts-img"></div>
              <div className="user__scripts-img"></div>
              <div className="user__scripts-img"></div>
              <div className="user__scripts-img"></div>
              <div className="user__scripts-img"></div>
              <div className="user__scripts-img"></div>
              <div className="user__scripts-img"></div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div className={`modal ${showChangePassword || showProfileChange || showPreferences || show2FAPopup || show2FAConfirmationPopup || scriptUpload || showDeleteAccount ? 'modal--active' : ''}`}>
    {showChangePassword && (
        <ChangePassword closeModal={handleChangePassword} />
      )}
      {showProfileChange && (
        <ProfileSettings closeModal={handleProfileSettings} />
      )}
      {showPreferences && <Preferences closeModal={showPreferencesPopup} />}
      {show2FAPopup && (
        <TwoFASettings
          open2FAConfirmPopup={open2FAConfirmationPopup}
          twoFAStatus={twoFAStatus}
          closeModal={handle2FAPopup}
        />
      )}
      {show2FAConfirmationPopup && (
        <TwoFAConfirmation
          twoFAStatus={twoFAStatus}
          closeModal={close2FAConfirmationPopup}
        />
      )}
      {scriptUpload && <ScriptUploadFile />}
      {showDeleteAccount && <DeleteAccount closeModal={handleDeleteAccount} />}
    </div>
    </>
  
  );
};

export default UserProfile;
