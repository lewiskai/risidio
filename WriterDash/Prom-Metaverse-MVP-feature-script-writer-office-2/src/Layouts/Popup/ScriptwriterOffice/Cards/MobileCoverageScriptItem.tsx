import React from 'react';
import Upvote from '../../../../assets/upvote.svg';
import Downvote from '../../../../assets/downvote.svg';

interface MobileCoverageScriptItemProps {
  imageSrc: string;
  title: string;
  upvotes: number;
  downvotes: number;
}

const MobileCoverageScriptItem: React.FC<MobileCoverageScriptItemProps> = ({ imageSrc, title, upvotes, downvotes }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-start space-x-4">
        <img src={imageSrc} alt={title} className="w-20 h-24 object-cover rounded" />
        <div>
          <p className="text-xs text-gray-600">Your coverage on</p>
          <h3 className="text-base font-bold">{title}</h3>
          <button className="bg-lime-200 text-lime-800 px-3 py-1 rounded-full text-xs mt-2">Recommend</button>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <img src={Upvote} alt="Upvote" className="w-4 h-4 mr-1" />
          <span className="text-sm">{upvotes}</span>
        </div>
        <div className="flex items-center">
          <img src={Downvote} alt="Downvote" className="w-4 h-4 mr-1" />
          <span className="text-sm">{downvotes}</span>
        </div>
      </div>
    </div>
  );
};

export default MobileCoverageScriptItem;