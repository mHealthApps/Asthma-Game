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

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);

      try {
        // API call
        const response = await axios.post("/api/token", {
          email: email,
          password: password,
        });
      
        const token = response.data.access_token;
        console.log("LOGIN RESPONSE:", response.data);

        if (!token) {
          throw new Error("No token returned");
        }
        
        saveToken(token);
        await fetchCompletion(token);

        console.log("LOGIN SUCCESS");
        navigate("/home");
      } catch(error) {
        console.error(error);
        alert("Login failed");
      }
    };

    const fetchCompletion = async (token) => {
      console.log("TOKEN:", token);

      try {
        const res = await axios.get("/api/completion", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const completionData = res.data;
        console.log("COMPLETION:", res.data);

        // 1. Define how many modules you have (match your ListGrid items length)
        const totalModules = 6; 
        let bitString = "";

        // 2. Build the bit-string
        for (let i = 0; i < totalModules; i++) {
          // Check if the server has a 'completed: true' record for this index
          // We match 'i' against the 'module_id' stored in your DB
          const isDone = completionData.some(
            (record) => Number(record.module_id) === i && record.completed === true
          );
          
          bitString += isDone ? "1" : "0";
        }

        // 3. Save to localStorage using the key ListGrid expects
        // If conditionTitle is "Asthma", the key is "asthmalist"
        localStorage.setItem("asthmaList", bitString);
        
        console.log("BIT-STRING GENERATED:", bitString);
        return bitString;
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