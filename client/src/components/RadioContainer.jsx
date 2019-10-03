import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-left: 10.3%;
`;

const RadioContainer = props => {
  return <Container>{props.children}</Container>;
};

export default RadioContainer;
