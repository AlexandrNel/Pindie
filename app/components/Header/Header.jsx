"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { endpoints } from "@/app/api/config";
import { getMe, getJWT, removeJWT, isResponseOk } from "@/app/api/api-utils";

export const Header = () => {
  const pathname = usePathname();
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  function openPopup() {
    setPopupIsOpened(true);
  }
  function closePopup() {
    setPopupIsOpened(false);
  }
  useEffect(() => {
    const jwt = getJWT();
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        if (isResponseOk(userData)) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          removeJWT();
        }
      });
    }
  });
  const handleLogout = () =>{
    removeJWT()
    setIsAuthorized(false)
  }
  return (
    <header className={Styles.header}>
      {pathname == "/" ? (
        <div className="logo">
          <img
            className="logo__image"
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </div>
      ) : (
        <Link href="/" className="logo">
          <img
            className="logo__image"
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </Link>
      )}

      <nav className={Styles.menu}>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <Link
              href="/new"
              className={`${Styles.link} ${
                pathname === "/new" ? Styles["link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/popular"
              className={`${Styles.link} ${
                pathname === "/popular" ? Styles["link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/shooters"
              className={`${Styles.link} ${
                pathname === "/shooters" ? Styles["link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/runners"
              className={`${Styles.link} ${
                pathname === "/runners" ? Styles["link_active"] : ""
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/pixel-games"
              className={`${Styles.link} ${
                pathname === "/pixel-games" ? Styles["link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/tds"
              className={`${Styles.link} ${
                pathname === "/tds" ? Styles["link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className="auth">
          {isAuthorized ? (
            <button className="auth__button" onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button className="auth__button" onClick={openPopup}>
              Войти
            </button>
          )}
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} closePopup={closePopup} />
      <Popup isOpened={popupIsOpened} closePopup={closePopup}>
        <AuthForm close={closePopup} setAuth={setIsAuthorized} />
      </Popup>
    </header>
  );
};
