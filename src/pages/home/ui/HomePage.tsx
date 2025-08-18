import { Link } from "react-router"
import styles from "./HomePage.module.scss"
import { useTheme } from "@/shared/config"
import { useTranslation } from "react-i18next";
import {Button,Input} from "@/shared/ui";
import Search from "@/shared/assets/icons/Search.svg?react"
import { useState } from "react";

const HomePage = () => {
  const {toggleTheme}=useTheme();
  const {t,i18n}=useTranslation()
  const [searchValue, setSearchValue] = useState("");
  const changeLanguage=()=>{
    i18n.changeLanguage(i18n.language==="en"?"de":"en")
  }
  return (
    <>
    <h1 className={styles.title}>{t("hello")}</h1>
    <Input
        type="text"
        rounded
        value={searchValue}
        onChange={setSearchValue}
        placeholder={t("Search")}
        Icon={<Search aria-hidden="true" />}
        aria-label={t("search.label")}
      />
    <Button  onClick={toggleTheme}>theme</Button>
    <Button theme='outline' onClick={changeLanguage}>{i18n.language}</Button>
    <Link to={'/login'}>Log In</Link>
    </>
  )
}
export default HomePage