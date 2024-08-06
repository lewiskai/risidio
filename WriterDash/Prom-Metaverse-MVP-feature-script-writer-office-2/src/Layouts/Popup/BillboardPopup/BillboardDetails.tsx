import { useState } from 'react';
import billboardBg from '../../../assets/billboardBanner.png';

interface BillboardDetailsProps {
  setShowBillboardPopup: React.Dispatch<React.SetStateAction<boolean>>;
  showBillboardInfo: boolean;
}
const BillboardDetails: React.FC<BillboardDetailsProps> = ({
  setShowBillboardPopup,
}) => {
  const [closeBillboardInfo, setCloseBillboardInfo] = useState<boolean>(true);
  const handleCloseBillboardInfo = () => {
    setShowBillboardPopup(true);
    setCloseBillboardInfo(false);
  };
  return (
    <>
      {closeBillboardInfo && (
        <div className='billboard-modal-container-info '>
          <article className='billboard-modal-wrapper '>
            {/* image Ad */}
            <div className='billboard-image-slider-wrapper relative '>
              <div className='overflow-hidden relative  sm:h-64 xl:h-80 2xl:h-[500px] '>
                <img
                  src={billboardBg}
                  className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2  '
                  alt='...'
                />
                <div className='absolute top-0 left-0 w-full h-42 p-10 '>
                  <div className='w-full h-full flex items-center justify-between '>
                    <button
                      className='billboard-img-back-btn w-[127px] h-[42px] '
                      onClick={handleCloseBillboardInfo}
                    >
                      Back
                    </button>
                  </div>
                </div>
                <div className='billboard-image-slider-heading-wrapper absolute bottom-[-10px] left-0 p-4 w-full gradient-custom border-none'>
                  <div className='ml-40'>
                    <p className='text-[17px] font-jost text-[#FFFFFF] font-[600]  relative z-10 '>
                      News
                    </p>
                    <h2 className='text-[36px] font-jost text-[#FFFFFF] font-[300] uppercase relative z-10 '>
                      The new version of PROM is here
                    </h2>
                    <span className='text-[16px] font-jost text-[#B6BAC4] font-[300] uppercase relative z-10 '>
                      By Eric | 10h ago
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <section className='billboard-modal-container-body h-[600px] overflow-y-auto border-none ml-10'>
              <div className='flex items-start justify-start  flex-col ml-32'>
                <div className='flex w-[100%] mt-10'>
                  <div className='billboard-modal-left-side'>
                    <div className='w-[588px]'>
                      <p className='text-[16px] text-[#FFFFFF] font-jost leading-[32px] pb-5'>
                        A small introduction about prom (Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation) A small
                        introduction about prom (Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation)
                      </p>
                      <p className='w-[588px] h-[434px] text-[16px] text-[#FFFFFF] font-jost  pb-5'>
                        A small introduction about prom (Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation) A small
                        introduction about prom (Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation)
                      </p>
                    </div>
                  </div>

                  <div className='billboard-modal-right-side'>
                    <p className='text-[17px] font-jost font-[600] text-[#fff]'>
                      Latest news
                    </p>
                    <div className='billboard-latest-news w-[346px] h-[160px] bg-[#D9D9D9] rounded-lg mt-10'></div>
                    <p className='text-[20px] font-jost font-[300] text-[#FFFFFF] leading-[32px]'>
                      NEWS TITLES
                    </p>

                    <div className='billboard-latest-news w-[346px] h-[160px] bg-[#D9D9D9] rounded-lg mt-10'></div>
                  </div>
                </div>
              </div>
            </section>
          </article>
          <div className='billboard-modal-container-end'></div>
        </div>
      )}
    </>
  );
};

export default BillboardDetails;
