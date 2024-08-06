import menuIcon from "../../../assets/menuIcon.svg";
import wallet from "../../../assets/wallet.svg";
import online from "../../../assets/online.svg";
import absent from "../../../assets/absent.svg";
import offline from "../../../assets/offline.svg";
import { useState } from "react";
import Status from "../../Status/Status";
import TransparentButton from "../../../Components/Buttons/TransparentButton";
import RedButton from "../../../Components/Buttons/RedButton";
import TriangleDiv from "../../../Components/TriangleDiv";
import UserProfile from "./UserProfile";
import { useLogOutMutation, useLogout } from "../../../store/auth";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

type Props = {
  userName: string;
};
// Test
const ProfilePopup: React.FC<Props> = ({ userName }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>("online"); // State to store the selected status
  const [selectedStatusClass, setSelectedStatusClass] = useState("none");
  const [userProfileVisibility, setUserProfileVisibility] = useState<boolean>(false); // State to store the visibility of the user profile

  const [logoutRequest, { isLoading: logoutLoading }] = useLogOutMutation();

  const navigate = useNavigate();

  const logout = useLogout();

  const handleLogoutRequest = () => {
    logoutRequest(null)
      .unwrap()
      .then(() => {
        logout();
        navigate("/signin");
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

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

  const showStatusBar = () => {
    setSelectedStatusClass((prevClass) =>
      prevClass === "block" ? "none" : "block"
    );
  };

  const statusClickHandler = (statusName: string) => {
    setSelectedStatus(statusName);
  };

  const showUserProfile = () => {
    setUserProfileVisibility(true);
  };

  const handleCloseModal = () => {
    setUserProfileVisibility(false);
  };

  return (
    <div className="profile">
      <section className="profile__info">
        <div className="profile__info-img">
          <div
            className="navbar__img-container
          navbar__img-container--profile"
          >
            <div className="navbar__img-content"></div>
            <button
              className={`navbar__status navbar__status--profile`}
              onClick={showStatusBar}
            >
              <img
                src={
                  status.find((s) => s.statusName === selectedStatus)
                    ?.statusPath
                }
                alt={
                  status.find((s) => s.statusName === selectedStatus)
                    ?.statusName
                }
              />
            </button>

            <Status
              statusClick={statusClickHandler}
              className={selectedStatusClass}
            ></Status>
          </div>
        </div>

        <div className="profile__info-text">
          <h1 className="profile__info-title">{userName}</h1>
          <p className="profile__info-level">
            Level 12{" "}
            <span className="profile__info-level profile__info-level--reward">
              Next reward 100
            </span>
          </p>
        </div>
      </section>

      <section className="profile__buttons">
        <button type="button" className="user__right-button--settings">
          <img src={menuIcon} alt={menuIcon} />
        </button>
        <TransparentButton
          text="My profile"
          type="button"
          className="button--my-profile"
          onClick={() => {
            showUserProfile();
          }}
        
        ></TransparentButton>

        <RedButton
          text={logoutLoading ? "Loading..." : "Log out"}
          type="button"
          className="button--my-profile button--log-out"
          onClick={handleLogoutRequest}
        ></RedButton>
      </section>

      <section className="profile__wallet">
        <img src={wallet} alt={wallet} className="profile__wallet-img" />

        <p className="profile__wallet-text">No wallet connected</p>

        <TransparentButton
          type="button"
          text="Connect wallet"
          className="button--wallet mt-0"
        ></TransparentButton>
      </section>

      <TriangleDiv classNameSecond="triangle-up--profile"></TriangleDiv>

      {userProfileVisibility && (
        <UserProfile
          userName={"Username"}
          roles={["Screenwriter", "Director", "Producer"]}
          pronouns={"(He / Him)"}
          scriptNumber={1}
          closeModal={handleCloseModal}
          // showScriptOwner={showScriptOwner}
        ></UserProfile>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProfilePopup;
