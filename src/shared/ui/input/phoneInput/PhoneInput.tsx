
import { useState } from 'react';
import { PhoneInput as ReactInputPhone } from 'react-international-phone';
import type { InputProps } from '../Input';
import styles from "./PhoneInput.module.scss";
import { cn } from '@/shared/lib';

const PhoneInput = (props:InputProps) => {
        const [focus, setFocus] = useState<boolean>(false);
        const {
        className,
        value = '',
        disabled = false,
        rounded = false,
        Icon,
        ref,
        onChange,
        error=false,
        label,
        ...rest
    } = props;

    const handleChange = (phone:string) => {
            onChange?.(phone);
            console.log(phone)
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
            <ReactInputPhone
            defaultCountry='et'
            forceDialCode
            disableCountryGuess
                {...rest}
                inputProps={{...rest}}
                value={value}
                disabled={disabled}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                inputClassName={cn(styles.input,{
                     [styles.disabled]:disabled,
                     [styles.error]:error,   
                })}
                className={cn(styles.input_container, className,{
                [styles.rounded]: rounded,
                [styles.disabled]: disabled,
                [styles.focus]: focus,
                [styles.error]: error,
            })}
            />
    </div>

  )
}

export default PhoneInput