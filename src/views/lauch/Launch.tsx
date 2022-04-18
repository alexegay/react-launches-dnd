import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "antd";
import { useAppSelector } from "../../store/reduxHooks";
import { getLaunchesState } from "../../store/selectors/launchSelectors";
import { ILaunchState } from "../../store/reducers/launchReducer";
import YoutubeEmbed from "../../components/youtube";
import styles from "./styles.module.scss";
import moment from "moment";
import { ArrowLeftOutlined, LinkOutlined } from "@ant-design/icons";

const Launch = () => {
  const params = useParams();

  const launches: ILaunchState = useAppSelector(getLaunchesState);
  const data = useMemo(() => launches.launches.find((launch) => launch.id === params.launchId.toString()), [launches]);

  return (
    <div className={styles.launch}>
      <Link to="/" className={styles.launch__back}>
        <ArrowLeftOutlined /> back to launches
      </Link>
      <YoutubeEmbed embedId={data.links.youtube_id} />
      <div className={styles.launch__title}>
        <h3 className={styles["launch__title--date"]}>{moment(data.date_local).format("LL")}</h3>
        <h2 className={styles["launch__title--name"]}>{data.name}</h2>
      </div>
      <p className={styles.launch__details}>{data.details}</p>
      <div className={styles.launch__links}>
        {data.links.article && (
          <a href={data.links.article} target="_blank" rel="noreferrer">
            <LinkOutlined />
            article
          </a>
        )}
        {data.links.wikipedia && (
          <a href={data.links.wikipedia} target="_blank" rel="noreferrer">
            <LinkOutlined />
            wiki
          </a>
        )}
      </div>
    </div>
  );
};

export default Launch;
