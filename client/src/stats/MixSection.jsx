import React from 'react';
import MixChart from '../components/charts/MixChart';
import styled from 'styled-components';
import RadioContainer from '../components/RadioContainer';
import Radio from '../components/Radio';
import Input from '../components/Input';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MixSection = ({ runsMatchData, change }) => {
  let mixLabelDataSum,
    mixDatasetDataSum,
    mixDatasetDataMatch = [];
  mixLabelDataSum = mixDatasetDataSum = null;
  if (
    runsMatchData.sum !== undefined &&
    runsMatchData.match_count !== undefined
  ) {
    mixLabelDataSum = runsMatchData.sum.map(d => d.opposition);
    mixDatasetDataSum = runsMatchData.sum.map(d => d.batting_score);
    for (const [key, value] of Object.entries(runsMatchData.match_count)) {
      mixDatasetDataMatch.push(value);
    }
  }

  const handleChange = e => {
    change(e.target.value);
  };

  return (
    <div>
      <RadioContainer>
        <Radio>
          <Input
            id="opposition"
            name="runs_match_pie"
            value="opposition"
            changeVal={handleChange}
          />
          <label htmlFor="opposition">Opposition</label>
        </Radio>
        <Radio>
          <Input
            id="ground"
            name="runs_match_pie"
            value="ground"
            changeVal={handleChange}
          />
          <label htmlFor="ground">Ground</label>
        </Radio>
      </RadioContainer>
      <ChartContainer>
        <MixChart
          labelData={mixLabelDataSum}
          datasetData={mixDatasetDataSum}
          secondDatasetData={mixDatasetDataMatch}
        />
      </ChartContainer>
    </div>
  );
};

export default MixSection;
