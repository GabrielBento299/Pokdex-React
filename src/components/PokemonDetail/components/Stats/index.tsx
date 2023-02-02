import { HeightIcon, WeightIcon } from '../../../../assets/img/stats';
import { IPokemon } from '../../../../types/PokemonInterfaces';

import styles from './styles.module.scss';

interface Props {
  pokemon: IPokemon | null;
}

export function Stats({ pokemon }: Props) {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <WeightIcon />
        <span>{pokemon?.weight} </span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <HeightIcon />
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
}
