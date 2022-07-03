import styled from 'styled-components';

export const ControllAirpods = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ImageAirpod = styled.div`
  img {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextAirpod = styled.div`
  img {
    width: 30%;
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
