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
        <Tabs defaultValue="1">
          <Tabs.List>
            <Tabs.Tirgger value="1">1</Tabs.Tirgger>
            <Tabs.Tirgger value="2">2</Tabs.Tirgger>
          </Tabs.List>
          <Tabs.Content value="1">1</Tabs.Content>
          <Tabs.Content value="2">2</Tabs.Content>
        </Tabs>
        <Link to={'/login'}>Log In</Link>
        <Button onClick={()=>setError(true)}>Click</Button>
      </main>
      <Footer />
    </div>
  )
}
export default HomePage