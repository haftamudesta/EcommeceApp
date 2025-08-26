import { createContext, useContext, useState, type ReactNode } from "react";
import styles from "./Tabs.module.scss";
import { Button } from "../button/Button";
import { cn } from "@/shared/lib";

interface TabContextType{
        activeTab:string,
        handleChangeActiveTab:(tab:string)=>void
}

interface TabsProbs{
        defaultValue:string,
        children:ReactNode,
        onChange?:()=>void
}

const TabContext=createContext<TabContextType | undefined>(undefined)

export const Tabs=(props:TabsProbs)=>{
        const {children,defaultValue,onChange}=props;
        const [activeTab,setActiveTab]=useState(defaultValue);
        
        const handleChangeActiveTab=(tab:string)=>{
               setActiveTab(tab);
               if(onChange){
                onChange();
               }
        }
        return(
                <TabContext.Provider
                value={{activeTab,handleChangeActiveTab}}
                >
                        <div>{children}</div>
                </TabContext.Provider>
        )
}

interface TabListProps{
        children:ReactNode,
}

const TabList=({ children }:TabListProps)=>{
        return(
                <div className={styles.list}>
                        {children}
                </div>
        )
}

interface TabTriggerProps{
        value:string,
        children:ReactNode,
}

const TabTrigger = ({ children, value }: TabTriggerProps) => {
  const context = useContext(TabContext);
  if (!context) throw new Error("TabTrigger must be within Tabs");

  const isActive = context.activeTab === value;

  const handleClick = () => {
    context.handleChangeActiveTab(value);
  };

  return (
    <Button
      type="button"
      theme={isActive ? "outline" : "tertiary"}
      form="rounded"
      onClick={handleClick}
      className={cn(styles.trigger, { [styles.active]: isActive })}
    >
      {children}
    </Button>
  );
};

interface TabContentPrps{
        value:string,
        children:ReactNode,
}

const TabContent=({value,children}:TabContentPrps)=>{

        const context=useContext(TabContext);
        
        if(!context) throw new Error("Tab ContentPrps must be within tabs")
        const isActive=context.activeTab=value;
        if(!isActive) return null;
        return(
                <div className={styles.content}
                >
                        {children}
                </div>
        )
}

Tabs.List=TabList;
Tabs.Content=TabContent;
Tabs.Tirgger=TabTrigger;
