import React from "react";
import styles from "./textField.module.css";

export default function TextField({
  value,
  placeholder,
  onChange,
  inputStyle,
  type = "text",
}) {
  return (
    <div className={styles.main}>
      <input
        style={inputStyle}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
