import React from "react";
import Accordion from "./Accordion";
import whyImg from "../../assets/doro-home-img.svg";
import style from "./Faq.module.css";

const Faq = () => {
  return (
    <div id="#faq" className={`container ${style.whyContainer}`}>
      <div className={style.whyUs}>
        <Accordion
          question="Can you provide assistance with integrating your payment solution into my online store or website?"
          answer="Absolutely! We offer comprehensive integration support to make it easy for you to add our payment solution to your online store or website. Whether you're using a popular e-commerce platform or have a custom-built website, we have solutions to fit your needs."
        />
        <Accordion
          question="Can you provide assistance with integrating your payment solution into my online store or website?"
          answer="Absolutely! We offer comprehensive integration support to make it easy for you to add our payment solution to your online store or website. Whether you're using a popular e-commerce platform or have a custom-built website, we have solutions to fit your needs."
        />
        <Accordion
          question="Can you provide assistance with integrating your payment solution into my online store or website?"
          answer="Absolutely! We offer comprehensive integration support to make it easy for you to add our payment solution to your online store or website. Whether you're using a popular e-commerce platform or have a custom-built website, we have solutions to fit your needs."
        />
        <Accordion
          question="Can you provide assistance with integrating your payment solution into my online store or website?"
          answer="Absolutely! We offer comprehensive integration support to make it easy for you to add our payment solution to your online store or website. Whether you're using a popular e-commerce platform or have a custom-built website, we have solutions to fit your needs."
        />
      </div>
      <div className={style.whyMe}>
        <img src={whyImg} alt="" />
      </div>
    </div>
  );
};

export default Faq;
