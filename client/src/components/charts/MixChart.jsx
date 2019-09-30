import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: 700px;
  @media only screen and (max-width: 768px) {
    width: 99%;
    height: 250px;
  }
`;

const MixChart = ({ labelData, datasetData, secondDatasetData }) => {
  const data = {
    labels: labelData,
    datasets: [
      {
        type: 'line',
        label: 'Matches',
        data: secondDatasetData,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        label: 'Runs',
        type: 'bar',
        data: datasetData,
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-2'
      }
    ]
  };

  const options = {
    responsive: true,
    tooltips: {
      mode: 'label'
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Months',
            fontColor: 'black',
            fontSize: 16
          },
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-1',
          scaleLabel: {
            display: true,
            labelString: 'Matches',
            fontColor: 'black',
            fontSize: 16
          },
          gridLines: {
            display: false
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-2',
          scaleLabel: {
            display: true,
            labelString: 'Runs',
            fontColor: 'black',
            fontSize: 16
          },
          gridLines: {
            display: false
          }
        }
      ]
    }
  };

  return (
    <Container>
      <Bar data={data} width={50} height={25} options={options} />
    </Container>
  );
};

export default MixChart;
