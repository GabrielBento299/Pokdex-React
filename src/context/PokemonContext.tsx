/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import {
  AllPokemonsResults,
  PokemonsByTypeResult,
  PokeType,
} from '../types/PokemonsTypes';

interface ContextProps {
  types: PokeType[];
  filterSelected: PokeType;
  pokemonsFiltered: string[] | null;
  changeTypeSelected: (type: PokeType) => void;
}

const limitPagesUrl = 15;

const allPokemonsUrl = `/pokemon?limit=${limitPagesUrl}&offset=0`;

const defaultState: PokeType = {
  name: 'All',
  url: allPokemonsUrl,
};

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

function PokemonProvider({ children }: any) {
  const [allPokemons, setAllPokemons] = useState(null);
  const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

  const [types, setTypes] = useState([defaultState]);
  const [filterSelected, setFilterSelected] = useState(defaultState);

  const changeTypeSelected = async (type: PokeType) => {
    setFilterSelected(type);

    const { data } = await axios.get(type?.url!);
    const pokemons = data?.pokemon?.map(
      ({ pokemon }: PokemonsByTypeResult) => pokemon?.url,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    type.name !== 'All'
      ? setPokemonsFiltered(pokemons)
      : setPokemonsFiltered(allPokemons);
  };

  const getPokemonsType = async () => {
    const { data } = await api.get('/type');
    setTypes(((prevState) => [...prevState, ...data.results]));
  };

  const getAllPokemons = async () => {
    const { data } = await api.get(allPokemonsUrl);

    const pokemons = data?.results?.map(
      (pokemon: AllPokemonsResults) => pokemon?.url,
    );

    setAllPokemons(pokemons);
    setPokemonsFiltered(pokemons);
  };

  useEffect(() => {
    getPokemonsType();
    getAllPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PokemonContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        types,
        filterSelected,
        pokemonsFiltered,
        changeTypeSelected,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
