import { Link } from "react-router"
import styles from "./HomePage.module.scss"
import { useTheme } from "@/shared/config"
import { useTranslation } from "react-i18next";
import {Button,Input} from "@/shared/ui"

const HomePage = () => {
  const {toggleTheme}=useTheme();
  const {t,i18n}=useTranslation()
  const changeLanguage=()=>{
    i18n.changeLanguage(i18n.language==="en"?"de":"en")
  }
  return (
    <>
    <h1 className={styles.title}>{t("hello")}</h1>
    <Input placeholder="Search..." />
    <Button  onClick={toggleTheme}>theme</Button>
    <Button theme='outline' onClick={changeLanguage}>{i18n.language}</Button>
    <Link to={'/login'}>Log In</Link>
    </>
  )
}
export default HomePage