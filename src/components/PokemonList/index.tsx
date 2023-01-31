import PokemonCard from '../PokemonCard';
import styles from './styles.module.scss';

interface IPokemonsUrlProps {
  pokemonUrls?: string[] | null;
  page: number;
  perPage: number;
}

export default function PokemonList({ pokemonUrls, page, perPage } :IPokemonsUrlProps) {
  return (
    <div className={styles.pokemons}>
      {pokemonUrls
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemonUrl) => (
          <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
    </div>
  );
}
