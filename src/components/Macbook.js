import React from 'react';
import { ImageControll, TextMac, MacbookImage } from '../styles/MacBookStyle';
import Compra from './Compra/Compra';

export default function Macbook() {
  return (
    <>
      <ImageControll>
        <TextMac>
          <h1>MacBook Pro 13 pol.</h1>
          <p>Com a potência do Chip M1.</p>
        </TextMac>
        <Compra />
        <img src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202206301035" alt="" />
        <MacbookImage></MacbookImage>
      </ImageControll>
    </>
  );
}
