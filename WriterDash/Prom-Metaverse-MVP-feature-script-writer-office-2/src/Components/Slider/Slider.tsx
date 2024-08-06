import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

type Props = {
  title: string;
};
const SliderComponent: React.FC<Props> = ({ title }) => {
  const marks = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
  ];

  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <div className="slider">
      <h1 className="slider-title">{title}</h1>
      <Box>
        <Slider
          aria-label="Always visible"
          defaultValue={5}
          getAriaValueText={valuetext}
          step={1}
          marks={marks}
          max={11}
        />
      </Box>
    </div>
  );
};

export default SliderComponent;
