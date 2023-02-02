import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '../../../../assets/img/arrow';
import { PokeballIconBig } from '../../../../assets/img/pokeball';
import { IPokemon } from '../../../../types/PokemonInterfaces';

import styles from './styles.module.scss';

interface Props {
  pokemon: IPokemon | null;
}

export function Header({ pokemon }: Props) {
  const navigate = useNavigate();

  return (
    <header>
      <PokeballIconBig className={styles.pokeball} />
      <div className={styles.left}>
        <ArrowLeftIcon onClick={() => navigate(-1)} />

        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
}
