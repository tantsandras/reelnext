import styles from "./Player.module.css";

interface Track {
  title: string;
  link?: string;
  number: string;
}

const Player = ({ title, link, number }: Track) => {
  return (
    <div className={styles.box}>
      <iframe
        width="100%"
        height="20"
        title={title}
        scrolling="no"
        frameBorder="no"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${number}&color=%23ff5500&inverse=false&auto_play=false&show_user=true`}
      ></iframe>
    </div>
  );
};

export default Player;
