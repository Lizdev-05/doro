import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`container ${style.aboutContainer}`}>
      <div className={style.whyUs}>
        <div className={style.whyContent}>
          <h1>DORO</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            quasi quis, nesciunt neque tenetur a velit et repellat ipsa nemo?
          </p>
        </div>

        <div className={style.whyMe}>
          <h1>Contact Us</h1>
          <p>
            <span>Address:</span> Ambassadorial Enclave, 20 Aluguntugui St,
            Accra, Ghana
          </p>

          <p>
            <span>Email:</span>
            <a href="#">elizabeth.ojesanmi@meltwater.org</a>
          </p>

          <p>
            <span>Phone:</span>
            <a href="#">tel:+234-806-704-8315</a>
          </p>

          <p>
            <span>Website:</span>
            <a href="#">Doro</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
