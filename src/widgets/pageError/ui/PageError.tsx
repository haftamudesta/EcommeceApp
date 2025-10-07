import { useTranslation } from "react-i18next"
import PageError from "@/shared/assets/icons/PageError.svg?react";
import styles from "./PageError.module.scss"
import { Button } from "@/shared/ui";

interface PageErrorProps {
  error?: string;
}



export  const PageErrors = ({ error }: PageErrorProps) => {
  const { t } = useTranslation();

  const handleReloadClick = () => {
    location.reload();
  };
  const description = error ?? t("pageError.description");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PageError className={styles.icon} />
        <h3 className={styles.title}>{t("pageError.title")}</h3>
        <p className={styles.description}>{description}</p>
        <Button
          onClick={handleReloadClick}
          theme="primary"
          form="rounded"
          className={styles.button}
        >
          {t("pageError.reload")}
        </Button>
      </div>
    </div>
  );
}

