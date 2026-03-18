import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);

      // Add API call here later
    };

    return (
      <form onSubmit={handleSubmit} style={styles.form}>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button text="Login" />
    </form>
    );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
};

export default LoginForm;