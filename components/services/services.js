import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import AirplayIcon from "@mui/icons-material/Airplay";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Box } from "@mui/material";

const services = () => {
  return (
    <div className={styles.grid}>
      <Box className={styles.card}>
        <a href="https://nextjs.org/docs">
          <AirplayIcon color="success" fontSize="large" />
          <h2>Website Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, molestias dignissimos?
          </p>
        </a>
      </Box>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <TerminalIcon />
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        <h2>Learn &rarr;</h2>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/canary/examples"
        className={styles.card}
      >
        <h2>Examples &rarr;</h2>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <h2>Deploy &rarr;</h2>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
    </div>
  );
};

export default services;
