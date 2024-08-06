import StatCards from "./Cards/StatCard";
import TopScript from "./Cards/TopScriptsCard";
import RemarksCard from "./Cards/RemarksCard";
import CoverageList from "./Cards/CoverageList";

const HomeDashboard = () => {
  return (
    <div className="scriptwriter-scroll">
      <div className="scriptwriter-window-one">
        <div className="scriptwriter-window-one-title">
          <h2>HI USERNAME</h2>
        </div>
        <div className="scriptwriter-window-one-title-two">
          <h1>Welcome to your writer Dashboard</h1>
        </div>
        <div className="scriptwriter-window-one-text">
          <p>Here you can find all the information about your scripts</p>
        </div>
        <StatCards />
        <div className="scriptwriter-window-one-title scripts-spacer">
          <h2>YOUR TOP SCRIPTS</h2>
          <button className="white-button-dashboard">see all</button>
        </div>
        <TopScript />
      </div>
      <div className="scriptwriter-window-two">
        <div className="scripts-spacer-two-right">
          <button className="red-button-dashboard">Upload a new script</button>
        </div>
        <div className="scriptwriter-window-two-title">
          <h2>REMARKS YOU LEFT</h2>
        </div>
        <RemarksCard />
        <div className="scriptwriter-window-two-title scripts-spacer-two">
          <h2>LATEST COVERAGE</h2>
          <button className="white-button-dashboard">Read More</button>
        </div>
        <CoverageList />
      </div>
    </div>
  );
};

export default HomeDashboard;