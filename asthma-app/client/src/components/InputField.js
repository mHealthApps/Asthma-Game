import React from "react";

export default function InputField({ label, type, value, onChange }) {
  return (
    <div style={styles.container} className="input-field-container">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className="input-field"
      />
    </div>
  );
}