import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import billboardBg from "../../../assets/billboardBanner.png";
import searchIcon from "../../../assets/searchIcon.svg";
import BillboardUploadAd from "../../../Components/Forms/BillboardUploadAd";
import BillboardDetails from "./BillboardDetails";
import QuestionIcon from "../../../Components/Icons/Question";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import "flowbite";
import ScriptUploadFileNew from "../../Scripts/ScriptUploadFileNew";
import ScriptUploadFile from "../../Scripts/ScriptUploadFile";

interface BillboardBanner {
  imageUrl: string;
  billboardTag: string;
  billboardTitle: string;
  billboardDesc: string;
  billboardButtonText: string;
}

function BillboardNew() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showBillboardPopup, setShowBillboardPopup] = useState<boolean>(true);
  const [showBillboardUpload, setShowBillboardUpload] =
    useState<boolean>(false);
  const [showBillboardInfo, setShowBillboardInfo] = useState<boolean>(true);

  //navigator component
  const navigate = useNavigate();

  // placeholder billboard banner
  const slidesData: BillboardBanner[] = [
    {
      imageUrl: "/Advertisement_img_1.png",
      billboardTag: "Partners",
      billboardTitle: "The film festival Doctor",
      billboardDesc: "Read More",
      billboardButtonText: "The Film Festival Doctor’s Website",
    },
    {
      imageUrl: "/Advertisement_img_2.png",
      billboardTag: "News",
      billboardTitle: "BNB Chain",
      billboardDesc: "Read More",
      billboardButtonText: "BNB Chain Website",
    },
    {
      imageUrl: "/Advertisement_img_3.png",
      billboardTag: "News",
      billboardTitle: "Prom beta test is now open",
      billboardDesc: "Read More",
      billboardButtonText: "Read More",
    },
    {
      imageUrl: "/Advertisement_img_4.png",
      billboardTag: "movie",
      billboardTitle: "Coming soon : French Twist",
      billboardDesc: "Read More",
      billboardButtonText: "The Film Festival Doctor’s Website",
    },
  ];

  const monthlyStarsData = [
    "/MonthlyStars_1.png",
    "/MonthlyStars_2.png",
    "/MonthlyStars_3.png",
    "/MonthlyStars_4.png",
    "/MonthlyStars_5.png",
    "/MonthlyStars_6.png",
  ];

  const latestNewsData = [
    {
      newsTitle: "The new version of PROM is here",
      newsImage: "/news_img_1.png",
      newsDescription:
        "A small introduction about prom (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation)",
    },
    {
      newsTitle: "The new version of PROM is here",
      newsImage: "/news_img_2.png",
      newsDescription:
        "A small introduction about prom (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation)",
    },
    {
      newsTitle: "The new version of PROM is here",
      newsImage: "/news_img_3.png",
      newsDescription:
        "A small introduction about prom (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation)",
    },
  ];

  const trailerData = [
    "/Trailer_img_1.png",
    "/Trailer_img_2.png",
    "/Trailer_img_3.png",
    "/Trailer_img_4.png",
  ];

  const handleShowBillboardUpload = () => {
    setShowBillboardUpload(true);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 10 seconds

    // cleanup function for the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // show the AD detail

  const handleShowBillboardDetails = () => {
    setShowBillboardInfo((prev) => !prev);
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
                  navigate("/onboarding");
                }}
              >
                Back to Promwood
              </button>
              <div className="icon__ellipse_container">
                <div className="icon__ellipse"></div>
                <div className="icon__ellipse"></div>
                <div className="icon__ellipse"></div>
                <div className="billboard__contentSetting"></div>
              </div>
            </div>
            <div className="billboard__nav_righside">
              <input
                type="text"
                className="billboard__nav_search"
                placeholder="Search a contact"
              />
              <button
                className="button button__red"
                onClick={handleShowBillboardUpload}
              >
                Add your videos to the billboard
              </button>
            </div>
          </nav>
          <article className="billboard__container_wrapper">
            <div className="billboard__container_imageContainer">
              <div
                className="billboard__banner relative w-full"
                data-carousel="slide"
              >
                <div
                  className="relative h-[700px] overflow-hidden rounded-lg "
                  onClick={() => navigate("/billboardAdvertisement")}
                >
                  {slidesData.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute h-[100%] top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                      data-carousel-item={index === currentIndex}
                    >
                      <img
                        src={slide.imageUrl}
                        className="block w-full h-[100%] object-fill"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                  {slidesData.map((slide, index) => (
                    <div
                      key={index}
                      className={`banner__header absolute bottom-0 left-1/2 px-[50px] w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span
                        className={`banner__label ${
                          slide.billboardTag === "News"
                            ? "bg-[#DC1720]"
                            : "bg-[#B39E44]"
                        } `}
                      >
                        {slide.billboardTag}
                      </span>
                      <h1 className="banner__title">{slide.billboardTitle}</h1>
                      <button className="banner__button button button__white">
                        {slide.billboardButtonText}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex absolute bottom-5 left-1/2 z-50 space-x-3 -translate-x-1/2">
                  {slidesData.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`w-3 h-3  rounded-full ${
                        index === currentIndex ? "bg-[#DC1720]" : "bg-gray-50"
                      }`}
                      aria-current={index === currentIndex}
                      aria-label={`Slide ${index + 1}`}
                      data-carousel-slide-to={index}
                      onClick={() => setCurrentIndex(index)}
                    ></button>
                  ))}
                </div>
                <div className="absolute z-[45] bottom-0 left-0 h-[90px] w-[100%] bg-[#030d2e]"></div>
                {/* <div className="banner__shadow"></div> */}
              </div>
            </div>

            {/* billboard monthly star */}

            <div className="billboard__monthlystar ">
              <div className="billboard__monthlystar_container">
                <div className="billboard__header">
                  <div className="billboard__header_left">
                    <h1 className="billboard__title">Monthly Stars</h1>
                    <p className="billboard__description">
                      The citizens who've done the most for PROM
                    </p>
                  </div>
                  <div className="billboard__header_right">
                    <div className="arrows">&larr;</div>
                    <div className="arrows">&rarr;</div>
                  </div>
                </div>
                <div className="billboard__monthlystar_content">
                  <div className="billboard__monthlystar_content_imageContainer flex gap-[40px]">
                    {monthlyStarsData.map((starsImg) => (
                      <img
                        src={starsImg}
                        alt="image"
                        className="w-[164px] h-[164px] rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* billboard Latest news and update section */}

            <div className="billboard__news_container billboard__section_container">
              <div className="billboard__header h-[100%]">
                <div className="billboard__header_left flex gap-[35px] item-center">
                  <div className="w-[12px]  bg-[#9A101B] rounded-full"></div>
                  <div>
                    <h1 className="billboard__title">
                      Latest News and Updates
                    </h1>
                    <p className="billboard__description">
                      Read the week's latest and trending news articles! Delve
                      into this week's most captivating news stories and stay
                      updated on current happenings!
                    </p>
                  </div>
                </div>
                <div className="billboard__header_right">
                  <button
                    className="billboard__whiteborder_btn"
                    onClick={() => {
                      navigate("/billboardNews");
                    }}
                  >
                    View all news
                  </button>
                </div>
              </div>

              {/* section news */}
              <div className="billboard__news_content">
                {latestNewsData.map((news) => (
                  <div className="billboard__news_content_grid">
                    <div className="billboard__news_content_imageContainer w-[461px] h-[318px] overflow-hidden">
                      <img
                        src={news.newsImage}
                        alt={news.newsTitle}
                        className="w-full h-[318px] object-cover object-center"
                      />
                    </div>
                    <div className="billoard__news_content_imageContent">
                      <h1 className="billboard__title">{news.newsTitle}</h1>
                      <p className="billboard__news_content_imageContent_description">
                        {news.newsDescription}
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
                ))}
              </div>
            </div>

            {/* billboard trailer section */}
            <div className="billboard__trailer_container billboard__section_container">
              <div className="billboard__header h-[100%]">
                <div className="billboard__header_left flex gap-[35px] item-center">
                  <div className="w-[12px]  bg-[#4C5570] rounded-full"></div>
                  <div>
                    <h1 className="billboard__title">Trailer </h1>
                    <p className="billboard__description">
                      Read the week's latest and trending news articles! Delve
                      into this week's most captivating news stories and stay
                      updated on current happenings!
                    </p>
                  </div>
                </div>
                <div className="billboard__header_right">
                  <button className="billboard__whiteborder_btn">
                    All trailers
                  </button>
                </div>
              </div>
              <div className="billboard__trailer_content">
                <div className="billboard__trailer_imageContainer">
                  {trailerData.map((trailerImg) => (
                    <div className="billboard__trailer_imageContainer_image">
                      <img
                        src={trailerImg}
                        alt={trailerImg}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* section parteners */}
            <div className="billboard__partners_container billboard__section_container">
              <div className="billboard__header h-[100%]">
                <div className="billboard__header_left flex gap-[35px] item-center">
                  <div className="w-[12px]  bg-[#B39E44] rounded-full"></div>
                  <div>
                    <h1 className="billboard__title">Partners </h1>
                    <p className="billboard__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce ut semper velit
                    </p>
                  </div>
                </div>
                <div className="billboard__header_right">
                  <button className="billboard__whiteborder_btn">
                    All partners
                  </button>
                </div>
              </div>
              <div className="billboard__partners_content ">
                {/* carousel billboard */}

                <div
                  className="relative w-full billboard__banner "
                  data-carousel="slide"
                >
                  <div className="relative h-[500px] overflow-hidden rounded-lg ">
                    {slidesData.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute h-[100%] top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${
                          index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                        data-carousel-item={index === currentIndex}
                      >
                        <img
                          src={slide.imageUrl}
                          className="block w-full h-full object-fill"
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex absolute bottom-5 left-1/2 z-[888] space-x-3 -translate-x-1/2">
                    {slidesData.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                          index === currentIndex ? "bg-[#DC1720]" : "bg-gray-50"
                        }`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => setCurrentIndex(index)}
                      ></button>
                    ))}
                  </div>
                  {slidesData.map((slide, index) => (
                    <div
                      key={index}
                      className={`banner__header absolute bottom-0 left-1/2 pl-[50px] w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span
                        className={`banner__label ${
                          slide.billboardTag === "News"
                            ? "bg-[#DC1720]"
                            : "bg-[#B39E44]"
                        } `}
                      >
                        {slide.billboardTag}
                      </span>
                      <h1 className="banner__title">{slide.billboardTitle}</h1>
                      <button className=" button button__white">
                        {slide.billboardButtonText}
                      </button>
                    </div>
                  ))}
                  <div className="absolute z-[45] bottom-0 left-0 h-[90px] w-[100%] bg-[#030d2e]"></div>

                  {/* <div className="banner__shadow"></div> */}
                  {/* <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={handlePrev}
                  >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={handleNext}
                  >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      {showBillboardUpload && (
        <BillboardUploadAd
          showBillboardUpload={showBillboardUpload}
          setShowBillboardUpload={setShowBillboardUpload}
        />
      )}
    </>
  );
}

export default BillboardNew;
