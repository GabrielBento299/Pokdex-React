import { useParams } from 'react-router-dom';
import { PokemonDetail } from '../../components/PokemonDetail';
import UsePokemon from '../../hooks/usePokemon';

export default function PokeDetail() {
  const { pokeId } = useParams();
  const { pokemon } = UsePokemon('', pokeId);

  return <PokemonDetail pokemon={pokemon} />;
}
