import React from "react";
import style from "./TrustProfile.module.css";
import whyImg from "../../assets/doro-home-img.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const TrustProfile = () => {
  return (
    <div id="trust-profile">
      <div id="why-us" className={`container ${style.whyContainer}`}>
        <div className={style.whyIntro}>
          <h2 id="">Why our users trust us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor
            sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id.
            Urna posuere consequat velit vulputate faucibus pretium arcu
            accumsan.
          </p>
        </div>
        <div className={style.whyUs}>
          <div className={style.whyMe}>
            <div className={style.meImg}>
              <img src={whyImg} alt="why-choose-us" />
            </div>
          </div>
          <div className={style.whyContent}>
            <h2>For Merchants: TrustProfile</h2>
            <ul>
              <li className={style.whyList}>
                <IoIosCheckmarkCircleOutline className={style.icon} />
                <span className={style.text}>
                  <b> Stand Out</b>: Differentiate yourself from the competition
                  with a complete and transparent trust profile.
                </span>
              </li>
              <li className={style.whyList}>
                <IoIosCheckmarkCircleOutline className={style.icon} />
                <span className={style.text}>
                  {" "}
                  <b>Build Credibility:</b> Highlight positive reviews, ratings,
                  and testimonials from satisfied customers.
                </span>
              </li>
              <li className={style.whyList}>
                <IoIosCheckmarkCircleOutline className={style.icon} />
                <span className={style.text}>
                  <b>Demonstrate Integrity: </b> Showcase your business history,
                  certifications, and ethical practices.
                </span>
              </li>

              <li className={style.whyList}>
                <IoIosCheckmarkCircleOutline className={style.icon} />
                <span className={style.text}>
                  {" "}
                  <b>Boost Confidence:</b> Assure buyers that you are a
                  trustworthy seller, leading to increased sales
                </span>
              </li>
            </ul>
            <a href="#contact" className="btn btn-primary">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustProfile;
