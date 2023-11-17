import React from "react";
import style from "./TrustGraph.module.css";
import trustImg from "../../assets/doro-home-img.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const TrustGraph = () => {
  return (
    <div id="trust-graph" className={`container ${style.whyContainer}`}>
      <div className={style.whyUs}>
        <div className={style.whyContent}>
          <h2>For Buyers: TrustGraph</h2>
          <ul>
            <li className={style.whyList}>
              <IoIosCheckmarkCircleOutline className={style.icon} />
              <span className={style.text}>
                <b>Harness the Power of Connections:</b>We analyze your network
                to know if any of your friends have made purchases from a
                particular merchant.
              </span>
            </li>
            <li className={style.whyList}>
              <IoIosCheckmarkCircleOutline className={style.icon} />
              <span className={style.text}>
                {" "}
                <b>Real-Time Insights:</b> Get an instant access to social
                endorsements and recommendations from your trusted network
              </span>
            </li>
            <li className={style.whyList}>
              <IoIosCheckmarkCircleOutline className={style.icon} />
              <span className={style.text}>
                <b>Fraud Prevention: </b> Identify & avoid risky transactions by
                relying on the experiences & recommendations of people you know
                & trust.
              </span>
            </li>

            <li className={style.whyList}>
              <IoIosCheckmarkCircleOutline className={style.icon} />
              <span className={style.text}>
                {" "}
                <b> Peace of Mind:</b> Shop with confidence, knowing that your
                purchases are backed by the collective wisdom of your social
                connections.
              </span>
            </li>
          </ul>
          <a href="#contact" className="btn btn-primary">
            Sign Up
          </a>
        </div>
        <div className={style.whyMe}>
          <div className={style.meImg}>
            <img src={trustImg} alt="why-choose-us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustGraph;
