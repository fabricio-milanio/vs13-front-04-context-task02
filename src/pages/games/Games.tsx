import { useEffect, useState } from 'react';
import { GameContainer } from './games';
import axios from 'axios';

interface Game {
  id: number;
  title: string;
  thumbnail: string;
}

function Games() {
  const [data, setData] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = '/api/api1/games';
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <GameContainer>
      <h1 className="">Games</h1>
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <div className="">
          {data.map((game) => (
            <div className="card-game" key={game.id}>
              <h2 className="">{game.title}</h2>
              <img src={game.thumbnail} alt={game.title} className="" />
              <br />
            </div>
          ))}
        </div>
      )}
    </GameContainer>
  );
}

export default Games;
