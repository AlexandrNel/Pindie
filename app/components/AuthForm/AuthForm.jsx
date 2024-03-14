'use client'

import { useEffect, useState } from "react";
import Styles from "./AuthForm.module.css";
import { authorize } from "@/app/data/data-utils";
import { endpoints } from "@/app/api/config";
import { getMe, setJWT, isResponseOk } from "@/app/api/api-utils";

export const AuthForm = (props) => {
  const [authData, setAuthData] = useState({ identifier: "", password: "" });
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState({ status: null, text: null });
  const handleInput = (e) => {
    const newAuthData = authData;
    newAuthData[e.target.name] = e.target.value;
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await authorize(endpoints.auth, authData);
    if (isResponseOk(userData)) {
      await getMe(endpoints.me, userData.jwt)
      setUserData(userData);
      setJWT(userData.jwt)
      props.setAuth(true);
      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };
  useEffect(() => {
    let timer; 
    if (userData) {
      timer = setTimeout(() => {
        props.close();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [userData]);
  return (
    <form onSubmit={handleSubmit} className={Styles["form"]}>
      <h2 className={Styles["form__title"]}>Авторизация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Email</span>
          <input
            onInput={handleInput}
            className={Styles["form__field-input"]}
            type="email"
            placeholder="hello@world.com"
            name="identifier"
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Пароль</span>
          <input
            onInput={handleInput}
            className={Styles["form__field-input"]}
            type="password"
            placeholder="***********"
            name="password"
          />
        </label>
      </div>

      {message.status && (
        <p className={Styles["form__message"]}>{message.text}</p>
      )}

      <div className={Styles["form__actions"]}>
        <button className={Styles["form__reset"]} type="reset">
          Очистить
        </button>
        <button className={Styles["form__submit"]} type="submit">
          Войти
        </button>
      </div>
    </form>
  );
};
