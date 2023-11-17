import React, { useState } from "react";
import style from "./Faq.module.css";

// const Accordion = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={style.accordionItem}>
//       <div className={style.accordionQuestion} onClick={toggleAccordion}>
//         {question}
//         <span className={`arrow ${isOpen ? "open" : ""}`}></span>
//       </div>
//       {isOpen && <div className={style.accordionAnswer}>{answer}</div>}
//     </div>
//   );
// };

// export default Accordion;

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`style.accordionItem ${isOpen ? "open" : ""}`}>
      <div className={style.accordionQuestion} onClick={toggleAccordion}>
        {question}
        <span className={style.toggleSign}>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className={style.accordionAnswer}>{answer}</div>}
    </div>
  );
};

export default Accordion;
