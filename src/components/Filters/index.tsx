/* eslint-disable @typescript-eslint/no-use-before-define */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import usePagination from '../../hooks/usePagination';
import { PokeType } from '../../types/PokemonsTypes';
import { background } from '../../utils/BackgroundsByTypes';

import styles from './styles.module.scss';

export function Filters() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { types, filterSelected, changeTypeSelected } = useContext(PokemonContext);
  const { setPage } = usePagination();

  const onChangeType = (type: PokeType) => {
    setPage(1);
    navigate('/?page=1');
    changeTypeSelected(type);
  };

  return (
    <div
      className={styles.ordersContainer}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.container}>
        <div className={open ? styles.orderClose : styles.orderOpen}>
          <span>{filterSelected?.name}</span>
          <FiltersIcon />
        </div>
        {open && types && (
          <div className={styles.orders}>
            {types.map((type: PokeType) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                key={type.name}
                className={styles.order}
                onClick={() => onChangeType(type)}
                style={{
                  fontWeight: filterSelected.name === type.name ? 'bold' : '',
                }}
              >
                <div
                  className={styles.color}
                  /* @ts-ignore */
                  style={{ background: background[type.name] }}
                />
                {type.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FiltersIcon({ ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19.5 9L12 16.5L4.5 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
