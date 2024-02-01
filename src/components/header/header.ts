import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 10vh;
  background-color: black;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    padding: 0 2rem;

    .header-left img {
      width: 60px;
      height: 60px;
      border: 2px solid transparent;
      padding: 0.5rem;
      cursor: pointer;
    }

    .header-left img:hover {
      border: 2px solid white;
      border-radius: 50%;
      padding: 0.5rem;
    }

    .header-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 300px;
    }
    .header-right a {
      color: white;
      font-size: 1.5rem;
      text-decoration: none;
    }

    .header-right a:hover {
      color: gray;
    }
  }
`;
