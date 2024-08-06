import React from 'react';

interface StatCardProps {
  title: string;
  description: string;
  count: number;
  additionalInfo?: string;
  bgColor: string;
  textColor: string;
  secondaryTextColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  description,
  count,
  additionalInfo,
  bgColor,
  textColor,
  secondaryTextColor
}) => (
  <section className={`flex flex-col grow px-4 pt-4 pb-4 w-full ${bgColor} rounded-[17px] max-md:px-5 max-md:mt-6`}>
    <div className="flex flex-col">
      <header>
        <h2 className={`justify-center text-[20px] font-semibold leading-5 ${textColor} rounded-lg`}>
          {title}
        </h2>
        <p className={`mt-2 text-[16px] leading-5 ${secondaryTextColor}`}>
          {description}
        </p>
      </header>
      <div className="flex gap-2 justify-center mt-10 font-medium max-md:mt-8">
        <span className={`text-[30px] leading-5 ${textColor} max-md:text-4xl`}>
          {count}
        </span>
        {additionalInfo && (
          <span className={`text-[15px] ${secondaryTextColor}`}>{additionalInfo}</span>
        )}
      </div>
    </div>
  </section>
);

const StatCards: React.FC = () => {
  const statCards = [
    {
      title: "Your Scripts",
      description: "Here you find all scripts you uploaded.",
      count: 17,
      additionalInfo: "Scripts posted",
      bgColor: "bg-red-800",
      textColor: "text-white",
      secondaryTextColor: "text-red-200"
    },
    {
      title: "Coverage",
      description: "Coverage you received on your scripts.",
      count: 12,
      additionalInfo: "+1 Last day",
      bgColor: "bg-red-800",
      textColor: "text-white",
      secondaryTextColor: "text-red-200"
    },
    {
      title: "Reviews",
      description: "Review you received on your scripts.",
      count: 19,
      additionalInfo: "+1 Last day",
      bgColor: "bg-gray-200",
      textColor: "text-slate-900",
      secondaryTextColor: "text-gray-700"
    }
  ];

  return (
    <div className="max-w-[830px] pt-[42px] pb-[75px]">
      <div className="flex gap-[23px] max-md:flex-col max-md:gap-0">
        {statCards.map((card, index) => (
          <div key={index} className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
            <StatCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCards;