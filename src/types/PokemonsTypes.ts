import { PokeTypes } from '../utils/BackgroundsByTypes';

export type PokeType = {
  name: PokeTypes | 'All',
  url?: string
};

export type AllPokemonsResults = {
  name: string;
  url: string;
};

export type PokemonsByTypeResult = {
  pokemon: {
    name: string,
    url: string,
  },
};
