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
          <img src="https://www.apple.com/v/ipad-air/r/images/meta/ipad-air_overview__cahgij9otxua_og.png" alt="" />
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
