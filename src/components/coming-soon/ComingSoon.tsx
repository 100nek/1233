import styles from "./ComingSoon.module.scss";
import { useTranslation } from "react-i18next";

const ComingSoon = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.coming_soon}>
      <h2>{t("COMING SOON...")}</h2>
    </section>
  )
}

export default ComingSoon;