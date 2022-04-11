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
  const separators = ["-", "REEL", "FEMINISM", " FEMINISIM"];
  const cutTitle = title.split(new RegExp(separators.join("|"), "g"));

  return (
    <li className={styles.card}>
      <h3 className={styles.episodeNumber}>EP {cutTitle?.[3]}</h3>
      <Image src={image} alt="Episode art" width={280} height={280} />

      <h4 className={styles.title}>{cutTitle?.[0]}</h4>
      <Player title={title} link={link} number={trackNumber} />
      <Link href={`/episode/${slug}`}>
        <a className={styles.readMoreButton}>Read more</a>
      </Link>
    </li>
  );
};

export default EpisodeCard;
function join(arg0: string) {
  throw new Error("Function not implemented.");
}
