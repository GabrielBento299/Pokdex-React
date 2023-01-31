/* eslint-disable jsx-a11y/control-has-associated-label */
import styles from './styles.module.scss';

interface IPaginationProps {
  perPage: number;
  page: number;
  nextPage: () => void;
  previusPage: () => void;
  maxItems: number;
}

export default function Pagination({
  perPage, maxItems, nextPage, page, previusPage,
}: IPaginationProps) {
  const lastPage = Math.ceil(maxItems / perPage);

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        disabled={page === 1}
        onClick={previusPage}
      >Anterior
      </button>
      <span>{page}</span>
      <button
        type="button"
        disabled={page === lastPage}
        onClick={nextPage}
      >Próximo
      </button>
    </div>
  );
}
