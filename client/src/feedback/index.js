import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from './actions';
import FeedbackRes from './FeedbackRes';
import PrevButton from '../components/PrevButton';
import Header from '../components/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  padding: 15px 50px;
  font-size: 1.5rem;
  background-color: white;
  border-radius: 11px;
  cursor: pointer;
  color: ${props => (props.yes_btn ? props.color : props.color)};
  border: 1px solid;
  border-color: ${props => (props.yes_btn ? props.color : props.color)};
  transform: translate(0px, 2.5px);
  transition: 0.2s all ease-in;
  &:hover:enabled {
    color: white;
    background-color: ${props => (props.yes_btn ? props.color : props.color)};
    box-shadow: 0px 15px 30px -12px rgba(0, 0, 0, 0.555);
    transform: translate3d(0, 0, 0);
  }
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`;

const Icon = styled.i`
  position: relative;
  top: 6px;
  right: 6px;
  font-size: 2rem;
`;

class Feedback extends Component {
  handleChange = e => {
    this.props.addData(e.target.value);
  };

  render() {
    const { feedback } = this.props;
    return (
      <>
        <Header
          text="
          So, What do you think? Is Sachin the greatest cricketer of all time?"
        />
        <Container>
          <Button
            yes_btn
            color="#2ecc71"
            disabled={feedback.id !== undefined}
            value="Yes"
            onClick={this.handleChange}
          >
            <Icon className="material-icons">check</Icon>
            Yes
          </Button>
          <Button
            no_btn
            color="#e74c3c"
            disabled={feedback.id !== undefined}
            value="No"
            onClick={this.handleChange}
          >
            <Icon className="material-icons">close</Icon>
            No
          </Button>
        </Container>
        {feedback.id !== undefined ? <FeedbackRes /> : ''}
        <PrevButton nav_to="/stats" top_to="20rem" left_to="5%" />
      </>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(
  mapStateToProps,
  { addData }
)(Feedback);
