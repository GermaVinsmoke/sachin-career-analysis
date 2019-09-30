import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInfo } from './actions';
import styled from 'styled-components';
import bgImg from '../assets/sachin.jpg';
import NextButton from '../components/NextButton';

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImg});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 768px) {
    background-position: center;
    flex-direction: column;
  }
`;

const Heading1 = styled.h1`
  font-size: 54px;
  text-transform: uppercase;
  color: #f1c40f;
  -webkit-text-stroke: 2px darkgoldenrod;
`;

const Heading2 = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Heading3 = styled.h3`
  font-size: 20px;
  margin-left: ${props => (props.left ? props.left : '0px')};
  margin-right: ${props => (props.right ? props.right : '0px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};
`;

const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 2.5px 0px;
  background-color: rgba(196, 196, 222, 0.5);
  margin-bottom: 2.5px;
`;

class Home extends Component {
  componentDidMount() {
    this.props.fetchInfo();
  }

  render() {
    const { info } = this.props;
    return (
      <Container>
        <div>
          <Heading1> Sachin Tendulkar </Heading1>
          <Heading2>Opening Batsmen | Age: 46</Heading2>
          <InfoContent>
            <Heading3 left="10px" fontWeight="300">
              Matches
            </Heading3>
            <Heading3 right="10px">{info.match_count}</Heading3>
          </InfoContent>
          <InfoContent>
            <Heading3 left="10px" fontWeight="300">
              Runs
            </Heading3>
            <Heading3 right="10px">{info.total_runs}</Heading3>
          </InfoContent>
          <InfoContent>
            <Heading3 left="10px" fontWeight="300">
              50s
            </Heading3>
            <Heading3 right="10px">{info.half_century_count}</Heading3>
          </InfoContent>
          <InfoContent>
            <Heading3 left="10px" fontWeight="300">
              100s
            </Heading3>
            <Heading3 right="10px">{info.century_count}</Heading3>
          </InfoContent>
          <InfoContent>
            <Heading3 left="10px" fontWeight="300">
              Highest Score
            </Heading3>
            <Heading3 right="10px">{info.highest_run}</Heading3>
          </InfoContent>
        </div>
        <NextButton nav_to="/history" top_to="20rem" left_to="90%" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  info: state.home.info
});

export default connect(
  mapStateToProps,
  { fetchInfo }
)(Home);
