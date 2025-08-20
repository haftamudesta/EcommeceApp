import { useTranslation } from "react-i18next"
import PageError from "@/shared/assets/icons/PageError.svg?react";
import styles from "./PageError.module.scss"
import { Button } from "@/shared/ui";



export  const PageErrors = () => {
        const {t}=useTranslation()

        const handleReload=()=>{
          location.reload()
        }
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
                <PageError className={styles.icon}/>
                <h3 className={styles.title}>{t("pageError.title")}</h3>
                <p className={styles.description}>{t("pageError.description")}</p>
                <Button 
                theme="primary" form="rounded" 
                className={styles.button}
                onClick={handleReload}
                >
                  {t("pageError.reload")}
                </Button>
        </div>
    </div>
  )
}

