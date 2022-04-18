import React from "react";
import { Skeleton } from "antd";
import styles from "./style.module.scss";

export const CardSkeleton = () => (
  <div className={styles.card}>
    <Skeleton paragraph={{ rows: 1, width: 120 }} title={{ width: 60 }} />
  </div>
);
