import TriangleDiv from "../../../Components/TriangleDiv";
import FastTravelCard from "../../Cards/FastTravelCard";

const FastTravelPopup = () => {
  return (
    <section className="travel">
      <h1 className="travel-title">
        Fast Travel
      </h1>

      <div className="travel-container">
        <FastTravelCard
          title="Screenwriter Building"
          description="A place for screenwriters to work and share their scripts." />

        <FastTravelCard
          title="Billboard"
          description="Look at the new interesting projects and stay updated." />
        <FastTravelCard
          title="Your office"
          description="Write, collaborate and share your work with the world." />

      </div>

      <TriangleDiv  classNameSecond="triangle-up--travel"></TriangleDiv>
    </section>
  );
}

export default FastTravelPopup;