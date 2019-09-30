import React from 'react';
import TimeSeriesChart from '../components/charts/TimeSeriesChart';
import styled from 'styled-components';

const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
`

const RadioContainer = styled.div`
    display: flex;
    margin-left: 3.3%;
`

const Radio = styled.div`
    margin-right: 20px;
`

const Input = styled.input`
    position: absolute;
    left: -9999px;

    & + label{
        position: relative;
        padding: 0px 0 0 25px;
        cursor: pointer;
    }

    & + label:before{
        content: '';
        background-color: #fff;
        border: 2px solid #71B37C;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
    }

    & + label:after{
        content: '';
        background-color: #71B37C;
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

    &:checked + label:after{
        opacity: 1;
        transform: scale(1);
    }
`

const TimeSection = ({ timeData, change, label }) => {

    const handleChange = e => {
        change(e.target.value, e.target.id)
    }
    let filtered_data = []
    for (let i = 0; i < timeData.length; i = i + 5) {
        filtered_data.push(timeData[i]);
    }

    return (
        <div>
            <RadioContainer>
                <Radio>
                    <Input
                        id="Runs"
                        type="radio"
                        name="time_series"
                        value="batting_score"
                        onChange={handleChange}
                    />
                    <label htmlFor="Runs">Total Runs</label>
                </Radio>
                <Radio>
                    <Input
                        id="Wickets"
                        type="radio"
                        name="time_series"
                        value="wickets"
                        onChange={handleChange}
                    />
                    <label htmlFor="Wickets">Total Wickets</label>
                </Radio>
                <Radio>
                    <Input
                        id="Catches"
                        type="radio"
                        name="time_series"
                        value="catches"
                        onChange={handleChange}
                    />
                    <label htmlFor="Catches">Total Catches</label>
                </Radio>
                <Radio>
                    <Input
                        id="Runs Conceded"
                        type="radio"
                        name="time_series"
                        value="runs_conceded"
                        onChange={handleChange}
                    />
                    <label htmlFor="Runs Conceded">Total Runs Conceded</label>
                </Radio>
            </RadioContainer>
            <ChartContainer>
                <TimeSeriesChart timeData={filtered_data} label={label} />
            </ChartContainer>
        </div >
    )
}

export default TimeSection;