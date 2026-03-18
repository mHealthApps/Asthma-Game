import React from "react";

export default function InputField({ label, type, value, onChange }) {
  return (
    <div style={styles.container}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={styles.input}
        required
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
  },
};