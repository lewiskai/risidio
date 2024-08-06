import { useState } from 'react';
import onBuildingHover from '../../assets/building.svg';
import onBillboardHover from '../../assets/billboard.svg';
import onScriptboardHover from '../../assets/Scriptboard_Pin.svg';
import onDashboardHover from '../../assets/Dashboard_Pin.svg';

interface PinProps {
  menuBuildingName?: string;
  menuBuildingText?: string;
  billboardName?: string;
  billboardText?: string;
  onClick?: React.MouseEventHandler;
  dashboardName?: string;
  dashboardText?: string;
  scriptboardName?: string;
  scriptboardText?: string;
}
const Pin: React.FC<PinProps> = ({
  menuBuildingName,
  menuBuildingText,
  dashboardName,
  dashboardText,
  scriptboardName,
  scriptboardText,
  billboardName,
  billboardText,
  onClick,
}) => {
  const [onBuilding, setOnBuilding] = useState<boolean>(false);
  const [onBillboard, setOnBillboard] = useState<boolean>(false);
  const [onDashboard, setOnDashboard] = useState<boolean>(false);
  const [onScriptboard, setOnScriptboard] = useState<boolean>(false);

  return (
    <div className='pin-container' onClick={onClick}>
      {menuBuildingName && menuBuildingText && (
      <img
        src={onBuildingHover}
        alt=''
        className='onBuildingHover'
        onMouseEnter={() => setOnBuilding(true)}
        onMouseLeave={() => setOnBuilding(false)}
      />
      )}
      {billboardName && billboardText && (
      <img
        src={onBillboardHover}
        alt=''
        className='onBillboardHover'
        onMouseEnter={() => setOnBillboard(true)}
        onMouseLeave={() => setOnBillboard(false)}
      />
      )}
      {dashboardName && dashboardText && (
        <img
          src={onDashboardHover}
          alt=''
          className='onDashboardHover'
          onMouseEnter={() => setOnDashboard(true)}
          onMouseLeave={() => setOnDashboard(false)}
        />
      )}
      {scriptboardName && scriptboardText && (
        <img
          src={onScriptboardHover}
          alt=''
          className='onScriptboardHover'
          onMouseEnter={() => setOnScriptboard(true)}
          onMouseLeave={() => setOnScriptboard(false)}
        />
      )}
      {onBuilding && (
        <div className='building-wrapper'>
          <div className='pin-heading-building-container'>
            <h2 className='pin-heading-building-primary'>{menuBuildingName}</h2>
          </div>
          <div className='pin-info-building-container'>
            <p className='pin-info-text'>{menuBuildingText}</p>
          </div>
        </div>
      )}
      {onBillboard && (
        <div className='billboard-wrapper'>
          <div className='pin-heading-billboard-container'>
            <h2 className='pin-heading-billboard-primary'>{billboardName}</h2>
          </div>
          <div className='pin-info-billboard-container'>
            <p className='pin-info-billboard-text'>{billboardText}</p>
          </div>
          <div className='billboard-btn-container'>
            <div className='billboard-ad-website-wrapper '>
              <button className='billboard-ad-website-btn'>
                Howdy website
              </button>
            </div>
            <div className='billboard-ad-billboard-wrapper'>
              <button className='billboard-ad-billboard-btn'>Billboard</button>
            </div>
          </div>
        </div>
      )}
      {onDashboard &&(
        <div className='dashboard-wrapper'>
          <div className='pin-heading-dashboard-container'>
            <h2 className='pin-heading-dashboard-primary'>{dashboardName}</h2>
          </div>
          <div className='pin-info-dashboard-container'>
            <p className='pin-info-dashboard-text'>{dashboardText}</p>
          </div>
          <div className='dashboard-button-wrapper'>
              <button className='dashboard-ad-dashboard-btn'>Dashboard</button>
            </div>
        </div>
      )}
      {onScriptboard && (
        <div className='scriptboard-wrapper'>
          <div className='pin-heading-scriptboard-container'>
            <h2 className='pin-heading-scriptboard-primary'>{scriptboardName}</h2>
          </div>
          <div className='pin-info-scriptboard-container'>
            <p className='pin-info-scriptboard-text'>{scriptboardText}</p>
          </div>
          <div className='scriptboard-button-wrapper'>
            <button className='scriptboard-ad-scriptboard-btn'>Scriptboard</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Pin;

