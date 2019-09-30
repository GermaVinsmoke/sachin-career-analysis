import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readData } from './actions';
import PieChart from '../components/charts/PieChart';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class FeedbackResult extends Component {
  componentDidMount() {
    this.props.readData();
  }

  render() {
    const { feedback } = this.props;
    return (
      <ChartContainer>
        {feedback.data !== undefined && feedback.data.length > 0 ? (
          <>
            <PieChart feedback={feedback.data} />
          </>
        ) : (
          ''
        )}
      </ChartContainer>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(
  mapStateToProps,
  { readData }
)(FeedbackResult);
