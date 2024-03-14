import Styles from "./Login.module.css";
import { AuthForm } from "../components/AuthForm/AuthForm";

export default function Login() {
  return (
    <main className={`main ${Styles['main-inner']}`}>
      <div className={Styles["form"]}>
        <AuthForm />
        </div>
      </main>
  );
}
