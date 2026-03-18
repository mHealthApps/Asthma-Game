import React from "react";

export default function Button({ text }) {
  return (
    <button type="submit" style={styles.button}>
      {text}
    </button>
  );
}

const styles = {
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};