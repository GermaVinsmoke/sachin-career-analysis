import React from 'react';
import BarChart from '../components/charts/BarChart';
import TableData from '../components/TableData';
import styled from 'styled-components';
import RadioContainer from '../components/RadioContainer';
import Radio from '../components/Radio';
import Input from '../components/Input';

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
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
            name="match_stats"
            value="chase"
            changeVal={handleChange}
          />
          <label htmlFor="chase">Chase</label>
        </Radio>
        <Radio>
          <Input
            id="toss"
            name="match_stats"
            value="toss"
            changeVal={handleChange}
          />
          <label htmlFor="toss">Toss</label>
        </Radio>
        <Radio>
          <Input
            id="innings"
            name="match_stats"
            value="batting_innings"
            changeVal={handleChange}
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
