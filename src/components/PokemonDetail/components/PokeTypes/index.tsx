import { background } from '../../../../utils/BackgroundsByTypes';
import { IPokemon } from '../../../../types/PokemonInterfaces';

import styles from './styles.module.scss';

interface Props {
  pokemon: IPokemon | null;
}

export function PokeTypes({ pokemon }: Props) {
  return (
    <div className={styles.types}>
      {/* @ts-ignore */}
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          /* @ts-ignore */
          style={{ background: background[name] }}
          className={styles.type}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
