import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import headerImage from "../public/pink2.png";
import rssData from "../utils/rssData";
import EpisodeCard from "../components/EpisodeCard";
import EpisodeList from "../components/EpisodeList";
import Social from "../components/Social";
import Layout from "../components/Layout";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ feed }: Props) => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Reel Feminism</title>
          <meta
            name="description"
            content="A podcast about films through an intersectional feminist perspective"
          />
        </Head>
        <h1 className={styles.title}>Reel Feminism</h1>
        <h2 className={styles.subtitle}>A feminist film podcast</h2>
        <Social textVariant="white" />
        <EpisodeList>
          {feed.items.map((element, index) => {
            let id = element.guid ?? index.toString();
            return (
              <EpisodeCard
                key={element.guid}
                slug={element.slug ?? "not-found"}
                title={element.title ?? "Title not found"}
                guid={id}
                link={element.link}
                image={element.itunes.image}
                summary={element.itunes.summary}
              />
            );
          })}
        </EpisodeList>
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const feed = await rssData();
  return {
    props: { feed }, // will be passed to the page component as props
    revalidate: 30,
  };
}
