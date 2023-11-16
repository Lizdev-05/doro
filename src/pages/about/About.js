import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div id="#about" className={`container ${style.aboutContainer}`}>
      <div className={style.aboutIntro}>
        <h2 id="">
          Establishing trust with buyers is essential for growing your business.
          That's where we come in.
        </h2>
        <p>
          At TrustGraph, we understand the importance of trust and security when
          it comes to online transactions. Our innovative platform is designed
          with two primary goals in mind:{" "}
          <p className={style.span}>
            Building trust for vendors and preventing fraud for buyers.
          </p>
        </p>
      </div>
      <div className={style.meContent}>
        <div className={style.aboutCards}>
          <article className={style.aboutCard}>
            <h3>Over</h3>
            <h5>100k</h5>
            <small>Merchants Trust Us</small>
          </article>

          <article className={style.aboutCard}>
            <h3>Processing</h3>
            <h5>1 Million +</h5>
            <small>Transactions Annually</small>
          </article>
          <article className={style.aboutCard}>
            <h3>Built</h3>
            <h5>100k</h5>
            <small>Trust Networks</small>
          </article>
          <article className={style.aboutCard}>
            <h3>Rated</h3>
            <h5>4.9 / 5 Stars</h5>
            <small>By Our Users</small>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
