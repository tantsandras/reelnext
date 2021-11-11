import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
  backgroundVariant?: "default" | "yellowStyle";
}

export default function Layout({
  children,
  backgroundVariant = "default",
}: Props) {
  const className = [
    styles.wrapper,
    backgroundVariant === "yellowStyle" ? styles.yellowWrapper : "",
  ].join(" ");

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
