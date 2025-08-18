import { useTranslation } from "react-i18next";
import { useState } from "react";
import Logo from "@/shared/assets/icons/Logo.svg?react"
import MapPin from "@/shared/assets/icons/MapPin.svg?react"
import Search from "@/shared/assets/icons/Search.svg?react"
import Users from "@/shared/assets/icons/Users.svg?react"
import Circle from "@/shared/assets/icons/Circle.svg?react"
import German from "@/shared/assets/icons/German.svg?react"
import English from "@/shared/assets/icons/English.svg?react"

import styles from "./Header.module.scss"

import { AppIcon,Button,Input } from "@/shared/ui"
import { useTheme } from "@/shared/config"

export const Header = () => {
        const {i18n}=useTranslation();
        const {toggleTheme}=useTheme()
        const [searchValue, setSearchValue] = useState("");

        const toggleLanguage=()=>{
                i18n.changeLanguage(i18n.language==="en"?"de":"en")
        }
  return (
    <header className={styles.header}>
        <div className={styles.section}>
                <Logo className={styles.logo} />
                <Button theme="ghost">
                        <AppIcon Icon={MapPin} />
                        <span>1000 Addis Ababa</span>
                </Button>
        </div>
        <div className={styles.section}>
                <Input placeholder="Search By" 
                value={searchValue}
                onChange={setSearchValue}
                Icon={<AppIcon size={18} Icon={Search} theme="background"/>}
                />
        </div>
        <div className={styles.section}>
                <Button theme="secondary">Cart</Button>
                <Button theme="outline">
                        <AppIcon Icon={Users} />
                        <span>LogIn</span>
                </Button>
                <Button onClick={toggleTheme} theme="ghost">
                        <AppIcon Icon={Circle} filled />
                </Button>
                <Button 
                onClick={toggleLanguage} 
                theme="ghost"
                aria-label="Toggle language"
                >
                        {i18n.language === "en" ? (
                        <AppIcon Icon={English} aria-label="English" />
                        ) : (
                        <AppIcon Icon={German} aria-label="German" />
                        )}
                </Button>
        </div>
    </header>
  )
}

