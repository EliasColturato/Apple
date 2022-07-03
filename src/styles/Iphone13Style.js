import styled from 'styled-components';

export const ContainerIphone = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const TextIphone = styled.div`
  h1 {
    font-size: 200%;
    margin: 2rem 0rem 0rem 0rem;
  }
  p {
    margin: 0;
    font-size: 120%;
  }
`;

export const IphoneImage = styled.div`
  img {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
