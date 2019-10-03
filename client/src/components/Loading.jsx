import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    from {
        background-position: 0;
    }
    to {
        background-position: 3072px;
    }
`;

const SpriteAnimation = styled.div`
  position: absolute;
  background-color: red;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url('/api/images/flame_sprite.webp');
  width: calc(3072px / 6);
  height: 512px;
  animation: ${animate} 0.5s steps(6) infinite;
`;

const Loading = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      <SpriteAnimation />
    </div>
  );
};

export default Loading;
