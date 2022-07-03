import React from 'react';
import {
  ControllAirpods,
  ImageAirpod,
  TextAirpod,
} from '../../styles/Products2/AirpodStyle';
import Compra from '../Compra/Compra';

export default function Airpods() {
  return (
    <>
      <ControllAirpods>
        <ImageAirpod>
          <img src="./img/Airpods.jpg" alt="" />
        </ImageAirpod>
        <TextAirpod>
          <h1>AirPods</h1>
          <p>Tudo novo. Até o Áudio Especial.</p>
          <Compra />
        </TextAirpod>
      </ControllAirpods>
    </>
  );
}
