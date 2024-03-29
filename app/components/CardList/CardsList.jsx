import Link from "next/link";
import Styles from "./CardsList.module.css";
import { Card } from "../Card/Card";


export const CardsList = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles.title} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>
        {props.data.map((item) => {
          return (
            <li className={Styles["cards-list__item"]} key={item.id}>
              <Link
                href={`/games/${item.id}`}
                className={Styles.link}
              >
                <Card 
                {...item}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );

};
