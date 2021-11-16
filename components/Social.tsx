import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import styles from "./Social.module.css";

interface Props {
  textVariant?: "default" | "white";
}

export default function Social({ textVariant = "default" }: Props) {
  const className = [
    styles.text,
    textVariant === "white" ? styles.whiteText : "",
  ].join(" ");
  return (
    <span className={styles.socialBox}>
      <span className={className}>Follow us:</span>
      <a
        href="https://www.facebook.com/ReelFeminism/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to our Facebook"
        className={styles.socialLink}
      >
        <FaFacebookSquare color="#fb0cab" size={17} />
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
}
