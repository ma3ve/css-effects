import React from 'react';
import random from '../../utils/random';
import { BackGround, Leaf } from './style';
import Autumn1 from './assets/Autumn-Leaf1.svg';
import Autumn2 from './assets/Autumn-Leaf2.svg';
import Autumn3 from './assets/Autumn-Leaf3.svg';
import Autumn4 from './assets/Autumn-Leaf4.svg';
import Autumn5 from './assets/Autumn-Leaf5.svg';
import Autumn6 from './assets/Autumn-Leaf6.svg';

const Leaves = [Autumn1, Autumn2, Autumn3, Autumn4, Autumn5, Autumn6];

export default function index(): JSX.Element {
  return (
    <BackGround>
      {[...Array(20)].map((_, index) => (
        <Leaf
          left={random(90)}
          key={index}
          src={Leaves[random(0, 6)]}
          style={{ overflow: 'hidden' }}
        />
      ))}
    </BackGround>
  );
}
