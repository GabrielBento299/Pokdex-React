import { useEffect, useState } from 'react';
import axios from 'axios';

import { IPokemon } from '../types/PokemonInterfaces';
import { api } from '../services/api';

export default function UsePokemon(url: string, id?:string) {
  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  async function fetchPokemon() {
    if (url) {
      const { data }: any = await axios.get(url);
      setPokemon(data);
    } else if (id) {
      const { data }: any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(data);
    }
  }

  useEffect(() => {
    fetchPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { pokemon };
}
