import React, { useState } from "react";
import "../../node_modules/react-vis/dist/style.css";
import "../styles/partial/_dash-chart-graph.scss";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Hint,
  Crosshair,
} from "react-vis";

function DashGraph() {
  const [hover, setHover] = useState(null);
  const [hintColor, setHintColor] = useState("red");

  console.log(hover);

  const Stats = [
    {
      color: "#77df77",
      data: [
        { x: 0, y: 1.2 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
      ],
    },
    {
      color: "#50a6ff",
      data: [
        { x: 0, y: 5 },
        { x: 1, y: 3 },
        { x: 2, y: 5 },
        { x: 3, y: 2 },
        { x: 4, y: 8 },
        { x: 5, y: 6 },
      ],
    },
    {
      color: "#ffae5b",
      data: [
        { x: 0, y: 3 },
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 3 },
        { x: 4, y: 2 },
        { x: 5, y: 3 },
      ],
    },
    {
      color: "#ff5050",
      data: [
        { x: 0, y: 9 },
        { x: 1, y: 2.5 },
        { x: 2, y: 4.5 },
        { x: 3, y: 3.5 },
        { x: 4, y: 2.5 },
        { x: 5, y: 3.5 },
      ],
    },
  ];

  return (
    <div className="app__graph">
      <XYPlot height={600} width={1000} strokeWidth="3">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />

        {Stats.map((stat, index) => (
          <LineSeries
            key={`line-${index}`}
            onNearestXY={(value, { index }) => setHover(value, index)}
            onSeriesMouseOut={() => {
              // console.log("mouse out");
              setHover(null);
              setHintColor(stat.color);
            }}
            data={stat.data}
            stroke={stat.color}
          />
        ))}
        {hover && (
          // <Crosshair value={hover} />
          <Hint value={hover} className="app__graph__hint">
            <div style={{ backgroundColor: hintColor }}>
              <span> Value: {hover.y} </span>
            </div>
          </Hint>
        )}
      </XYPlot>
    </div>
  );
}

export default DashGraph;
