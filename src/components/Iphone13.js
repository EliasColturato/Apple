import React from 'react';
import {
  ContainerIphone,
  TextIphone,
  IphoneImage,
} from '../styles/Iphone13Style';
import Compra from './Compra/Compra';

export default function Iphone13() {
  return (
    <ContainerIphone>
      <TextIphone>
        <h1>iPhone 13</h1>
        <p>Seu novo superpoder.</p>
        <p style={{ color: 'rgba(90,90,90, 0.6)' }}>Disponível em julho.</p>
        <Compra />
      </TextIphone>
      <IphoneImage>
        <img src="./img/Iphone13.jpg" alt="" />
      </IphoneImage>
    </ContainerIphone>
  );
}
