 import { LoginForm } from "@/features/login";
import styles from "./LoginPage.module.scss";
import { DynamicModuleLoader } from "@/shared/lib";
import { loginReducer } from "@/features/login";


const LogIn = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>
      <h1 className={styles.title}>Sign In</h1>
      <DynamicModuleLoader reducers={{loginForm:loginReducer}} removeAfterUnmount><LoginForm /></DynamicModuleLoader>
      
    </div>
    </div>
  )
}

export default LogIn