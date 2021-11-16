import { ReactNode } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import backgroundImage from "../public/background.png";

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
      <div className={styles.imageBox}>
        <Image
          src={backgroundImage}
          alt="dark bricks"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          placeholder="blur"
        />
      </div>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
