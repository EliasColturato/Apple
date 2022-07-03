import styled from 'styled-components';

export const ContainerResponsive = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(5px);
  width: 100%;
  @media (max-width: 1000px) {
    justify-content: space-around;
    display: flex;
  }
  img {
    width: 1.2%;
    @media (max-width: 1000px) {
      width: 20px;
      padding: 0.5rem 0rem 0.5rem 0rem;
    }
  }
`;
