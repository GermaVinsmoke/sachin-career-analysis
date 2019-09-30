import React from 'react';
import BarChart from '../components/charts/BarChart';
import TableData from '../components/TableData';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  margin-left: 10.3%;
`;

const Radio = styled.div`
  margin-right: 20px;
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;

  & + label {
    position: relative;
    padding: 0px 0 0 25px;
    cursor: pointer;
  }

  & + label:before {
    content: '';
    background-color: #fff;
    border: 2px solid #71b37c;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  & + label:after {
    content: '';
    background-color: #71b37c;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 5.8px;
    left: 5.8px;
    opacity: 0;
    transform: scale(2);
    transition: all 0.3s linear;
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;

const MatchStatsSection = ({ barData, change }) => {
  const handleChange = e => {
    change(e.target.value);
  };

  let labelData = [],
    datasetData = [];
  for (const [key, value] of Object.entries(barData)) {
    labelData.push(key);
    datasetData.push(value);
  }

  return (
    <div>
      <RadioContainer>
        <Radio>
          <Input
            id="chase"
            type="radio"
            name="match_stats"
            value="chase"
            onChange={handleChange}
          />
          <label htmlFor="chase">Chase</label>
        </Radio>
        <Radio>
          <Input
            id="toss"
            type="radio"
            name="match_stats"
            value="toss"
            onChange={handleChange}
          />
          <label htmlFor="toss">Toss</label>
        </Radio>
        <Radio>
          <Input
            id="innings"
            type="radio"
            name="match_stats"
            value="batting_innings"
            onChange={handleChange}
          />
          <label htmlFor="innings">Batting Innings</label>
        </Radio>
      </RadioContainer>
      <ChartContainer>
        <TableData
          keys={['Condition', 'Matches Won']}
          labelData={labelData}
          datasetData={datasetData}
        />
        <BarChart labelData={labelData} datasetData={datasetData} />
      </ChartContainer>
    </div>
  );
};

export default MatchStatsSection;
