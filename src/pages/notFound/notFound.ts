import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 1200px;
  height: 80vh;
  width: 100%;
  gap: 1rem;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    color: #000;
    width: 200px;
    height: 80px;
    border-radius: 5px;
    background-color: #f5f5f5;
    &:hover {
      text-decoration: none;
      background-color: #e5e5e5;
    }
  }
`;
