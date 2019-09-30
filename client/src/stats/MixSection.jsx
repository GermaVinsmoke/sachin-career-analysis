import React from 'react';
import MixChart from '../components/charts/MixChart';
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

const MixSection = ({ runsMatchData, change }) => {

    let mixLabelDataSum, mixDatasetDataSum, mixDatasetDataMatch = [];
    mixLabelDataSum = mixDatasetDataSum = null
    if (runsMatchData.sum !== undefined && runsMatchData.match_count !== undefined) {
        mixLabelDataSum = runsMatchData.sum.map(d => d.opposition)
        mixDatasetDataSum = runsMatchData.sum.map(d => d.batting_score)
        for (const [key, value] of Object.entries(runsMatchData.match_count)) {
            mixDatasetDataMatch.push(value)
        }
    }

    const handleChange = e => {
        change(e.target.value)
    }

    return (
        <div>
            <RadioContainer>
                <Radio>
                    <Input
                        id="opposition"
                        type="radio"
                        name="runs_match_pie"
                        value="opposition"
                        onChange={handleChange}
                    />
                    <label htmlFor="opposition">Opposition</label>
                </Radio>
                <Radio>
                    <Input
                        id="ground"
                        type="radio"
                        name="runs_match_pie"
                        value="ground"
                        onChange={handleChange}
                    />
                    <label htmlFor="ground">Ground</label>
                </Radio>
            </RadioContainer>
            <ChartContainer>
                <MixChart labelData={mixLabelDataSum} datasetData={mixDatasetDataSum} secondDatasetData={mixDatasetDataMatch} />
            </ChartContainer>
        </div>
    )
}

export default MixSection;