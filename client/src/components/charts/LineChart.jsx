import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  height: 500px;
  @media only screen and (max-width: 768px) {
    width: 99%;
    height: 300px;
  }
`;

const LineChart = ({ labelData, datasetData, label }) => {
  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(63, 81, 181, 700);
    gradient.addColorStop(0, '#929dd9');
    gradient.addColorStop(1, '#172b4d');
    return {
      labels: labelData,
      datasets: [
        {
          label,
          backgroundColor: gradient,
          borderColor: '#3F51B5',
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2,
          data: datasetData
        }
      ]
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Time',
            fontColor: 'black',
            fontSize: 16
          },
          gridLines: {
            display: false,
            color: 'black'
          },
          ticks: {
            fontColor: 'black',
            fontSize: 16
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Runs',
            fontColor: 'black',
            fontSize: 16
          },
          gridLines: {
            display: false,
            color: 'black'
          },
          ticks: {
            fontColor: 'black',
            fontSize: 16,
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13
    }
  };

  return (
    <Container>
      <Line data={data} options={options} height={100} />
    </Container>
  );
};

export default LineChart;
