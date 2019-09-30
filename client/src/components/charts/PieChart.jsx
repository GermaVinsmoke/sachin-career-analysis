import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  height: 500px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const PieChart = ({ feedback }) => {
  const labelData = ['Yes', 'No'];
  const datasetData = [0, 0];
  if (feedback !== undefined) {
    for (let i = 0; i < feedback.length; i++) {
      if (feedback[i].response === 'Yes') datasetData[0]++;
      else datasetData[1]++;
    }
  }

  const data = {
    labels: labelData,
    datasets: [
      {
        data: datasetData,
        backgroundColor: ['#2ecc71', '#e74c3c']
      }
    ]
  };

  return (
    <Container>
      <Pie data={data} />
    </Container>
  );
};

export default PieChart;
