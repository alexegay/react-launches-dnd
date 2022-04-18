import React, { FC } from "react";
import styles from "./styles.module.scss";

interface IYoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: FC<IYoutubeEmbedProps> = ({ embedId }) => (
  <div className={styles["video-responsive"]}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
