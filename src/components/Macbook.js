import React from 'react';
import { ImageControll, MacbookImage } from '../styles/MacBookStyle';
import Compra from './Compra/Compra';

export default function Macbook() {
  return (
    <>
      <ImageControll>
        <h1>MacBook Pro 13 pol.</h1>
        <p>Com a potência do Chip M1.</p>
        <Compra />
        <img src="./img/macbookpro.jpg" alt="" />
        <MacbookImage></MacbookImage>
      </ImageControll>
    </>
  );
}
