import React from 'react';
import { ContainerDonations, Donations } from '../styles/HeaderStyle';

export default function Header() {
  return (
    <ContainerDonations>
      <Donations>
        <img src="./img/Unicef-Logo-Vector.webp" alt="#" />
        <p>Faça uma doação para as famílias afetadas pela guerra na Ucrânia.</p>
      </Donations>
    </ContainerDonations>
  );
}
