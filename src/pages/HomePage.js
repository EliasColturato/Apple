import React from 'react';
import Institucional from '../components/Institucional';
import Header from '../components/Header';
import Iphone13Pro from '../components/Iphone13Pro';
import Watch7 from '../components/Watch7';
import Macbook from '../components/Macbook';
import Products from '../components/Products';
import Products2 from '../components/Products2';
import InstitucionalResponsive from '../components/InstitucionalResponsive';

export default function HomePage() {
  return (
    <>
      <Institucional />
      <InstitucionalResponsive />
      <Header />
      <Iphone13Pro />
      <Watch7 />
      <Macbook />
      <Products />
      <Products2 />
    </>
  );
}
