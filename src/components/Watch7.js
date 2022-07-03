import React from 'react';
import { Watch7Container } from '../styles/Watch7Style';
import Compra from './Compra/Compra';

export default function Watch7() {
  return (
    <Watch7Container>
      <img src="./img/watch7logo.png" alt="" style={{ width: '15%' }} />
      <p>Nossa maior tela até hoje.</p>
      <Compra />
      <img src="./img/AppleWatch7.jpg" alt="" style={{ width: '55%' }} />
    </Watch7Container>
  );
}
