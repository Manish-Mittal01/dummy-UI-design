import React from "react";
import styles from "./card.module.css";

export default function CaptchBox() {
  return (
    <div className={styles.main}>
      <div style={{ display: "flex" }}>
        <input type="checkbox" className={styles.checkbox} />
        <p style={{ marginLeft: 8 }}>I'm not a robot</p>
      </div>
      <div className={styles.captchaBox}>
        <img src="/recaptcha.png" width={35} />
        <p>Privacy - term</p>
      </div>
    </div>
  );
}
