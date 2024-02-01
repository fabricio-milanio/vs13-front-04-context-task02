import { GameContainer } from './games';
import { GameContext } from '../../context/gameContext/GameContext';
import { useContext } from 'react';

function GamesContent() {
  const { data, loading } = useContext(GameContext);

  return (
    <GameContainer>
      <h1 className="">Games</h1>
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <div className="game-container">
          {data.map((game) => (
            <div className="card-game" key={game.id}>
              <h2 className="">{game.title}</h2>
              <img src={game.thumbnail} alt={game.title} className="" />
            </div>
          ))}
        </div>
      )}
    </GameContainer>
  );
}

export default GamesContent;
