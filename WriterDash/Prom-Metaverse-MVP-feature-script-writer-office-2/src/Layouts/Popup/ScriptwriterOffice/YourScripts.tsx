import ScriptsStatCards from "./Cards/ScriptStats";
import TopScript from "./Cards/TopScriptsCard";
import RemarksCard from "./Cards/RemarksCard";
import CoverageList from "./Cards/CoverageList";

const YourScripts = () => {
  return (
    <div className="scriptwriter-scroll">
      <div className="scriptwriter-window-one">
        <div className="max-w-[860px]">
          <div className="scriptwriter-window-one-title ">
            <h2>YOUR SCRIPTS</h2>
            <button className="red-button-dashboard">
              Upload a new script
            </button>
          </div>
          <div className="scriptwriter-window-one-text">
            <p>
              Here you can find more details and statistics about your scripts
            </p>
          </div>
        </div>
        <ScriptsStatCards />
        <div className="scriptwriter-window-one-title scripts-spacer">
          <h2>YOUR TOP SCRIPTS</h2>
          <button className="white-button-dashboard">see all</button>
        </div>
        <TopScript />
      </div>
      <div className="scriptwriter-window-two">
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

export default YourScripts;
