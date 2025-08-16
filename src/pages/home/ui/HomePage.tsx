import { Link } from "react-router"
import styles from "./HomePage.module.scss"
import { useTheme } from "@/shared/config"
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {toggleTheme}=useTheme();
  const {t,i18n}=useTranslation()
  const changeLanguage=()=>{
    i18n.changeLanguage(i18n.language==="en"?"de":"en")
  }
  return (
    <>
    <h1 className={styles.title}>{t("hello")}</h1>
    <button onClick={toggleTheme}>theme</button>
    <button onClick={changeLanguage}>{i18n.language}</button>
    <Link to={'/login'}>Log In</Link>
    </>
  )
}

export default HomePage