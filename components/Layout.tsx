import { ReactNode } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import backgroundImage from "../public/background.png";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <div className={styles.imageBox}>
        <Image
          src={backgroundImage}
          alt="dark bricks"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
