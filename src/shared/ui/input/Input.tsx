import { cn } from "@/shared/lib";
import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Input.module.scss";
import { Button } from "../button/Button";
import Hide from "@/shared/assets/icons/Hide.svg?react";
import Show from "@/shared/assets/icons/Show.svg?react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    disabled?: boolean;
    rounded?: boolean;
    Icon?: ReactNode;
    onChange?: (value: string) => void;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'; 
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
        onChange,
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
        <div className={cn(
            styles.inputContainer,
            className,
            {
                [styles.rounded]: rounded,
                [styles.disabled]: disabled,
                [styles.focus]: focus,
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
    );
};