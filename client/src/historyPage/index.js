import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInfo } from '../home/actions';
import styled from 'styled-components';
import NextButton from '../components/NextButton';
import './index.css';
import PrevButton from '../components/PrevButton';

const Split = styled.div`
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
`;

const Content = styled.div`
  color: white;
  font-size: 25px;
  text-align: ${props => (props.right ? 'end' : 'start')};
  position: relative;
  bottom: 40px;
  left: ${props => (props.right ? '-15px' : '5px')};
`;

const Header = styled.h2`
  font-size: 48px;
`;

const Opposition = styled.h3`
  font-size: 30px;
  &::before {
    content: 'V';
    font-size: 48px;
  }
`;

const Ground = styled.h4`
  font-size: 20px;
`;

class HistoryPage extends Component {
  componentDidMount() {
    this.props.fetchInfo();
  }

  render() {
    const { info } = this.props;
    let first_match_opposition,
      first_match_date,
      first_match_ground,
      last_match_opposition,
      last_match_date,
      last_match_ground;
    first_match_opposition = first_match_date = first_match_ground = last_match_opposition = last_match_date = last_match_ground = null;

    if (info.first_match !== undefined && info.last_match !== undefined) {
      first_match_opposition = info.first_match.opposition;
      first_match_date = new Date(info.first_match.date).toLocaleDateString();
      first_match_ground = info.first_match.ground;
      last_match_opposition = info.last_match.opposition;
      last_match_date = new Date(info.last_match.date).toLocaleDateString();
      last_match_ground = info.last_match.ground;
    }

    return (
      <>
        <Split className="left">
          <Content>
            <Header>First Match</Header>
            <Opposition>s {first_match_opposition}</Opposition>
            <h3>{first_match_date}</h3>
            <Ground>{first_match_ground}</Ground>
          </Content>
          <PrevButton nav_to="/" top_to="20rem" left_to="5%" />
        </Split>
        <Split className="right">
          <Content right>
            <Header>Last Match</Header>
            <Opposition>s {last_match_opposition}</Opposition>
            <h3>{last_match_date}</h3>
            <Ground>{last_match_ground}</Ground>
          </Content>
          <NextButton nav_to="/stats" top_to="20rem" left_to="90%" />
        </Split>
      </>
    );
  }
}

const mapStateToProps = state => ({
  info: state.home.info
});

export default connect(
  mapStateToProps,
  { fetchInfo }
)(HistoryPage);
