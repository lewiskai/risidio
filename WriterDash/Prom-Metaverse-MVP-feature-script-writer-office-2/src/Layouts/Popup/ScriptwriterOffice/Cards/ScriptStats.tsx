import React from 'react';
import Star from '../../../../assets/Star-1--Streamline-Core.svg';
import BookMark from '../../../../assets/Bookmark-1--Streamline-Core.svg';
import Discount from '../../../../assets/Discount-Percent-Circle--Streamline-Core.svg';
import { count } from 'console';

interface StatisticsCardProps {
  icon: string;
  count?: number; 
  label: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ icon, count, label }) => {
  return (
    <div className="flex flex-col grow px-11 py-12 w-[280px] font-medium bg-gray-200 rounded-[30px] max-md:px-5 max-md:mt-6">
      <img loading="lazy" src={icon} alt="" className="aspect-square w-[23px]" />
      <div className="flex gap-3.5 mt-6">
        <div className="text-5xl text-slate-900 max-md:text-4xl">{count}</div>
        <div className="my-auto text-lg leading-5 text-zinc-900">{label}</div>
      </div>
    </div>
  );
};

const ScriptsStatCards: React.FC = () => {
  const statisticsData = [
    {
      icon: Discount,
      count: 609,
      label: "Total Votes"
    },
    {
      icon: BookMark,
      count: 19,
      label: "Total Bookmarks"
    },
    {
      icon: Star,
      count: 19,
      label: "Total Reviews"
    }
  ];

  return (
    <section className="pb-[68px] pt-[28px] max-w-[883px]">
      <div className="flex gap-5 max-md:flex-col">
        {statisticsData.map((data, index) => (
          <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <StatisticsCard {...data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScriptsStatCards;
