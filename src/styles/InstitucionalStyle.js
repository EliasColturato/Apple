import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(5px);
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
  img {
    width: 1.2%;
    @media (max-width: 1000px) {
      width: 20px;
      padding: 0.5rem 0rem 0.5rem 0rem;
    }
  }
  button {
    border: none;
    background: none;
    color: #d5d5d5;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

export const Categorias = styled.div`
  p {
    font-size: 90%;
  }
  padding: 0.1rem;
  width: 73%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
