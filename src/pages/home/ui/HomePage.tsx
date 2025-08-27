import { Link } from "react-router";
import {Button, Spinner} from "@/shared/ui";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { Tabs } from "@/shared/ui";


const HomePage = () => {
  const [error,setError]=useState<boolean>(false);
  useEffect(()=>{
    if(error) throw new Error()
  },[error])
  return (
    <div className={styles.pageWrapper}>
       <Header />
      <main className={styles.content}>
        <Spinner />
        <Link to={'/login'}>Log In</Link>
        <Button onClick={()=>setError(true)}>Click</Button>
      </main>
      <Footer />
    </div>
  )
}
export default HomePage