import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  position: fixed;
  border-radius: 50%;
  background-color: #fff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${props => props.top};
  left: ${props => props.left};
  height: 48px;
  width: 48px;
  border: 1px solid #ddd;
  transform: translate(0px, 2.5px);
  transition: 0.2s all ease-in;
  &:hover {
    box-shadow: 0px 15px 30px -12px rgba(0, 0, 0, 0.555);
    transform: translate3d(0, 0, 0);
  }
  @media only screen and (max-width: 768px) {
    left: 10%;
    top: 85%;
  }
`;

const Icon = styled.i`
  font-size: 2.5rem;
  color: black;
`;

const PrevButton = ({ nav_to, left_to, top_to }) => {
  return (
    <Button to={nav_to} left={left_to} top={top_to}>
      <Icon className="material-icons">chevron_left</Icon>
    </Button>
  );
};

export default PrevButton;
