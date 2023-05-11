import React from "react";
import styles from "./button.module.css";

export default function AcceptBtn({ title, onClick }) {
  return (
    <div className={styles.main}>
      <button
        className={styles.btn}
        onClick={() => {
          onClick();
        }}
      >
        {title}
      </button>
    </div>
  );
}
