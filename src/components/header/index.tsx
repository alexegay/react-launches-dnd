import React from "react";
import { Link } from "react-router-dom";
import { RocketOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <RocketOutlined className={styles.header__logo} />
      <h1 className={styles.header__title}>conquerors of mars</h1>
    </Link>
  </header>
);
