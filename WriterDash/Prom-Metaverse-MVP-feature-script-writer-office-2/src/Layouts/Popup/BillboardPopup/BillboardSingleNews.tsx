import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionIcon from "../../../Components/Icons/Question";
import billboardBg from "../../../assets/background.png";
import shareIcon from "../../../assets/Send_fill.png";
import { IoCopy } from "react-icons/io5";

function BillboardSingleNews() {
  const navigate = useNavigate();

  const [closeShareModal, setCloseShareModal] = useState(false);

  const closeModal = function () {
    setCloseShareModal(!closeShareModal);
  };
  const handleCopyClick = () => {
    const text = `${document.querySelector(".text_to_copy")?.textContent}`;
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <div className="logo"></div>
      <QuestionIcon></QuestionIcon>
      <div className="billboard">
        <div className="billboard__container">
          <nav className="billboard__nav">
            <div className="billboard__nav_leftside">
              <button
                className="button button__white"
                onClick={() => {
                  navigate("/billboardNew");
                }}
              >
                Back to Billboard
              </button>
            </div>
            <div className="billboard__nav_righside">
              <input
                type="text"
                className="billboard__nav_search"
                placeholder="Search a contact"
              />
              <button className="button button__red">
                Add your videos to the billboard
              </button>
            </div>
          </nav>

          <article className="billboard__container_wrapper h-0 relative">
            <div className="billboard__container_imageContainer">
              <div className="billboard__banner relative w-full">
                <img
                  src={billboardBg}
                  className="billboard__container_imageContainer-image object-cover"
                  alt="..."
                />
                <div className="banner__shadow"></div>
              </div>
            </div>

            <div className="billboard__singleNews  ">
              <div className="billboard__singleNews_container relative">
                <div className="billboard__singleNews_content">
                  <div className="billboard__singleNews_content_header">
                    <p className="billboard__advertisement_content_tag">News</p>
                    <h1 className="banner__title mb-0">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__singleNews_content_author">
                      By Eric | 10h ago
                    </p>
                  </div>
                  <div className="billboard__singleNews_content_grid ">
                    <p className="billboard__singleNews_content_description">
                      A small introduction about prom (Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation) A small
                      introduction about prom (Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation)
                    </p>
                    <div className="justify-self-end billboard__singleNews_content_latestNews_container flex flex-col gap-[24px]">
                      <p className="billboard__advertisement_content_tag ">
                        Latest news
                      </p>
                      <div className="billboard__singleNews_content_latestNews_grid">
                        <div className=" h-[150px] bg-[#C4C4C4] rounded-[20px]"></div>
                        <div className="billoard__news_content_imageContent">
                          <h1 className="text-[16px] font-[600] mb-[15px]">
                            The new TITLE IS NOW here
                          </h1>
                          <button
                            className="billboard__whiteFill_btn "
                            style={{ fontSize: "8px" }}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                      <div className="billboard__singleNews_content_latestNews_grid">
                        <div className=" h-[150px] bg-[#C4C4C4] rounded-[20px]"></div>
                        <div className="billoard__news_content_imageContent">
                          <h1 className="text-[16px] font-[600] mb-[15px]">
                            The new TITLE IS NOW here
                          </h1>
                          <button
                            className="billboard__whiteFill_btn"
                            style={{ fontSize: "8px" }}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="billboard__whiteborder_btn billboard__singleNews_content_shareBtn flex gap-4"
                  onClick={closeModal}
                >
                  <span>Share</span>
                  <img src={shareIcon} alt="" />
                </button>
              </div>
            </div>
          </article>
          {closeShareModal && (
            <div className="welcome sticky w-full h-full top-0 left-0 flex items-center justify-center z-[1000] bg-[#000] bg-opacity-50">
              <div className="welcome__message relative w-[622px]">
                <button
                  className="absolute top-8 right-8"
                  type="button"
                  onClick={closeModal}
                >
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
                <div className="welcome__message-container ">
                  <h3 className="text-[17px] font-[600] text-[#030D2E] mb-[30px] ">
                    Share by URL
                  </h3>
                  <div className="share__container flex item-center gap-[16px] mb-[56px]">
                    <p className="text_to_copy w-[305px] text-[#5B6179] text-[18px] font-[400] px-[17px] py-[8px] border-2 border-[#B6BAC4] rounded-full">
                      https://www.articlelink.com
                    </p>
                    <button
                      className="p-[16px] rounded-full bg-[#DC1720] text-[#fff] flex items-center gap-4 font-[600] ]"
                      onClick={handleCopyClick}
                    >
                      Copy Link <IoCopy />
                    </button>
                  </div>
                  <div className="h-[1px] bg-[#979EA9] mb-[56px]"></div>
                  <button className="py-[17px] px-[24px] border border-1 border-[#B6BAC4] rounded-full text-[#030D2E] text-[17px] font-[600]">
                    Share with connection
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BillboardSingleNews;
