import React from "react";
import QuestionIcon from "../../../Components/Icons/Question";
import { useNavigate } from "react-router-dom";

function BillboardNews() {
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
          <article className="billboard__container_wrapper billboard__news billboard__section_container">
            <div className="billboard__news_container">
              <div className="billboard__news_header">
                <h1 className="billboard__title">Latest News and Updates</h1>
                <p className="billboard__description">
                  Read the week's latest and trending news articles! Delve into
                  this week's most captivating news stories and stay updated on
                  current happenings!
                </p>
              </div>
              <div className="billboard__news_collection">
                <div className="billboard__news_collection_grid">
                  <div className="billboard__news_content_imageContainer"></div>
                  <div className="billoard__news_content_imageContent">
                    <h1 className="billboard__title">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__news_content_imageContent_description">
                      A small introduction about prom (Lorem...
                    </p>
                    <button
                      className="billboard__whiteFill_btn"
                      onClick={() => {
                        navigate("/billboardSingleNews");
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <div className="billboard__news_collection_grid">
                  <div className="billboard__news_content_imageContainer"></div>
                  <div className="billoard__news_content_imageContent">
                    <h1 className="billboard__title">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__news_content_imageContent_description">
                      A small introduction about prom (Lorem...
                    </p>
                    <button className="billboard__whiteFill_btn">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="billboard__news_collection_grid">
                  <div className="billboard__news_content_imageContainer"></div>
                  <div className="billoard__news_content_imageContent">
                    <h1 className="billboard__title">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__news_content_imageContent_description">
                      A small introduction about prom (Lorem...
                    </p>
                    <button className="billboard__whiteFill_btn">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="billboard__news_collection_grid">
                  <div className="billboard__news_content_imageContainer"></div>
                  <div className="billoard__news_content_imageContent">
                    <h1 className="billboard__title">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__news_content_imageContent_description">
                      A small introduction about prom (Lorem...
                    </p>
                    <button className="billboard__whiteFill_btn">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="billboard__news_collection_grid">
                  <div className="billboard__news_content_imageContainer"></div>
                  <div className="billoard__news_content_imageContent">
                    <h1 className="billboard__title">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__news_content_imageContent_description">
                      A small introduction about prom (Lorem...
                    </p>
                    <button className="billboard__whiteFill_btn">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="billboard__news_collection_grid">
                  <div className="billboard__news_content_imageContainer"></div>
                  <div className="billoard__news_content_imageContent">
                    <h1 className="billboard__title">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__news_content_imageContent_description">
                      A small introduction about prom (Lorem...
                    </p>
                    <button className="billboard__whiteFill_btn">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="billboard__news_collection_grid">
                  <div className="billboard__news_content_imageContainer"></div>
                  <div className="billoard__news_content_imageContent">
                    <h1 className="billboard__title">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__news_content_imageContent_description">
                      A small introduction about prom (Lorem...
                    </p>
                    <button className="billboard__whiteFill_btn">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="billboard__news_collection_grid">
                  <div className="billboard__news_content_imageContainer"></div>
                  <div className="billoard__news_content_imageContent">
                    <h1 className="billboard__title">
                      The new version of PROM is here
                    </h1>
                    <p className="billboard__news_content_imageContent_description">
                      A small introduction about prom (Lorem...
                    </p>
                    <button className="billboard__whiteFill_btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default BillboardNews;
