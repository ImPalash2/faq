import React, { useState } from "react";
import "./faq.css";
import { questionAnswers } from "./data/faqData";
const Faq = () => {
  const [activeAns, setActiveAns] = useState(0);
  const handleClick = (i) => {
    if (activeAns === i) {
      setActiveAns(undefined);
    } else {
      setActiveAns(i);
    }
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Frequenly Asked Question</h1>
        </div>
        <main className="content">
          {questionAnswers.map((data, index) => {
            return (
              <div className="card" key={index}>
                <div className="question">
                  <h2>Q. {data.question}</h2>
                  <div className="icon">
                    {index === activeAns ? (
                      <i
                        class="fa-solid fa-angle-up"
                        onClick={() => handleClick(index)}
                      />
                    ) : (
                      <i
                        class="fa-solid fa-angle-down"
                        onClick={() => handleClick(index)}
                      />
                    )}
                  </div>
                </div>
                <div className="answer">
                  <p className={index === activeAns ? "showAnswer" : ""}>
                    {data.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Faq;
