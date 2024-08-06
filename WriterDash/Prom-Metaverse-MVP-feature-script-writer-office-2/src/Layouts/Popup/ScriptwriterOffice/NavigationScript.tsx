import React, { useState } from "react";
import Home from '../../../assets/dashboard-home.svg';
import Star from '../../../assets/dashboard-Star-1--Streamline-Core.svg';
import Frame from '../../../assets/dashboard-frame.svg';
import Chat from '../../../assets/dashoboard-Chat-Bubble-Square-Write--Streamline-Core.svg';
import Union from '../../../assets/dashoboard-Union.svg';
import UnionTwo from '../../../assets/Union2.svg';
import arrowRight from '../../../assets/ArrowLineRight.svg';

type IconProps = {
  src: string;
  className: string;
  alt?: string;
  expandedTitles?: string[];
  isExpanded?: boolean;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ src, className, alt, expandedTitles, isExpanded, onClick }) => (
  <div className="flex flex-col items-start cursor-pointer" onClick={onClick}>
    <div className="flex items-baseline w-full">
      <img loading="lazy" src={src} className={className} alt={alt} />
      {isExpanded && alt && <div className="text-white ml-2">{alt}</div>}
    </div>
    {isExpanded && expandedTitles && (
      <div className="mt-2 text-white">
        {expandedTitles.map((title, index) => (
          <div key={index} className="flex items-center mt-[10px]">
            <img src={arrowRight} className="mr-2" alt="Arrow right icon" />
            {title}
          </div>
        ))}
      </div>
    )}
  </div>
);

type SidebarProps = {
  onSelectView: (view: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onSelectView }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setSelectedIcon(null); // Reset selected icon when expanding/collapsing
  };

  const handleIconClick = (index: number, view: string) => {
    setSelectedIcon(selectedIcon === index ? null : index);
    onSelectView(view);
  };

  const icons = [
    {
      src: Home,
      className: "mt-[24px]",
      view: 'home',
    },
    {
      src: Frame,
      className: "mt-[112px]",
      alt: "SCRIPTS",
      expandedTitles: ["Your Scripts", "Your Drafts"],
      view: 'scripts',
    },
    {
      src: Chat,
      className: "mt-[112px]",
      alt: "COVERAGES",
      expandedTitles: ["Received", "Provided"],
      view: 'coverages',
    },
    {
      src: Star,
      className: "mt-[112px]",
      alt: "REVIEWS",
      expandedTitles: ["Received", "Provided"],
      view: 'reviews',
    },
  ];

  return (
    <nav className={`fixed flex flex-col justify-between px-7 py-4 bg-[#30374D] border-opacity-10 h-full transition-all duration-300 ${isExpanded ? 'max-w-[220px]' : 'max-w-[112px]'}`}>
      <div className="flex flex-col items-center">
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <Icon
              {...icon}
              isExpanded={isExpanded}
              onClick={() => handleIconClick(index, icon.view)}
            />
            {selectedIcon === index && !isExpanded && icon.expandedTitles && (
              <div className="absolute bg-[#30374D] text-white p-2 shadow-2xl rounded-lg z-50" style={{ top: 70 + 130 * index, left: '90px', width: '180px'}}>
                {icon.expandedTitles.map((title, i) => (
                  <div key={i} className="flex items-center p-1 cursor-pointer" onClick={() => onSelectView(icon.view)}>
                    <img src={arrowRight} className="mr-2" alt="Arrow right icon" />
                    {title}
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center mb-[20px] cursor-pointer" onClick={toggleExpand}>
        <Icon src={isExpanded ? UnionTwo : Union} className="mt-4" />
      </div>
    </nav>
  );
};

export default Sidebar;
