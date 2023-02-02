import styles from './styles.module.scss';

interface Props {
  content: string;
  backgroundSelected: string;
}

// eslint-disable-next-line import/prefer-default-export
export function Title({ content, backgroundSelected }: Props) {
  return (
    <span className={styles.title} style={{ color: backgroundSelected }}>
      {content}
    </span>
  );
}
