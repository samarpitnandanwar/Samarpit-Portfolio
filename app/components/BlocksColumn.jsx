// components/BlocksColumn.js
import React from "react";
import styles from "../css/BlocksColumn.module.css";

const BlocksColumn = ({ projectsCount, blogsCount, certificatesCount }) => {
  return (
    <div className={styles.blocksContainer}>
      <div className={styles.block}>
        <h2 className={styles.count}>{projectsCount}</h2>
        <p className={styles.label}>Projects</p>
      </div>
      <div className={styles.block}>
        <h2 className={styles.count}>{blogsCount}</h2>
        <p className={styles.label}>Blogs</p>
      </div>
      <div className={styles.block}>
        <h2 className={styles.count}>{certificatesCount}</h2>
        <p className={styles.label}>Certificates</p>
      </div>
    </div>
  );
};

export default BlocksColumn;
