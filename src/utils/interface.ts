import { ReactNode } from 'react';

export interface IGame {
  id: number;
  title: string;
  thumbnail: string;
}

export interface IGameContextType {
  data: IGame[];
  loading: boolean;
}

export interface IGameProviderProps {
  children: ReactNode;
}
