import { Link } from "react-router"
import styles from "./HomePage.module.scss"
import { useTheme } from "@/shared/config"
import { useTranslation } from "react-i18next";
import {AppIcon, Button,Input} from "@/shared/ui";
import Search from "@/shared/assets/icons/Search.svg?react"
import { useState } from "react";
import { Header } from "@/widgets/header";
const HomePage = () => {
  const {t,i18n}=useTranslation()
  const changeLanguage=()=>{
    i18n.changeLanguage(i18n.language==="en"?"de":"en")
  }
  return (
    <>
    <h1 className={styles.title}>{t("hello")}</h1>
    <Header />
    <Button theme='outline' onClick={changeLanguage}>{i18n.language}</Button>
    <Link to={'/login'}>Log In</Link>
    </>
  )
}
export default HomePage