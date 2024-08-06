// import React, { useState } from 'react';
// import CoverageScriptItem from './Cards/CoverageScriptItem';
// import Script from '../../../assets/script.svg';
// import Upvote from '../../../assets/upvote.svg';
// import Downvote from '../../../assets/downvote.svg';
// import Badge from '../../../assets/badge.svg';

// const CoverageView: React.FC = () => {
//   const [showBadgePopup, setShowBadgePopup] = useState(false);

//   const scripts = Array(17).fill({
//     title: 'Texas Chainsaw Massacre',
//     upvotes: 11,
//     downvotes: 11,
//     imageSrc: Script
//   });

  // return (
  //   <div className="coverage-view bg-white md:w-[1966.53px] h-auto md:h-[1158.2px] overflow-hidden md:overflow-visible md:pl-[112px]">
  //     <div className="w-full md:w-[1690px] mx-auto pt-14 md:pt-20 pl-12">
  //       <div className="flex flex-col md:flex-row justify-between items-start mb-8">
  //         <div>
  //           <h1 className="text-xl font-bold mb-2 flex items-center">
  //             YOUR COVERAGE 
  //             <div className="relative left-3 ml-2">
  //               <img 
  //                 src={Badge} 
  //                 alt="Badge" 
  //                 className="w-6 h-6 cursor-pointer" 
  //                 onMouseEnter={() => setShowBadgePopup(true)}
  //                 onMouseLeave={() => setShowBadgePopup(false)}
  //               />
  //               {showBadgePopup && (
  //                 <div className="absolute left-[-110px] md:left-[50px] mt-2 p-4 bg-white shadow-lg rounded-3xl w-[380px] text-center">
  //                   <h3 className="text-xl font-bold text-red-600 mb-2">Good Coverage Writer</h3>
  //                   <p className="text-sm font-light">You are rewarded a badge to show that you are considered as a good coverage writer.</p>
  //                 </div>
  //               )}
  //             </div>
  //           </h1>
  //           <p className="text-base text-gray-600">Here you can find all the coverages you lead.</p>
  //         </div>
  //         <div className="flex space-x-4">
  //           <div className="bg-gray-100 px-6 py-4 rounded-3xl text-center w-[278.82px]">
  //             <div className="flex items-center justify-center">
  //               <img src={Upvote} alt="Upvote" className="w-10 h-10 mr-2" />
  //               <span className="text-3xl font-bold">123</span>
  //             </div>
  //             <p className="text-sm">Upvote in total</p>
  //           </div>
  //           <div className="bg-gray-100 px-6 py-4 rounded-3xl text-center w-[278.82px]">
  //             <div className="flex items-center justify-center">
  //               <img src={Downvote} alt="Downvote" className="w-10 h-10 mr-2" />
  //               <span className="text-3xl font-bold">102</span>
  //             </div>
  //             <p className="text-sm">Downvote in total</p>
  //           </div>
  //         </div>
  //       </div>
        
  //       <div className="your-scripts">
  //         <div className="flex justify-between items-center mb-6">
  //           <h2 className="text-2xl font-bold">Your scripts <span className="ml-4" style={{color:'rgba(154,16,27,1)'}}>{scripts.length}</span></h2>
  //           <button className="text-gray-500 text-sm">By date ▼</button>
  //         </div>
  //         <div className="scripts-list md:grid md:grid-cols-2 md:gap-x-[114px] md:gap-y-5 md:h-[calc(100vh-650px)] md:overflow-y-auto">
  //           {scripts.map((script, index) => (
  //             <CoverageScriptItem 
  //               key={index}
  //               imageSrc={script.imageSrc}
  //               title={script.title}
  //               upvotes={script.upvotes}
  //               downvotes={script.downvotes}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
//   );
// };

// export default CoverageView;

import React, { useState } from 'react';
import CoverageScriptItem from './Cards/CoverageScriptItem';
import MobileCoverageScriptItem from './Cards/MobileCoverageScriptItem';
import Script from '../../../assets/script.svg';
import Upvote from '../../../assets/upvote.svg';
import Downvote from '../../../assets/downvote.svg';
import Badge from '../../../assets/badge.svg';

const CoverageView: React.FC = () => {
  const [showBadgePopup, setShowBadgePopup] = useState(false);

  const scripts = Array(17).fill({
    title: 'Texas Chainsaw Massacre',
    upvotes: 11,
    downvotes: 11,
    imageSrc: Script
  });

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block coverage-view bg-white w-[1966.53px] h-[1158.2px] overflow-hidden md:pl-[112px]">
        <div className="w-full md:w-[1690px] mx-auto pt-14 md:pt-20 pl-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-xl font-bold mb-2 flex items-center">
                YOUR COVERAGE 
                <div className="relative left-3 ml-2">
                  <img 
                    src={Badge} 
                    alt="Badge" 
                    className="w-6 h-6 cursor-pointer" 
                    onMouseEnter={() => setShowBadgePopup(true)}
                    onMouseLeave={() => setShowBadgePopup(false)}
                  />
                  {showBadgePopup && (
                    <div className="absolute left-[-110px] md:left-[50px] mt-2 p-4 bg-white shadow-lg rounded-3xl w-[380px] text-center">
                      <h3 className="text-xl font-bold text-red-600 mb-2">Good Coverage Writer</h3>
                      <p className="text-sm font-light">You are rewarded a badge to show that you are considered as a good coverage writer.</p>
                    </div>
                  )}
                </div>
              </h1>
              <p className="text-base text-gray-600">Here you can find all the coverages you lead.</p>
            </div>
            <div className="flex space-x-4">
              <div className="bg-gray-100 px-6 py-4 rounded-3xl text-center w-[278.82px]">
                <div className="flex items-center justify-center">
                  <img src={Upvote} alt="Upvote" className="w-10 h-10 mr-2" />
                  <span className="text-3xl font-bold">123</span>
                </div>
                <p className="text-sm">Upvote in total</p>
              </div>
              <div className="bg-gray-100 px-6 py-4 rounded-3xl text-center w-[278.82px]">
                <div className="flex items-center justify-center">
                  <img src={Downvote} alt="Downvote" className="w-10 h-10 mr-2" />
                  <span className="text-3xl font-bold">102</span>
                </div>
                <p className="text-sm">Downvote in total</p>
              </div>
            </div>
          </div>
          
          <div className="your-scripts">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your scripts <span className="ml-4" style={{color:'rgba(154,16,27,1)'}}>{scripts.length}</span></h2>
              <button className="text-gray-500 text-sm">By date ▼</button>
            </div>
            <div className="scripts-list md:grid md:grid-cols-2 md:gap-x-[114px] md:gap-y-5 md:h-[calc(100vh-650px)] md:overflow-y-auto">
              {scripts.map((script, index) => (
                <CoverageScriptItem 
                  key={index}
                  imageSrc={script.imageSrc}
                  title={script.title}
                  upvotes={script.upvotes}
                  downvotes={script.downvotes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <button className="bg-[#30374D] text-white px-3 py-2 rounded">≡</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded">Upload script</button>
          </div>
          <h1 className="text-xl font-bold mb-2 flex items-center">
            YOUR COVERAGE 
            <img src={Badge} alt="Badge" className="w-6 h-6 ml-2" />
          </h1>
          <p className="text-sm text-gray-600 mb-4">Here you can find all the coverages you left.</p>
          <div className="flex space-x-4 mb-6">
            <div className="bg-gray-100 p-3 rounded-lg flex-1">
              <div className="text-2xl font-bold">123</div>
              <div className="text-sm">Upvote in total</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg flex-1">
              <div className="text-2xl font-bold">10</div>
              <div className="text-sm">downvote</div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">All Scripts <span className="text-red-600">17</span></h2>
            <button className="text-gray-600 text-sm flex items-center">
              Filter By <span className="ml-1">▼</span>
            </button>
          </div>
          <div className="space-y-4">
            {scripts.map((script, index) => (
              <MobileCoverageScriptItem 
                key={index}
                imageSrc={script.imageSrc}
                title={script.title}
                upvotes={script.upvotes}
                downvotes={script.downvotes}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverageView;