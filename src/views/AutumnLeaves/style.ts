import styled, { keyframes } from 'styled-components';

import random from '../../utils/random';
export const BackGround = styled.div`
  background: radial-gradient(#333, #000);
  width: 100%;
  height: 100vh;
  display: block;
`;

const animate = keyframes`
 0% { top:-20%; opacity:0; overflow: hidden; }
 10% { opacity:1 }
 95% { top:100%; opacity:0; }
 100% { top:120%; opacity:0; }
`;
export const Leaf = styled.img<{ left: number }>`
  position: absolute;
  left: ${(props) => props.left}%;
  width: ${() => (random(0, 3) + 2) * 2}em;
  animation-name: ${animate};
  animation-duration: ${() => random(6, 10) * 3}s;
  animation-delay: ${() => random(0, 5) * 5}s;
  animation-iteration-count: infinite;
  opacity: 0;
`;
