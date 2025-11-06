// components/GithubCalendar.js
import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "../css/GithubCalendar.module.css"

const GithubCalendar = ({ username }) => {
  return (
    <div className={styles.githubCalendarContainer}>
      <h2 className="text-pink-500">
        <span>GitHub Contributions</span>
      </h2>
      <GitHubCalendar username={username} colorScheme="light" />
    </div>
  );
};

export default GithubCalendar;