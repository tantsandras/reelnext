import styles from "./Footer.module.css";
import Social from "./Social";
import SmartLink from "./smartLink";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h3 className={styles.heading}>Reel Feminism</h3>
      <p className={styles.text}>
        Hello feminist friends! Welcome to Reel Feminism, the podcast where we
        discuss and rate films from an intersectional feminist perspective! Want
        to know how high your favourite films score? Listen now to find out!
        Isn&apos;t feminism fun?
      </p>
      <span className={styles.socialSpan}>
        <a
          href="https://www.facebook.com/ReelFeminism/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to our Facebook"
          className={styles.socialLink}
        >
          <FaFacebookSquare color="#fb0cab" size={25} />
        </a>
        <a
          href="https://www.instagram.com/reelfeminism/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to our Instagram"
          className={styles.socialLink}
        >
          <FaInstagramSquare color="#fb0cab" size={26} />
        </a>
      </span>
      <span className={styles.navSpan}>
        <SmartLink href="/" activeClassName={styles.linkActive}>
          <a className={styles.link}>Home</a>
        </SmartLink>
        <SmartLink href="/team" activeClassName={styles.linkActive}>
          <a className={styles.link}>Team</a>
        </SmartLink>
      </span>
    </footer>
  );
};

export default Footer;
