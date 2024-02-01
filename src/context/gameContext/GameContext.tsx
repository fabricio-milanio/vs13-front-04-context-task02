import { createContext, useEffect, useState } from 'react';
// import axios from 'axios';
import {
  IGame,
  IGameContextType,
  IGameProviderProps,
} from '../../utils/interface';
// import axios from 'axios';

const getGames = async () => {
  const url = 'http://localhost:3000/games';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const GameContext = createContext({} as IGameContextType);

export const GameProvider = ({ children }: IGameProviderProps) => {
  const [data, setData] = useState<IGame[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGames();
        setData(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <GameContext.Provider value={{ data, loading }}>
      {children}
    </GameContext.Provider>
  );
};
