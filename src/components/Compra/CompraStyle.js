import styled from 'styled-components';

export const BuyButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 0rem 0rem 1rem 0rem;
  button {
    border: none;
    background: none;
    color: #0066cc;
    font-size: 65%;
    margin: 1rem 1rem 0rem 1rem;
    cursor: pointer;

    p {
      margin: 0;
      padding: 0;
      font-size: 200%;
    }
  }
  button:hover {
    border-bottom: 2px solid #0066cc;
  }
`;
