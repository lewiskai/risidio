import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionIcon from "../../../Components/Icons/Question";
import billboardBg from "../../../assets/billboardBanner.png";

function BillboardAdvertisment() {
  const navigate = useNavigate();
  return (
    <>
      <div className="logo"></div>
      <QuestionIcon></QuestionIcon>
      <div className="billboard">
        <div className="billboard__container">
          <nav className="billboard__nav">
            <div className="billboard__nav_leftside">
              <button
                className="billboard__whiteArrow_btn"
                onClick={() => {
                  navigate("/billboardNew");
                }}
              >
                &larr;
              </button>
            </div>
          </nav>

          <article className="billboard__container_wrapper ">
            <div className="billboard__container_imageContainer">
              <div className="billboard__banner relative w-full">
                <img
                  src={billboardBg}
                  className="billboard__container_imageContainer-image "
                  alt="..."
                />
                <div className="banner__shadow"></div>
              </div>
            </div>

            <div className="billboard__advertisement_container billboard__section_container">
              <div className="billboard__advertisement_content">
                <div className="billboard__advertisement_content_head">
                  <p className="billboard__advertisement_content_tag">
                    BNB Chain
                  </p>
                  <h1 className="banner__title">BNB CHAIN</h1>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="billboard__description billboard__advertisement_content_description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas, dolores porro? Voluptatem autem eos facere ipsam
                    adipisci veniam totam quaerat, quis molestias, eius
                    consectetur. Sed distinctio aspernatur ipsa facilis
                    repellat.
                  </p>
                  <button className="button button_white">
                    BNB Chain Website
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default BillboardAdvertisment;
