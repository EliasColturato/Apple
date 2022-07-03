import React from 'react';
import { ContainerAir, TextAir, AirImage } from '../styles/AirStyle';
import Compra from './Compra/Compra';

export default function MacbookAir() {
  return (
    <>
      <ContainerAir>
        <TextAir>
          <h1>MacBook Air</h1>
          <p>Com a potência do Chip M2.</p>

          <p style={{ color: 'rgba(90,90,90, 0.6)' }}>Disponível em julho.</p>
          <Compra />
        </TextAir>
        <AirImage>
          <img src="./img/macbookair.jpg" alt="" />
        </AirImage>
      </ContainerAir>
    </>
  );
}
