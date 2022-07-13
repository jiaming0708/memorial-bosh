import { RowData } from "../interface/row-data";
import styles from './Card.module.scss';

function Card({ who, words }: RowData) {
  return (
    <div className={styles.root}>
      <p className={styles.words}>
        {words}
      </p>
      <div className={styles.who}>{who}</div>
    </div>
  );
}

export default Card;