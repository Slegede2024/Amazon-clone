import styles from "./LowerHeader.module.css";
import { AiOutlineMenu } from "react-icons/ai";

function LowerHeader() {
  return (
    <div className={styles.lowerHeader}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${styles.menuIcon}`}>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li className={styles.navItem}>Todays Deals</li>
        <li className={styles.navItem}>Customer Service</li>
        <li className={styles.navItem}>Registry</li>
        <li className={styles.navItem}>Gift Cards</li>
        <li className={styles.navItem}>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
