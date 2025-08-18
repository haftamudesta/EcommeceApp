import type {FunctionComponent,SVGProps} from "react";
import styles from "./AppIcon.module.scss";
import { cn } from "@/shared/lib";

type appIconTheme="clean"|"background"

interface AppIconProps{
        Icon:FunctionComponent<SVGProps<SVGSVGElement>>,
        theme?:appIconTheme,
        size?:number,
        className?:string,
        filled?:boolean,
}
export const AppIcon = (props:AppIconProps) => {
        const {Icon,theme="clean",size=24,className}=props;

        const appIcon= <Icon
        width={size}
        height={size}
        className={cn(styles.icon,className)} />

        if(theme==="background"){
             return   <div className={styles.wrapper}>{appIcon}</div>
        }
  return (
        appIcon
  )
}

