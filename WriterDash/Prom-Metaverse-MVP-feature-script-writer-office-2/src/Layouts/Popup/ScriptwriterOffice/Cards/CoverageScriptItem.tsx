import React from 'react';
import Upvote from '../../../../assets/upvote.svg';
import Downvote from '../../../../assets/downvote.svg';

interface CoverageScriptItemProps {
  imageSrc: string;
  title: string;
  upvotes: number;
  downvotes: number;
}

const CoverageScriptItem: React.FC<CoverageScriptItemProps> = ({ imageSrc, title, upvotes, downvotes }) => {
  return (
    <div className="coverage-script-item bg-gray-100 rounded-3xl p-4 flex items-center justify-between w-full md:w-[764px]">
      <div className="flex items-center space-x-4">
        <img src={imageSrc} alt={title} className="w-26 h-40 md:w-[113.8px] md:h-[134.79px] object-cover rounded-2xl" />
        <div>
          <p className="text-xs text-gray-600">Your coverage on</p>
          <h3 className="text-base font-bold">{title}</h3>
          <button className="bg-lime-200 text-lime-800 px-3 py-1 rounded-3xl text-xs mt-2">Recommend</button>
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:space-x-4">
        <div className="flex items-center space-x-1">
          <img src={Upvote} alt="Upvote" className="w-4 h-4" />
          <span className="text-sm">{upvotes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={Downvote} alt="Downvote" className="w-4 h-4" />
          <span className="text-sm">{downvotes}</span>
        </div>
        <button className="border-2 text-gray-800 px-12 py-4 rounded-3xl text-sm">Read</button>
      </div>
      <div className="md:hidden flex justify-between w-full mt-4">
        <div className="flex items-center space-x-1">
          <img src={Upvote} alt="Upvote" className="w-4 h-4" />
          <span className="text-sm">{upvotes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={Downvote} alt="Downvote" className="w-4 h-4" />
          <span className="text-sm">{downvotes}</span>
        </div>
      </div>
    </div>
  );
};

export default CoverageScriptItem;