import React from 'react';
import { PokeballIconSmall } from '../../assets/img/pokeball';

import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <header>
        <div>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
    </div>
  );
}
