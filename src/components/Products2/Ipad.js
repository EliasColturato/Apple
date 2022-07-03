import React from 'react';
import Compra from '../Compra/Compra';
import {
  Controllipad,
  TextIpad,
  IpadImage,
} from '../../styles/Products2/IpadStyle';

export default function Ipad() {
  return (
    <>
      <Controllipad>
        <TextIpad>
          <img src="./img/iPadLogo.png" alt="" />
          <p style={{ color: 'white' }}>Cor e potência no ar.</p>
          <Compra />
        </TextIpad>
        <IpadImage>
          <img src="./img/Ipadair.jpg" alt="" />
        </IpadImage>
      </Controllipad>
    </>
  );
}
