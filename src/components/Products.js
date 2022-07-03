import React from 'react';
import MacbookAir from '../components/MacbookAir';
import Iphone13 from './Iphone13';
import { ControllProducts } from '../styles/ProductsStyle';

export default function Products() {
  return (
    <ControllProducts>
      <MacbookAir />
      <Iphone13 />
    </ControllProducts>
  );
}
