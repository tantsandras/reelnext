import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import rssData from "../../utils/rssData";
import styles from "../../styles/Episode.module.css";
import Player from "../../components/Player";
import Image from "next/image";
import Layout from "../../components/Layout";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const EpisodePage = ({ episode }: Props) => {
  if (!episode) return <h1>Episode not found</h1>;
  const cutSummary = episode.itunes.summary.split("\n");
  const trackNumber = episode.guid.split("tag:soundcloud,2010:tracks/")[1];
  const date = episode.pubDate?.split(" ") ?? "date and month";
  const cutTitle = episode.title.split("-");
  return (
    <Layout backgroundVariant="yellowStyle">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.headingWrapper}>
            <div className={styles.episodeArtOverlay}>
              <Image
                src={episode.itunes.image}
                alt="Episode art"
                width={280}
                height={280}
                className={styles.episodeArt}
              />
              <h2 className={styles.date}>{date[1] + " " + date[2]}</h2>
            </div>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                {cutTitle[1]}
                <br />
                {cutTitle[0]}
              </h1>

              <Player
                title={episode.title}
                link={episode.link}
                number={trackNumber}
              />
            </div>
          </div>
          <article className={styles.description}>
            {cutSummary.map((element, index) => {
              return (
                <p key={index}>
                  {element}
                  {}
                </p>
              );
            })}
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default EpisodePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const feed = await rssData();

  const paths = feed.items.map((element) => {
    return {
      params: {
        episodeId: element.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  let id = context.params?.episodeId as string;
  const feed = await rssData();

  const episode = feed.items.find((item) => item.slug === id);

  return {
    props: { episode }, // will be passed to the page component as props
    revalidate: 30,
  };
};
