import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  height: 100vh;
`;

const NotFound = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.span`
  font-size: 120px;
`;

const Text = styled.p`
  font-size: 50px;
  text-align: center;
`;

const Home = styled(Link)`
  font-size: 50px;
  color: white;
`;

const ErrorComp = () => {
  return (
    <Container>
      <NotFound>
        <Number>404</Number>
        <Text>Page Not Found</Text>
        <Text>
          Please move to <Home to="/">Home Page</Home>
        </Text>
      </NotFound>
    </Container>
  );
};

export default ErrorComp;
