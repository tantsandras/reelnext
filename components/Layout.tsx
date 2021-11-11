import { ReactNode } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import backgroundImage from "../public/Untitled design(11).png";

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
      <div className={styles.imageBox}>
        <div className={styles.image}>
          <Image
            src={backgroundImage}
            alt="dark bricks"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
          />
        </div>

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}
