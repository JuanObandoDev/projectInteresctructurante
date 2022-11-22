import { useState } from "react";
import styles from "../styles/Question.module.css";

export default function Question({ _id, question, nextQuestion, user }) {
  const [answer, setAnswer] = useState("");
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/answer/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: {
          questionId: _id,
          userId: user,
          answer: answer,
        },
      }),
    });
    nextQuestion();
    setAnswer("");
  };

  return (
    <div className={styles.grid1}>
      <h1>{question}</h1>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <input
          className={styles.input1}
          type="text"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <button className={styles.button1}>send</button>
      </form>
    </div>
  );
}
