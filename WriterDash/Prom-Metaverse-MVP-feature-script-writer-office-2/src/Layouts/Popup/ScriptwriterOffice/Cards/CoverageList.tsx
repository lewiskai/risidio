import React from "react";
import CoverageProfile from '../../../../assets/profile-coverage.svg';

type CoverageItemProps = {
  imageSrc: string;
  title: string;
  username: string;
  daysAgo: number;
  status: "Consider" | "Recommend" | "Needs work";
};

const CoverageItem: React.FC<CoverageItemProps> = ({ imageSrc, title, username, daysAgo, status }) => {
  const statusClasses = {
    "Consider": "bg-teal-200 text-sky-900",
    "Recommend": "bg-lime-200 text-lime-800",
    "Needs work": "bg-red-300 text-red-800"
  };

  return (
    <article className="flex flex-wrap gap-5 content-center py-2.5 pr-20 pl-5 mt-4 bg-red-800 rounded-xl border-b border-gray-200 border-solid max-md:px-5">
      <img loading="lazy" src={imageSrc} alt="" className="shrink-0 my-auto aspect-[1.05] w-[58px]" />
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col pr-5 border-0 border-white border-solid">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <div className="flex flex-col mt-1">
            <p className="text-base text-white">
              <span>Coverage made </span>
              <span className="font-bold">by {username}</span>
            </p>
            <time className="text-sm font-semibold text-gray-200">
              {daysAgo} days ago
            </time>
          </div>
        </div>
        <div className={`w-[157px] justify-center px-9 py-1 my-auto text-sm font-medium leading-6 text-center rounded-lg max-md:px-5 ${statusClasses[status]}`}>
          {status}
        </div>
      </div>
    </article>
  );
};

const CoverageList: React.FC = () => {
  const coverageItems: CoverageItemProps[] = [
    { imageSrc: CoverageProfile, title: "French Twist", username: "Username", daysAgo: 2, status: "Consider" },
    { imageSrc: CoverageProfile, title: "French Twist", username: "Username", daysAgo: 2, status: "Recommend" },
    { imageSrc: CoverageProfile, title: "French Twist", username: "Username", daysAgo: 2, status: "Needs work" },
    { imageSrc: CoverageProfile, title: "French Twist", username: "Username", daysAgo: 2, status: "Needs work" },
    { imageSrc: CoverageProfile, title: "French Twist", username: "Username", daysAgo: 2, status: "Needs work" },
  ];

  return (
    <main className="flex flex-col max-w-[605px]">
      {coverageItems.map((item, index) => (
        <CoverageItem key={index} {...item} />
      ))}
    </main>
  );
};

export default CoverageList;