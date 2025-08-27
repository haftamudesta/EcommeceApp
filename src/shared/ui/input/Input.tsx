import { cn } from "@/shared/lib";
import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode, type Ref } from "react";
import styles from "./Input.module.scss";
import { Button } from "../button/Button";
import Hide from "@/shared/assets/icons/Hide.svg?react";
import Show from "@/shared/assets/icons/Show.svg?react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type'>;

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    disabled?: boolean;
    rounded?: boolean;
    Icon?: ReactNode;
    onChange?: (value: string) => void;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
    error?:boolean, 
    label:string,
    ref?:Ref<HTMLInputElement>
}

export const Input = (props: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    
    const {
        className,
        value = '',
        disabled = false,
        rounded = false,
        type = 'text',
        Icon,
        ref,
        onChange,
        error=false,
        label,
        ...rest
    } = props;
 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        console.log(e.target.value)
    };

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        setFocus(false);
    };

    return (
        <div>
        {label && (
            <label className={cn(styles.label,{[styles.error]:error})}>{label}</label>
        )}
        <div className={cn(
            styles.inputContainer,
            className,
            {
                [styles.rounded]: rounded,
                [styles.disabled]: disabled,
                [styles.focus]: focus,
                [styles.error]: error,
            }
        )}>
            {Icon && <span className={styles.icon}>{Icon}</span>}
            <input
                {...rest}
                value={value}
                disabled={disabled}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type={showPassword && type === "password" ? "text" : type}
                className={cn(styles.input, {
                    [styles.disabled]: disabled,
                    [styles.error]: error,
                })}
            />
            {type === 'password' && (
                <Button
                    theme="ghost"
                    type="button"
                    className={styles.toggleVisibility}
                    onClick={toggleShowPassword}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <Hide /> : <Show />}
                </Button>
            )}
        </div>
        </div>
    );
};