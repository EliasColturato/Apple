import React from 'react';
import { Link } from 'react-router-dom';
import Institucional from '../components/Institucional';

export default function CateiraPage() {
  return (
    <div>
      <Institucional />
      <div
        style={{ background: '#171617', textAlign: 'center', padding: '.3rem' }}
      >
        <Link to="/">
          <button
            className="home"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '70%',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Página Inicial
          </button>
        </Link>
      </div>
    </div>
  );
}
