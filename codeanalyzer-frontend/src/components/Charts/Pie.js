import React from "react";
import { Doughnut } from "react-chartjs-2";

const Pie = (props) => {
  const options = {
    legend: {
      display: true,
      position: "right",
    },
  };
  return (
    <div>
      {console.log(props.data)}
      <Doughnut data={props.data} options={{ ...options, maintainAspectRatio:false }} />
    </div>
  );
};

export default Pie;
