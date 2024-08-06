import React, { useState, useEffect } from "react";
import Sidebar from './NavigationScript';
import HomeDashboard from './HomeDashboard';
import YourScripts from './YourScripts';
import CoverageView from './CoverageView';
import HomeIcon from '../../../assets/Home.svg';
import BackIcon from '../../../assets/Back.svg';
import ExitIcon from '../../../assets/Exit.svg';

const ScriptwriterOffice = () => {
  const [activeView, setActiveView] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [previousView, setPreviousView] = useState('');

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleSelectView = (view: string) => {
    setPreviousView(activeView);
    setActiveView(view);
  };

  const getViewTitle = () => {
    switch (activeView) {
      case 'home':
        return 'Home Dashboard';
      case 'scripts':
        return 'Your Scripts';
      case 'coverages':
        return 'Your Coverage';
      default:
        return 'Script Dashboard';
    }
  };

  const MobileNavbar = () => (
    <div className="fixed top-0 left-0 right-0 bg-[#30374D] text-white p-4 flex justify-between items-center z-50">
      <div className="flex items-center">
        <button onClick={() => handleSelectView('home')} className="mr-3 ml-3">
          <img src={HomeIcon} alt="Home" className="w-6 h-6" />
        </button>
        <button onClick={() => handleSelectView(previousView)} className="mr-0 ml-3">
          <img src={BackIcon} alt="Back" className="w-6 h-6" />
        </button>
      </div>
      <div>{getViewTitle()}</div>
      <div className="flex items-center">
        <button onClick={() => {/* Handle exit logic */}} className="ml-0 mr-6">
          <img src={ExitIcon} alt="Exit" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  return (
    <div className={`scrollable-background-swod ${isMobile ? 'bg-white' : ''}`}>
      <div className={`scriptwriter-window ${isMobile ? 'w-full' : ''}`}>
        {isMobile ? <MobileNavbar /> : <Sidebar onSelectView={handleSelectView} />}
        <div className={`${isMobile ? 'pt-16 px-4 w-full' : ''}`}>
          {activeView === 'home' && <HomeDashboard />}
          {activeView === 'scripts' && <YourScripts />}
          {activeView === 'coverages' && <CoverageView />}
          {/* Add more views as needed */}
        </div>
      </div>
    </div>
  );
};

export default ScriptwriterOffice;