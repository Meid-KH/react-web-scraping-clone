import React, { useState } from "react";
import { Range } from "react-range";
import "../styles/partial/_range-slider.scss";

function RangeSlider(props) {
  const [values, setValues] = useState([props.value]);
  const config = {
    step: 1,
    min: 0,
    max: 100,
  };

  return (
    <>
      <Range
        step={config.step}
        min={config.min}
        max={config.max}
        values={values}
        onChange={(newValues) => {
          setValues(newValues);
          console.log(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: "#5900ffb8",
              borderRadius: "6px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              background: "#5900ff",
              borderRadius: "50%",
            }}
          />
        )}
      />
      <div className="range__values">
        <span className="value">{config.min}</span>
        <span className="value">{values}</span>
      </div>
    </>
  );
}

export default RangeSlider;
