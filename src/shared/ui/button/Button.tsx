import { cn } from "@/shared/lib";
import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.scss"

type buttonSize = "xs" | "sm" | "md" | "lg";
type buttonForm = "rounded" | "pill" | "circle";
type buttonTheme = "primary" | "secondary" | "tertiary" | "outline" | "ghost"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode,
  className?: string,  
  size?: buttonSize,
  form?: buttonForm,
  theme?: buttonTheme,
  disabled?: boolean
}
export const Button = (props: ButtonProps) => {
  const { children, className, size = "md", theme = "primary", form = "pill", disabled = false, ...rest } = props;
  
  return (
    <button 
      {...rest} 
      disabled={disabled} 
      className={cn(
        styles.button,
        className,
        styles[size],
        styles[form],
        styles[theme],
        {
          [styles.disabled]: disabled
        }
      )}>{children}
    </button>
  );
}