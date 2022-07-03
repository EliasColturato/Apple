import React from 'react';
import { BuyButtons } from './CompraStyle';

export default function Compra() {
  return (
    <>
      <BuyButtons>
        <button className="saiba">
          <p>Saiba mais</p>
        </button>
        <button className="compra">
          <p>Compra</p>
        </button>
      </BuyButtons>
    </>
  );
}
