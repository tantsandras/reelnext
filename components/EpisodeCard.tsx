import styles from "./EpisodeCard.module.css";
import Image from "next/image";
import Player from "./Player";
import Link from "next/link";

interface Data {
  guid: string;
  title: string;
  link?: string;
  image: string;
  summary: string;
  slug: string;
}

const EpisodeCard = ({ guid, slug, title, link, image }: Data) => {
  const trackNumber = guid.split("tag:soundcloud,2010:tracks/")[1];
  const cutTitle = title.split("- REEL FEMINISM ");

  return (
    <li className={styles.card}>
      <Image src={image} alt="Episode art" width={280} height={280} />
      <h2 className={styles.title}>
        {cutTitle?.[1]}
        <br />
        {cutTitle?.[0]}
      </h2>
      <Player title={title} link={link} number={trackNumber} />
      <Link href={`/episode/${slug}`}>
        <a className={styles.readMoreButton}>
          <i>Read more</i>
        </a>
      </Link>
    </li>
  );
};

export default EpisodeCard;
function join(arg0: string) {
  throw new Error("Function not implemented.");
}
