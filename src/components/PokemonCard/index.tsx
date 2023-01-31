import { Link } from 'react-router-dom';
import UsePokemon from '../../hooks/usePokemon';
import { background } from '../../utils/BackgroundsByTypes';
import Loader from '../Loader';
import styles from './styles.module.scss';

interface IProps {
  url: string;
}

export default function PokemonCard({ url } :IProps) {
  const { pokemon } = UsePokemon(url);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  return (
    <Link to={`/${pokemon?.id}`} className={styles.pokeCard}>
      <div style={{ borderColor: backgroundSelected }} className={styles.top}>
        <span style={{ color: backgroundSelected }}>#{pokemon?.id}</span>
        {pokemon?.sprites.other.dream_world.front_default
        || pokemon?.sprites.front_default ? (
          <img
            src={pokemon.sprites.other.dream_world.front_default
            || pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          ) : (
            <div className={styles.loadingContainer}>
              <Loader color={backgroundSelected} />
            </div>
          )}
      </div>
      <div style={{ background: backgroundSelected }} className={styles.bottom}>
        {pokemon?.name}
      </div>
    </Link>
  );
}
