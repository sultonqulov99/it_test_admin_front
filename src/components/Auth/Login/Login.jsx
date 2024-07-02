import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayoutContext } from "../../../Layouts/MainLayout";
import "./Login.css";

const Login = () => {
  const { API } = useContext(AppLayoutContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Telefon raqami:", phoneNumber);
    console.log("Parol:", password);
    axios
      .post(`${API}/api/admin/login`, {
        contact: phoneNumber,
        password: password,
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setIsError(error.response.data.massage);
      });
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
      >
        <h2>Login</h2>
        <span style={{ color: "red" }}>{isError}</span>
        <label>
          Telefon raqami:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Telefon raqamingizni kiriting"
            required
          />
        </label>
        <label>
          Parol:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parolingizni kiriting"
            required
          />
        </label>
        <button type="submit">Login</button>
        <button
          type="button"
          onClick={handleForgotPassword}
          style={{
            marginTop: "10px",
            background: "none",
            border: "none",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Parolni unutdingizmi?
        </button>
      </form>
    </div>
  );
};

export default Login;
