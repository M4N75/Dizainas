import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

export default class Chart extends React.Component {
  state = {
    dataLine: {
      labels: ["Pirma Savaite", "Antra Savaite", "Trecia Savaite", "Ketvirta Savaite"],
      datasets: [
        {
          label: "Sausis",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "#e5c154",
          borderColor: "#e5c154",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [18, 28, 30, 9, 46, 17, 40]
        },
        {
          label: "Vasaris",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "#b52685",
          borderColor: "#b52685",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
            label: "Kovas",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "#ff8800",
            borderColor: "#ff8800",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(35, 26, 136)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}