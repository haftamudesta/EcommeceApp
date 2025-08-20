import { useTranslation } from "react-i18next"; 

import styles from "./PageNotFound.module.scss";
import NotFound from "@/shared/assets/icons/NotFound.svg?react";
import { Button } from "@/shared/ui";
import { useNavigate } from "react-router";
import { routePaths } from "@/shared/config";


const PageNotFound = () => {
        const {t}=useTranslation();
        const navigate=useNavigate()

        const handleReload=()=>{
                if(window.history.length<1){
                        navigate(routePaths.home)
                }
                navigate(-1)
        }
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
                <NotFound className={styles.icon}/>
                <h3 className={styles.title}>{t("notFound.title")}</h3>
                <p className={styles.description}>{t("notFound.description")}</p>
                <Button 
                theme="primary" form="rounded" 
                className={styles.button}
                onClick={handleReload}
                >
                  {t("notFound.goBack")}
                </Button>
        </div>
    </div>
  )
}

export default PageNotFound