import React from 'react';
import { ContainerPro, TextPro, ImagePro } from '../styles/Iphone13PROStyle';
import Compra from './Compra/Compra';

export default function Iphone13() {
  return (
    <ContainerPro>
      <ImagePro>
        <TextPro>
          <h1 style={{ fontSize: '300%' }}>iPhone 13 Pro</h1>
          <p>É todo Pro.</p>
        </TextPro>
        <Compra />
        <img src="./img/Iphone13Pro.jpg" alt="" style={{ width: '55%' }} />
      </ImagePro>
    </ContainerPro>
  );
}
