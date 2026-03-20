import React from "react";

export default function Button({ text }) {
  return (
    <button type="submit" className="login-button">
      {text}
    </button>
  );
}