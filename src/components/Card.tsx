import { RowData } from "../interface/row-data";
import styles from './Card.module.scss';
import logo from '../images/logo.png';

function Card({ who, words }: RowData) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img className={styles.image} src={logo} alt="logo" />
        <span className={styles.who}>{who}</span>
      </div>
      <p className={styles.words}>
        {words}
      </p>
    </div>
  );
}

export default Card;