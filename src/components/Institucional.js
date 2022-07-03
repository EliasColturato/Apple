import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Categorias } from '../styles/InstitucionalStyle';

export default function Institucional() {
  return (
    <Container>
      <Categorias>
        <img src="./img/logo-apple.svg" alt="" />
        <Link to="/teste">
          <button className="1">
            <p>Loja</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="2">
            <p>Mac</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="3">
            <p>iPad</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="4">
            <p>iPhone</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="5">
            <p>Watch</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="6">
            <p>AirPods</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="7">
            <p>TV e Casa</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="8">
            <p>Só na Apple</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="9">
            <p>Acessórios</p>
          </button>
        </Link>
        <Link to="/teste">
          <button className="6">
            <p>Suporte</p>
          </button>
        </Link>
        <img src="./img/search.png" alt="" />
        <img src="./img/bag.png" alt="" />
      </Categorias>
    </Container>
  );
}
