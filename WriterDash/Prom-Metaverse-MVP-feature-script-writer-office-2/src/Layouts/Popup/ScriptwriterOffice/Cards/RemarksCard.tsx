import React from "react";

type RemarksCardProps = {
  title: string;
  subtitle: string;
  count: number;
  label: string;
  bgColor: string;
  textColor: string;
};

const StatCard: React.FC<RemarksCardProps> = ({ title, subtitle, count, label, bgColor, textColor }) => (
  <section className={`flex flex-col grow px-6 pt-6 pb-3.5 w-full ${bgColor} rounded-2xl max-md:px-5 max-md:mt-10`}>
    <header className="flex flex-col">
      <h2 className={`justify-center text-xl font-semibold leading-5 ${textColor} rounded-lg`}>
        {title}
      </h2>
      <p className={`mt-2 text-lg leading-5 ${textColor === 'text-white' ? 'text-gray-200' : 'text-slate-900'}`}>
        {subtitle}
      </p>
    </header>
    <div className="flex gap-2 justify-between py-5 mt-10 max-md:mt-10">
      <span className={`text-5xl font-medium leading-5 ${textColor} max-md:text-4xl`}>
        {count}
      </span>
      <p className={`text-lg font-bold leading-5 ${textColor === 'text-white' ? 'text-gray-200' : 'text-gray-700'}`}>
        {label}
      </p>
    </div>
  </section>
);

const RemarksCard: React.FC = () => {
  const stats = [
    {
      title: "Coverages you left",
      subtitle: "Coverages that you provided.",
      count: 12,
      label: "Coverages by you",
      bgColor: "bg-[#B39E44]",
      textColor: "text-white"
    },
    {
      title: "Reviews you left",
      subtitle: "Reviews that you provided.",
      count: 19,
      label: "Reviews by you",
      bgColor: "bg-[#E8EBEF]",
      textColor: "text-slate-900"
    }
  ];

  return (
    <main className="px-8 py-5 bg-[#5B6179] rounded-3xl max-w-[605px] max-md:px-5 mt-[10px]">
      <div className="flex gap-[50px] max-md:flex-col max-md:gap-0">
        {stats.map((stat, index) => (
          <article key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <StatCard {...stat} />
          </article>
        ))}
      </div>
    </main>
  );
};

export default RemarksCard;