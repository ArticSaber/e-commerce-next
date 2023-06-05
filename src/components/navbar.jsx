import React from "react";
import styles from "../styles/navbar.module.css";
const navbar = () => {
  return (
    <div className={styles.app}>
      <div className={styles["nav-bar"]}>
        <div className={styles.rightdiv}>kart profile</div>
      </div>
    </div>
  );
};

export default navbar;
