import { ReactNode } from "react";
import styles from "./EpisodeList.module.css";

interface Props {
  children: ReactNode;
}

const EpisodeList = ({ children }: Props) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default EpisodeList;
