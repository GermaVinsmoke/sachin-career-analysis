import React from 'react';
import LineChart from '../components/charts/LineChart';
import TableData from '../components/TableData';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Select = styled.select`
  margin-left: 3.3%;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 15px 100px;
  border-radius: 44px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const RunSection = ({ runsData, change }) => {
  let years = [];
  for (let i = 1989; i <= 2012; i++) years.push(i);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const labelData = runsData.map(d => {
    if (d.hasOwnProperty('date')) {
      let date = new Date(d.date);
      return monthNames[date.getMonth()];
    }
    return d.year;
  });
  const datasetData = runsData.map(d => d.batting_score);

  const handleChange = e => {
    change(e.target.value);
  };

  return (
    <>
      <Select defaultValue="0" onChange={handleChange}>
        <option id="default" name="0" value="0" disabled>
          Select Year
        </option>
        <option id="all" name="all" value="all">
          All
        </option>
        {years.map(year => (
          <option id={year} key={year} name={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <ChartContainer>
        <TableData
          keys={['Time', 'Runs']}
          labelData={labelData}
          datasetData={datasetData}
        />
        <LineChart
          labelData={labelData}
          datasetData={datasetData}
          label="Runs"
        />
      </ChartContainer>
    </>
  );
};

export default RunSection;
