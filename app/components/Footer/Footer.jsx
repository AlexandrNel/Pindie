'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import Styles from "./Footer.module.css";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={Styles.footer}>
      {pathname === "/" ? (
        <div className={Styles.logo}>
          <span className={Styles["logo-name"]}>pindie</span>
          <span className="footer__logo-copy">, XXI век</span>
        </div>
      ) : (
        <Link href="/" className={Styles.logo}>
          <span className={Styles["logo-name"]}>pindie</span>
          <span className="footer__logo-copy">, XXI век</span>
        </Link>
      )}
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`button ${Styles["social-list__link"]}`}>
            YT
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`button ${Styles["social-list__link"]}`}>
            ВК
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`button ${Styles["social-list__link"]}`}>
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};
