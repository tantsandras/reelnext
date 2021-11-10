import styles from "./Navbar.module.css";
import React from "react";
import SmartLink from "./smartLink";

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.linkList}>
        <li className={styles.listItem}>
          <SmartLink href="/" activeClassName={styles.linkActive}>
            <a className={styles.link}>
              <i>Home</i>
            </a>
          </SmartLink>
        </li>
        <li className={styles.listItem}>
          <SmartLink href="/team" activeClassName={styles.linkActive}>
            <a className={styles.link}>
              <i>Team</i>
            </a>
          </SmartLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
