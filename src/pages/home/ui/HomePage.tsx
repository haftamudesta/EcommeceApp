import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import {Spinner} from "@/shared/ui";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
       <Header />
      <main className={styles.content}>
        <Spinner />
        <Link to={'/login'}>Log In</Link>
      </main>
      <Footer />
    </div>
  )
}
export default HomePage