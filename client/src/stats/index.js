import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchRuns,
  fetchMatchRuns,
  fetchTimeData,
  fetchBarData,
  fetchBatsmen
} from './actions';
import RunSection from './RunSection';
import MixSection from './MixSection';
import TimeSection from './TimeSection';
import MatchStatsSection from './MatchStatsSection';
import styled from 'styled-components';
import Header from '../components/Header';
import PrevButton from '../components/PrevButton';
import NextButton from '../components/NextButton';
import RunComparison from './RunComparison';

const Container = styled.div`
  background-color: #f4f4fa;
`;

const SubHeading = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin: 10px 20px;
`;

class Stats extends Component {
  componentDidMount() {
    this.props.fetchRuns('all');
    this.props.fetchMatchRuns('opposition');
    this.props.fetchTimeData('batting_score', 'Runs');
    this.props.fetchBarData('toss');
    this.props.fetchBatsmen();
  }

  handleYearChange = year => {
    this.props.fetchRuns(year);
  };

  handleMatchRunChange = value => {
    this.props.fetchMatchRuns(value);
  };

  handleTimeDataChange = (value, label) => {
    this.props.fetchTimeData(value, label);
  };

  handleMatchResultChange = value => {
    this.props.fetchBarData(value);
  };

  render() {
    const { stats } = this.props;

    return (
      <>
        <Container>
          <Header text="Batting Statistics" />
          <SubHeading> Runs Scored </SubHeading>
          <RunSection runsData={stats.runs} change={this.handleYearChange} />
          <RunComparison data={stats.batsmen} />
          <SubHeading> Runs & Matches </SubHeading>
          <MixSection
            runsMatchData={stats.runs_match}
            change={this.handleMatchRunChange}
          />
          <Header text="Time Series Statistics" />
          <TimeSection
            timeData={stats.time_data}
            change={this.handleTimeDataChange}
            label={stats.time_label}
          />
          <Header text="Match Statistics" />
          <MatchStatsSection
            change={this.handleMatchResultChange}
            barData={stats.bar_data}
          />
        </Container>

        <PrevButton nav_to="/history" top_to="20rem" left_to="5%" />
        {/* <NextButton nav_to="/feedback" top_to="20rem" left_to="90%" /> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats
});

export default connect(
  mapStateToProps,
  {
    fetchRuns,
    fetchMatchRuns,
    fetchTimeData,
    fetchBarData,
    fetchBatsmen
  }
)(Stats);
