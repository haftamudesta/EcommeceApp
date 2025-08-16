import { Link } from "react-router"
import styles from "./HomePage.module.scss"

const HomePage = () => {
  return (
    <>
    <h1 className={styles.title}>Home</h1>
    <Link to={'/login'}>Log In</Link>
    </>
  )
}

export default HomePage