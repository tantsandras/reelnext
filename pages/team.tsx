import styles from "../styles/Team.module.css";
import Image from "next/image";
import JoImage from "../public/Jo.jpeg";
import AmanImage from "../public/Aman.jpeg";
import KarineImage from "../public/Karine.jpeg";
import LeeImage from "../public/Untitled.png";
import HedvigImage from "../public/Hedvig.jpeg";
import Layout from "../components/Layout";

const Team = () => {
  return (
    <Layout backgroundVariant="yellowStyle">
      <div className={styles.container}>
        <h1 className={styles.title}>Team</h1>
        <h2 className={styles.subHeading}>Meet the cast of Reel Feminism</h2>
        <section className={styles.grid}>
          <div className={styles.card}>
            <Image
              src={JoImage}
              width={280}
              height={280}
              className={styles.teamImage}
              alt="An illustration of Jo on a pink background"
            />
            <article className={styles.textBox}>
              <h3>Jo</h3>
              <p>
                Jo is an agender hufflepuff who enjoys vegan food and getting
                caught in the rain (because sunshine scares #gothbaes, everybody
                knows that).
              </p>
            </article>
          </div>
          <div className={styles.card}>
            <Image
              src={AmanImage}
              width={280}
              height={280}
              className={styles.teamImage}
              alt="Aman dressed to the nines at a party"
            />
            <article className={styles.textBox}>
              <h3>Aman</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </article>
          </div>
          <div className={styles.card}>
            <Image
              src={KarineImage}
              width={280}
              height={280}
              className={styles.teamImage}
              alt="Karine looking stylish"
            />
            <article className={styles.textBox}>
              <h3>Karine</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </article>
          </div>
          <div className={styles.card}>
            <Image
              src={LeeImage}
              width={280}
              height={280}
              className={styles.teamImage}
              alt="An anonymous profile on a pink background"
            />
            <article className={styles.textBox}>
              <h3>Lee</h3>
              <p>
                Lee is a victim of the international feminist agenda, and he is
                here against his will. He makes the art and does the editing.
                #notallmen?
              </p>
            </article>
          </div>
          <div className={styles.card}>
            <Image
              src="https://i1.sndcdn.com/avatars-A0yZyUqOVcxtfqKg-0jZz4Q-t500x500.jpg"
              width={280}
              height={280}
              className={styles.teamImage}
              alt="Team member"
            />
            <article className={styles.textBox}>
              <h3>Gina</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </article>
          </div>
          <div className={styles.card}>
            <Image
              src={HedvigImage}
              width={280}
              height={280}
              className={styles.teamImage}
              alt="Hedvig looking happy and windswept"
            />
            <article className={styles.textBox}>
              <h3>Hedvig</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </article>
          </div>
          <div className={styles.card}>
            <Image
              src="https://i1.sndcdn.com/avatars-A0yZyUqOVcxtfqKg-0jZz4Q-t500x500.jpg"
              width={280}
              height={280}
              className={styles.teamImage}
              alt="Team member"
            />
            <article className={styles.textBox}>
              <h3>Sandra</h3>
              <p>
                Sandra works in the shadows. Like a creepy stalker she hangs
                about in the outskirts of the podcast. Her favourite films
                include Die Hard, Rush Hour and Underworld (like the uncultured
                pleb she is). #VHSbargainbin
              </p>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;
