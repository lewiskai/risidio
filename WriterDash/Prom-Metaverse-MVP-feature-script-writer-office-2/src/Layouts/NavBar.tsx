import Icon from "../Components/Icons/Icon";

import message from "../assets/message.svg";
import bag from "../assets/bag.svg";
import friends from "../assets/friends.svg";
import notification from "../assets/notif.svg";

import online from "../assets/online.svg";
import absent from "../assets/absent.svg";
import offline from "../assets/offline.svg";
import user from "../assets/userIcon.svg";

import WhiteButton from "../Components/Buttons/WhiteButton";
import Status from "./Status/Status";
import { useState, useRef, useEffect } from "react";
import BagPopup from "./Popup/NavBarPopup/BagPopup";
import FastTravelPopup from "./Popup/NavBarPopup/FastTravelPopup";
import FriendsPopup from "./Popup/NavBarPopup/FriendsPopup";
import MessagePopup from "./Popup/NavBarPopup/MessagePopup";
import NotificationPopup from "./Popup/NavBarPopup/NotificationPopup";
import ProfilePopup from "./Popup/NavBarPopup/ProfilePopup";
import { PromUser } from "../utils/types/User";
import Users from "./Popup/NavBarPopup/Users";
import AwardPopup from "./Popup/NavBarPopup/AwardPopup";
import UserGuestProfile from "./Popup/NavBarPopup/UserGuestProfile";
import React from "react";

type Props = {
  userName: string;
  level: number;
  contactValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  handleCallVisibility: () => void;
  collaborators: PromUser[];
  users: PromUser[];
  onButtonClick: (userName: string) => void;
  showNoFound: boolean;
  contactValueUser: string;
  handleInputChangeUser: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClickAddUser: (
    userName: string,
    roles: string[],
    status: string
  ) => void;
  showNoFoundUser: boolean;

  // showScriptOwner: () => void,
  // showScriptNotOwner: () => void,
};

const Navbar: React.FC<Props> = ({
  userName,
  level,
  contactValue,
  handleInputChange,
  handleCallVisibility,
  collaborators,
  users,
  onButtonClick,
  showNoFound,
  contactValueUser,
  handleInputChangeUser,
  onButtonClickAddUser,
  showNoFoundUser,
  // showScriptOwner,
  // showScriptNotOwner,
}) => {
  const randomUser: PromUser = {
    userName: "randomUser",
    status: "online",
    roles: ["screnwritter", "director"],
    pronouns: "He/him",
  }; // this object is only for a demonstration. Remove it later

  // handling the remove popups when clicking outside state
  const popupContainerRef = useRef<HTMLDivElement>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("online"); // State to store the selected status
  const [selectedStatusClass, setSelectedStatusClass] = useState("none");

  const [popupVisibility, setPopupVisibility] = useState<{
    [key: number]: boolean;
  }>({});
  const [popupMessageVisibility, setPopupMessageVisibility] = useState(false);
  const [popupProfile, setPopupProfile] = useState(false);

  const [showFriendsPopup, setShowFriendsPopup] = useState(true);
  const [awardPopup, setAwardPopup] = useState(false);

  const [showGuestUserProfile, setShowGuestUserProfile] = useState(false);

  const handleShowGuestUserProfile = () => {
    setShowGuestUserProfile(!showGuestUserProfile);
  };

  const handleButtonClickAdd = () => {
    setShowFriendsPopup(!showFriendsPopup);
  };

  const handleButtonClickBack = () => {
    setShowFriendsPopup(!showFriendsPopup);
  };

  const togglePopup = (index: number) => {
    setPopupVisibility((prev) => {
      // Check if the clicked popup is already open
      const isOpen = prev[index];
      // Close all popups
      const updatedVisibility = Object.fromEntries(
        Object.entries(prev).map(([key]) => [key, false])
      );
      // If the clicked popup was not already open, open it
      if (!isOpen) {
        updatedVisibility[index] = true;
      }
      return updatedVisibility;
    });
    // Close the "Fast travel" popup if it's open
    setPopupMessageVisibility(false);
    setPopupProfile(false);
  };

  const showFastPopup = () => {
    // Close all other popups
    setPopupVisibility((prev) => {
      const updatedVisibility = Object.fromEntries(
        Object.keys(prev).map((key) => [key, false])
      );
      setPopupProfile(false);
      return updatedVisibility;
    });

    // Toggle the visibility of the Fast Travel popup
    setPopupMessageVisibility((prevVisibility) => !prevVisibility);
  };

  const showProfilePopup = () => {
    setPopupProfile((prev) => !prev); // Toggle the profile popup visibility

    // Close all other popups
    setPopupVisibility((prev) => {
      const updatedVisibility = Object.fromEntries(
        Object.keys(prev).map((key) => [key, false])
      );
      return updatedVisibility;
    });

    // Close the "Fast travel" popup
    setPopupMessageVisibility(false);
  };

  // Close all popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupContainerRef.current &&
        !popupContainerRef.current.contains(event.target as Node)
      ) {
        setPopupVisibility({});
        setPopupMessageVisibility(false);
        setPopupProfile(false);
        setShowFriendsPopup(false);
        setAwardPopup(false);
        setShowGuestUserProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    setPopupVisibility,
    setPopupMessageVisibility,
    setPopupProfile,
    setShowFriendsPopup,
    setAwardPopup,
    setShowGuestUserProfile,
  ]);
  const icons = [
    {
      iconName: "message",
      iconPath: message,
      PopupContent: MessagePopup,
    },

    {
      iconName: "bag",
      iconPath: bag,
      PopupContent: BagPopup,
    },
    {
      iconName: "user",
      isUserIcon: true,
      iconPath: user,
      className: "bg-black",
      PopupContent: ProfilePopup,
    },

    {
      iconName: "friends",
      iconPath: friends,
      PopupContent: showFriendsPopup ? FriendsPopup : Users,
    },

    {
      iconName: "notification",
      iconPath: notification,
      PopupContent: NotificationPopup,
    },
  ];

  const status = [
    {
      statusName: "online",
      statusPath: online,
    },

    {
      statusName: "absent",
      statusPath: absent,
    },

    {
      statusName: "offline",
      statusPath: offline,
    },
  ];

  const statusClickHandler = (statusName: string) => {
    setSelectedStatus(statusName);
  };

  const showStatusBar = () => {
    setSelectedStatusClass((prevClass) =>
      prevClass === "block" ? "none" : "block"
    );
  };

  const handleShowAwardPopup = () => {
    setAwardPopup(!awardPopup);
  };
  return (
    <>
      <section className="navbar navbar--mobile" ref={popupContainerRef}>
        <div className="navbar__icons-container">
          {icons.map((icon, index) => {
            const PopupContent = icon.PopupContent;

            return (
              <React.Fragment key={`${icon.iconName}${index}`}>
                <Icon
                  imgPath={icon.iconPath}
                  imgAlt={icon.iconName}
                  key={index}
                  onClick={() => togglePopup(index)}
                  isUserIcon={icon.isUserIcon}
                />

                {popupVisibility[index] && PopupContent && (
                  <PopupContent
                    key={index}
                    contactValue={contactValue}
                    handleInputChange={handleInputChange}
                    handleCallVisibility={handleCallVisibility}
                    collaborators={collaborators}
                    onButtonClick={onButtonClick}
                    showNoFound={showNoFound}
                    onButtonClickAdd={handleButtonClickAdd}
                    users={users}
                    onButtonClickBack={handleButtonClickBack}
                    contactValueUser={contactValueUser}
                    handleInputChangeUser={handleInputChangeUser}
                    onButtonClickAddUser={onButtonClickAddUser}
                    showNoFoundUser={showNoFoundUser}
                    showGuestUserProfile={handleShowGuestUserProfile}
                    userName={""}
                  />
                )}
              </React.Fragment>
            );
          })}

          {showGuestUserProfile && (
            <UserGuestProfile
              userName={randomUser.userName}
              roles={randomUser.roles || []}
              pronouns={randomUser.pronouns || ""}
              scriptNumber={0}
              status={randomUser.status}
              closeGuestUserProfile={handleShowGuestUserProfile}
            />
          )}
        </div>
      </section>

      <section className="navbar navbar--desktop" ref={popupContainerRef}>
        <button onClick={showProfilePopup} className="navbar__img-container">
          <div className="navbar__img-content"></div>
        </button>

        {popupProfile && <ProfilePopup userName="User Name"></ProfilePopup>}

        <button className={`navbar__status`} onClick={showStatusBar}>
          <img
            src={
              status.find((s) => s.statusName === selectedStatus)?.statusPath
            }
            alt={
              status.find((s) => s.statusName === selectedStatus)?.statusName
            }
          />
        </button>

        <Status
          statusClick={statusClickHandler}
          className={selectedStatusClass}
        ></Status>

        <div className="navbar__title-container">
          <h1 className="navbar__title-text navbar__title-text--name">
            {`Hi {${userName}}`}
          </h1>

          <button onClick={handleShowAwardPopup}>
            <h2 className="navbar__title-text navbar__title-text--level">
              Level {level} | <span className="font-medium">430 </span>
              <svg
                className="inline"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="
http://www.w3.org/2000/svg
"
              >
                <path
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                  fill="#FFCD61"
                />
                <path
                  d="M9.84375 2.5C5.7875 2.5 2.5 5.7875 2.5 9.84375C2.5 13.9 5.7875 17.1875 9.84375 17.1875C13.9 17.1875 17.1875 13.9 17.1875 9.84375C17.1875 7.89607 16.4138 6.02815 15.0366 4.65093C13.6593 3.27371 11.7914 2.5 9.84375 2.5ZM9.84375 15.3562C8.38174 15.3562 6.97962 14.7755 5.94582 13.7417C4.91203 12.7079 4.33125 11.3058 4.33125 9.84375C4.33125 8.38174 4.91203 6.97962 5.94582 5.94582C6.97962 4.91203 8.38174 4.33125 9.84375 4.33125C11.3058 4.33125 12.7079 4.91203 13.7417 5.94582C14.7755 6.97962 15.3562 8.38174 15.3562 9.84375C15.3562 11.3058 14.7755 12.7079 13.7417 13.7417C12.7079 14.7755 11.3058 15.3562 9.84375 15.3562ZM8.0125 9.85L9.85 12.6L11.675 9.85L9.85 7.09375L8.0125 9.85Z"
                  fill="white"
                />
              </svg>
            </h2>
          </button>

          {awardPopup && (
            <AwardPopup closeAwardModal={handleShowAwardPopup}></AwardPopup>
          )}
        </div>

        <div className="navbar__icons-container">
          {icons
            .filter((_icon, index) => index !== 2)
            .map((icon, index) => {
              const PopupContent = icon.PopupContent;

              return (
                <React.Fragment key={`${icon.iconName}${index}`}>
                  <Icon
                    imgPath={icon.iconPath}
                    imgAlt={icon.iconName}
                    key={index}
                    onClick={() => togglePopup(index)}
                  />

                  {popupVisibility[index] && PopupContent && (
                    <PopupContent
                      key={index}
                      contactValue={contactValue}
                      handleInputChange={handleInputChange}
                      handleCallVisibility={handleCallVisibility}
                      collaborators={collaborators}
                      onButtonClick={onButtonClick}
                      showNoFound={showNoFound}
                      onButtonClickAdd={handleButtonClickAdd}
                      users={users}
                      onButtonClickBack={handleButtonClickBack}
                      contactValueUser={contactValueUser}
                      handleInputChangeUser={handleInputChangeUser}
                      onButtonClickAddUser={onButtonClickAddUser}
                      showNoFoundUser={showNoFoundUser}
                      showGuestUserProfile={handleShowGuestUserProfile}
                      userName={""}
                    />
                  )}
                </React.Fragment>
              );
            })}

          <WhiteButton
            text="Fast travel"
            className="button--fastTravel h-[52px] flex items-center"
            onClick={showFastPopup}
          />

          {popupMessageVisibility && <FastTravelPopup></FastTravelPopup>}

          {showGuestUserProfile && (
            <UserGuestProfile
              userName={randomUser.userName}
              roles={randomUser.roles || []}
              pronouns={randomUser.pronouns || ""}
              scriptNumber={0}
              status={randomUser.status}
              closeGuestUserProfile={handleShowGuestUserProfile}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Navbar;
