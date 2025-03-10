import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Taief Hilali</h1>
        <p className={styles.description}>
        I'm a Software Engineer and Full-Stack Developer with 1 year of experience building dynamic and scalable web applications using React.js and Node.js(MERN STACK). I specialize in crafting intuitive user interfaces, optimizing backend performance, and creating seamless integrations. Let’s connect and bring great ideas to life! 🚀
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/taief.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
