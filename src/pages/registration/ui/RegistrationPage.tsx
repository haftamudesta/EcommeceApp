
import { RegistrationForm } from "@/features/regiseter";
import styles from "./RegistrationPage.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>
      <h1 className={styles.title}>Sign Up</h1>
      <RegistrationForm />
    </div>
    </div>
  )
}

export default RegisterPage