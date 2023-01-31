import { useContext } from 'react';
import { PokeballIconSmall } from '../../assets/img/pokeball';
import Pagination from '../../components/pagination';
import PokemonList from '../../components/PokemonList';
import { PokemonContext } from '../../context/PokemonContext';
import usePagination from '../../hooks/usePagination';

import styles from './styles.module.scss';

export default function Home() {
  const { pokemonsFiltered } = useContext(PokemonContext);

  const {
    page, backToHome, nextPage, previousPage, setPage,
  } = usePagination();

  const perPage = 12;

  return (
    <div className={styles.home}>
      <header>
        <div>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>

      <PokemonList
        page={page}
        perPage={perPage}
        pokemonUrls={pokemonsFiltered}
      />

      <Pagination
        page={page}
        maxItems={pokemonsFiltered?.length!}
        nextPage={nextPage}
        previusPage={previousPage}
        perPage={perPage}
      />
    </div>
  );
}
