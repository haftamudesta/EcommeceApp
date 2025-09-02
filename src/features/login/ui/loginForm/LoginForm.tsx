import { Link, useNavigate } from 'react-router';
import 'react-international-phone/style.css';

import styles from "./LoginForm.module.scss";
import { AppIcon, Button, Input, PhoneInput, Tabs } from '@/shared/ui';
import { AuthMethods, routePaths } from '@/shared/config';
import type { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectLoginEmail } from '../../model/selectors/selectLoginEmail/SelectLoginEmail';
import { selectLoginPassword } from '../../model/selectors/SelectLoginPassword/SelectLoginPassword';
import { selectLoginPhone } from '../../model/selectors/selectLoginPhone/SelectLoginPhone';
import { selectLoginMethod } from '../../model/selectors/selectLoginMethod/SelectLoginMethod';
import { loginActions } from '../../model/slice/LoginSclice';
import Mail from "@/shared/assets/icons/Mail.svg?react";
import Phone from "@/shared/assets/icons/Phone.svg?react";
import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import { Login } from '../../model/services/Login';
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/SelectLogInIsLoading';
import { selectLoginError } from '../../model/selectors/selectLoginError/SelectLoginError';

const LoginForm = () => {
        const dispatch=useAppDispatch()
        const navigate=useNavigate();
        const email=useAppSelector(selectLoginEmail)
        const password=useAppSelector(selectLoginPassword)
        const phone=useAppSelector(selectLoginPhone)
        const method=useAppSelector(selectLoginMethod)
        const isLoading=useAppSelector(selectLoginIsLoading)
        const error=useAppSelector(selectLoginError)

        const handleChangeEmail=(value:string)=>{
                dispatch(loginActions.setEmail(value))
        }
        const handleChangePhone=(value:string)=>{
                dispatch(loginActions.setPhone(value))
        }
        const handleChangePassword=(value:string)=>{
                dispatch(loginActions.setPassword(value))
        }

        const onSubmit=async (e:FormEvent<HTMLFormElement>)=>{
               e.preventDefault(); 
               const result=await dispatch(Login({email,phone,password}))
               if(!Login.fulfilled.match(result)){
                navigate(routePaths.home)
               }
        }

        const handleTabChange=()=>{
                dispatch(loginActions.setMethod(method===AuthMethods.EMAIL?AuthMethods.PHONE:AuthMethods.EMAIL));
                dispatch(loginActions.resetForm())
        }
  return (
    <div>
        <form onSubmit={onSubmit} className={styles.form}>
                <Tabs defaultValue={method} onChange={handleTabChange}>
                        <Tabs.List>
                                <Tabs.Trigger value={AuthMethods.EMAIL}>
                                      <AppIcon Icon={Mail}  /> With Email
                                </Tabs.Trigger>
                                <Tabs.Trigger value={AuthMethods.PHONE}>
                                      <Phone /> With Phone
                                </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value={AuthMethods.EMAIL}>
                                <Input 
                                error={!!error}
                                label='Email:'
                                type='email' value={email} className={styles.input} placeholder='Enter Your Email'
                                onChange={handleChangeEmail}
                                 />
                        </Tabs.Content>
                        <Tabs.Content value={AuthMethods.PHONE}>
                                
                                <PhoneInput
                                error={!!error}
                                 value={phone} 
                                label='Phone:'
                                className={styles.input} placeholder='Enter Your Phone' 
                                onChange={handleChangePhone}
                                />
                        </Tabs.Content>
                </Tabs>
                <Input 
                error={!!error}
                label='Password:'
                value={password} 
                type='password'className={styles.input} 
                placeholder='Enter Your Password'
                onChange={handleChangePassword}
                 />
                 {error && (
                        <div className={styles.error}>{error}</div>
                 )}
                <div className={styles.button_home}>
                        <Button isLoading={isLoading} fullWidth type='submit' className={styles.button} form='rounded' size='md'>Login<AppIcon Icon={ArrowRight} /></Button>
                        <Link to={'/'} className={styles.home}>Back to Home</Link>
                </div>
        </form>
    </div>
  )
}

export default LoginForm