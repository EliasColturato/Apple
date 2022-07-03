import React from 'react';
import { Link } from 'react-router-dom';

const InstitucionalPage = () => {
  return (
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
  );
};

export default InstitucionalPage;
