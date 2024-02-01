import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  .div-img {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    overflow-x: visible;
  }
  .div-img img {
    max-width: 1200px;
    width: 100%;
  }
  h1 {
    font-size: 2rem;
    margin: 2rem 0;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: justify;
    line-height: 2.5rem;
  }
  a {
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
    padding: 0.5rem;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: lightgray;
    margin: 2rem 0;
  }
  a:hover {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5rem;
    background-color: gray;
  }
`;
