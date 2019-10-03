import React from 'react';
import styled from 'styled-components';

const InputTag = styled.input`
  position: absolute;
  left: -9999px;

  & + label {
    position: relative;
    padding: 0px 0 0 25px;
    cursor: pointer;
  }

  & + label:before {
    content: '';
    background-color: #fff;
    border: 2px solid #71b37c;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  & + label:after {
    content: '';
    background-color: #71b37c;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 5.8px;
    left: 5.8px;
    opacity: 0;
    transform: scale(2);
    transition: all 0.3s linear;
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;

const Input = ({ id, name, value, changeVal }) => {
  const handleChange = e => {
    changeVal(e);
  };

  return (
    <InputTag
      id={id}
      type="radio"
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
