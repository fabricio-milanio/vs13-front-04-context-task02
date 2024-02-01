import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .game-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 1200px;
  }
  .card-game {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 5px;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px 0 #ccc;
    h2 {
      font-size: 1.2rem;
    }
    img {
      border-radius: 5px;
    }
  }
`;
