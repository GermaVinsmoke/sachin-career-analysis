import React from 'react';
import TimeSeriesChart from '../components/charts/TimeSeriesChart';
import styled from 'styled-components';
import RadioContainer from '../components/RadioContainer';
import Radio from '../components/Radio';
import Input from '../components/Input';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TimeSection = ({ timeData, change, label }) => {
  const handleChange = e => {
    change(e.target.value, e.target.id);
  };
  let filtered_data = [];
  for (let i = 0; i < timeData.length; i = i + 5) {
    filtered_data.push(timeData[i]);
  }

  return (
    <div>
      <RadioContainer>
        <Radio>
          <Input
            id="Runs"
            name="time_series"
            value="batting_score"
            changeVal={handleChange}
          />
          <label htmlFor="Runs">Total Runs</label>
        </Radio>
        <Radio>
          <Input
            id="Wickets"
            name="time_series"
            value="wickets"
            changeVal={handleChange}
          />
          <label htmlFor="Wickets">Total Wickets</label>
        </Radio>
        <Radio>
          <Input
            id="Catches"
            name="time_series"
            value="catches"
            changeVal={handleChange}
          />
          <label htmlFor="Catches">Total Catches</label>
        </Radio>
        <Radio>
          <Input
            id="Runs Conceded"
            name="time_series"
            value="runs_conceded"
            changeVal={handleChange}
          />
          <label htmlFor="Runs Conceded">Total Runs Conceded</label>
        </Radio>
      </RadioContainer>
      <ChartContainer>
        <TimeSeriesChart timeData={filtered_data} label={label} />
      </ChartContainer>
    </div>
  );
};

export default TimeSection;
