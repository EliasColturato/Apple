import styled from 'styled-components';

export const Controllipad = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: black;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const TextIpad = styled.div`
  img {
    width: 100%;
  }
  h1 {
    font-size: 200%;
    margin: 2rem 0rem 0rem 0rem;
  }
  p {
    margin: 0;
    font-size: 120%;
  }
`;

export const IpadImage = styled.div`
    display: flex;
    justify-content: center;
  img {
    width: 15%;
  }
`;
