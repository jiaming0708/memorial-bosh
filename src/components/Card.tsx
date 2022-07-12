import { RowData } from "../interface/row-data";
import styles from './Card.module.scss';
import logo from '../images/logo.png';

function Card({ who, words }: RowData) {
  return (
    <div className={styles.root}>
      <p className={styles.words}>
        <img className={styles.image} src={logo} alt="logo" />
        {words}
      </p>
      <span className={styles.who}>{who}</span>
    </div>
  );
}

export default Card;