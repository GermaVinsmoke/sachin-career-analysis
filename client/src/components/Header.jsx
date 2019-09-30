import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  padding: 3rem;
  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = ({ text }) => {
  return <Heading>{text}</Heading>;
};

export default Header;
