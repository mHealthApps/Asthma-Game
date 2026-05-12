import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { saveToken } = useAuth();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);

      // API call
      axios.post("http://127.0.0.1:5000/api/token", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.access_token;
        console.log("LOGIN RESPONSE:", response.data);

        if (!token) {
          throw new Error("No token returned");
        }
        
        saveToken(token);
        fetchCompletion(token);

        console.log("LOGIN SUCCESS");
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        alert("Login failed");
      });
    };

    const fetchCompletion = async (token) => {
      console.log("TOKEN:", token);

      try {
        const res = await axios.get("http://127.0.0.1:5000/api/completion", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        
        console.log("COMPLETION:", res.data);

        // optional: store globally later (context)
        return res.data;
      } catch (err) {
        console.error("fetchCompletion error:", err);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="login-form">
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

export default LoginForm;