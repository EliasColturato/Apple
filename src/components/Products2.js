import React from 'react';
import Airpods from './Products2/Airpods';
import Ipad from './Products2/Ipad';
import { ControllProducts2 } from '../styles/Products2/Products2Style';

export default function Products2() {
  return (
    <>
      <ControllProducts2>
        <Ipad />
        <Airpods />
      </ControllProducts2>
    </>
  );
}
