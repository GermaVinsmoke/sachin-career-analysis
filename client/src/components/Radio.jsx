import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-right: 20px;
`;

const Radio = props => {
  return <Container>{props.children}</Container>;
};

export default Radio;
