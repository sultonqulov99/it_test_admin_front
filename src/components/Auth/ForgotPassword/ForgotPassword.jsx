// src/ForgotPassword.js
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayoutContext } from "../../../Layouts/MainLayout";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const { API } = useContext(AppLayoutContext);
  const [phone, setPhone] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState("");
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showPasswordFields) {
      console.log("Email yoki telefon raqami:", phone);
      setShowPasswordFields(true);
    } else {
      if (newPassword !== confirmPassword) {
        alert("Parollar mos kelmadi!");
      } else {
        axios
          .put(
            `${API}/api/admin-update`,
            {
              contact: phone,
              password: newPassword,
              r_password: confirmPassword,
            },
            {
              headers: {
                token: token,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              navigate("/login");
            }
          })
          .catch((error) => {
            console.log(error);
            setIsError(error.response.data.massage);
          });
      }
    }
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
        <h2>Parolni tiklash</h2>
        <span style={{ color: "red" }}>{isError}</span>
        <label>
          Telefon raqami:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefon raqamingizni kiriting"
            required
            disabled={showPasswordFields}
          />
        </label>
        {showPasswordFields && (
          <>
            <label>
              Yangi parol:
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Yangi parolingizni kiriting"
                required
              />
            </label>
            <label>
              Parolni qayta kiriting:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Parolni qayta kiriting"
                required
              />
            </label>
          </>
        )}
        <button type="submit">
          {showPasswordFields ? "Parolni tasdiqlash" : "Yuborish"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
