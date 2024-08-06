import { useEffect, useState } from "react";
import billboardBg from "../../../assets/billboardBanner.png";
import searchIcon from "../../../assets/searchIcon.svg";
import BillboardUploadAd from "../../../Components/Forms/BillboardUploadAd";
import BillboardDetails from "./BillboardDetails";

interface BillboardBanner {
  imageUrl: string;
  billboardType: string;
  billboardName: string;
  billboardDesc: string;
}

const Billboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showBillboardPopup, setShowBillboardPopup] = useState<boolean>(true);
  const [showBillboardInfo, setShowBillboardInfo] = useState<boolean>(true);
  const [showBillboardUpload, setShowBillboardUpload] =
    useState<boolean>(false);

  // placeholder billboard banner
  const slidesData: BillboardBanner[] = [
    {
      imageUrl: billboardBg,
      billboardType: "Advertisement",
      billboardName: "Howdy Burger",
      billboardDesc: " Howdy Burger Website",
    },
    {
      imageUrl: billboardBg,
      billboardType: "News",
      billboardName: "The New Version Of PROM Is Here",
      billboardDesc: "Read More",
    },
    {
      imageUrl: billboardBg,
      billboardType: "Advertisement",
      billboardName:
        '"Film Foresight: Navigating Trends and Future Directions in the Movie Business"',
      billboardDesc: "Read More",
    },
  ];

  // show the billboard upload Component

  const handleShowBillboardUpload = () => {
    setShowBillboardPopup(false);
    setShowBillboardUpload(true);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 10000); // Change image every 10 seconds

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
      {/* {showBillboardPopup && (
        <div
          className={`${
            showBillboardPopup ? "billboard-modal-container " : ""
          }`}
        >
          <article className="billboard-modal-wrapper ">
            image slider
            <div className="billboard-image-slider-wrapper relative ">
              <div className="w-full mx-auto relative">
                <div
                  id="default-carousel"
                  className="relative"
                  data-carousel="static"
                >
                  <div className="overflow-hidden relative h-56 sm:h-64 xl:h-80 2xl:h-[625px] ">
                    {slidesData.map((slide, index) => (
                      <div
                        key={index}
                        className={`duration-700 ease-in-out ${
                          currentIndex === index ? "" : "hidden"
                        }`}
                        data-carousel-item
                      >
                        <img
                          src={slide.imageUrl}
                          className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2  "
                          alt="..."
                        />
                        <div className="absolute top-0 left-0 w-full h-42 p-10 ">
                          <div className="w-full h-full flex items-center justify-between ">
                            <button
                              className="billboard-img-back-btn"
                              onClick={() =>
                                setShowBillboardPopup(!showBillboardPopup)
                              }
                            >
                              Back to Promwood
                            </button>
                            <div className="billboard-cta  ">
                              <div className="relative">
                                <input
                                  className="billboard-img-cta-search pl-10 pr-10"
                                  placeholder="Search"
                                />

                                <img
                                  src={searchIcon}
                                  alt={searchIcon}
                                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                />
                              </div>
                              <button
                                className="billboard-img-cta-add-video"
                                onClick={handleShowBillboardUpload}
                              >
                                Add your video to the billboard
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="billboard-image-slider-heading-wrapper absolute bottom-[-10px] left-0 p-10 w-full gradient-custom border-none">
                          <p className="text-[17px] font-jost text-[#FFFFFF] font-[600]  relative z-10 ">
                            {slide.billboardType}
                          </p>
                          <h2 className="text-[36px] font-jost text-[#FFFFFF] font-[300] uppercase relative z-10 ">
                            {slide.billboardName}
                          </h2>
                          <button
                            className="billboard-image-slider-heading-wrapper-btn text-[17px] font-jost text-[#000000] font-[600] "
                            onClick={handleShowBillboardDetails}
                          >
                            {slide.billboardDesc}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between absolute bottom-75 left-1/2 z-30 space-x-3 -translate-x-1/2 mt-5 w-[162px] bg-transparent border-none">
                    {[...Array(3)].map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-5 h-5 rounded-full relative border-none"
                        aria-current="false"
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                      >
                        <div
                          className={`absolute inset-0 rounded-full ${
                            currentIndex === index && "bg-[#E8EBEF]"
                          }`}
                        ></div>
                        <div
                          className={`absolute inset-[4px] rounded-full ${
                            currentIndex === index
                              ? "bg-[#DC1720]"
                              : "bg-transparent"
                          }`}
                        ></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <section className="billboard-modal-container-body scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full mt-10 border-none">
              <div className="billboard-modal-heading-wrapper ml-24">
                <p className="font-jost font-[600] text-[17px] text-[#FFFFFF]">
                  Monthly Stars
                </p>
                <h2 className="mt-2 font-jost font-[300] text-[17px] text-[#FFFFFF]">
                  The citizens who've done the most for PROM
                </h2>

                <div className="billboard-modal-stars-of-month-wrapper">
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="billboard-star-of-the-month"
                    ></div>
                  ))}
                </div>
              </div>
            </section>
          </article>
          <div className="billboard-modal-container-end"></div>
        </div>
      )} */}
      {showBillboardUpload && <BillboardUploadAd />}

      {/* {
        // refactor using context Api
        <BillboardDetails
          setShowBillboardPopup={setShowBillboardPopup}
          showBillboardInfo={showBillboardInfo}
        />
      } */}
    </>
  );
};

export default Billboard;
