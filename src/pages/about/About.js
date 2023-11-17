import React from "react";
import style from "./About.module.css";
import homeImg from "../../assets/doro-home-img.svg";

const About = () => {
  return (
    <section id="about">
      <div className={`container ${style.aboutContainer}`}>
        <div className={style.meContent}>
          <h1>Building Trust, Preventing Fraud</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            quasi quis, nesciunt neque tenetur a velit et repellat ipsa nemo?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        <div className={style.aboutMe}>
          <div className={style.meImg}>
            <img src={homeImg} alt="Home image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
