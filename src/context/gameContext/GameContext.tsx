import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
  IGame,
  IGameContextType,
  IGameProviderProps,
} from '../../utils/interface';

export const GameContext = createContext({} as IGameContextType);

export const GameProvider = ({ children }: IGameProviderProps) => {
  const [data, setData] = useState<IGame[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = '/api/api1/games';
        const response = await axios.get<IGame[]>(url);
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
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
