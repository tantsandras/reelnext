import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <span className={styles.socialBox}>
      <span className={styles.text}>Follow us:</span>
      <a
        href="https://www.facebook.com/ReelFeminism/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to our Facebook"
        className={styles.socialLink}
      >
        <FaFacebookSquare color="#fb0cab" size={17.5} />
      </a>
      <a
        href="https://www.instagram.com/reelfeminism/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to our Instagram"
        className={styles.socialLink}
      >
        <FaInstagramSquare color="#fb0cab" size={18} />
      </a>
    </span>
  );
};

export default Social;
