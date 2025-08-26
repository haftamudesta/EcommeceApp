import { Link } from 'react-router';

import styles from "./LoginForm.module.scss";
import { Button, Input, Tabs } from '@/shared/ui';
import { AuthMethods } from '@/shared/config';

const LoginForm = () => {
  return (
    <div>
        <form action="" className={styles.form}>
                <Tabs defaultValue={AuthMethods.EMAIL}>
                        <Tabs.List>
                                <Tabs.Trigger value={AuthMethods.EMAIL}>
                                       With Email
                                </Tabs.Trigger>
                                <Tabs.Trigger value={AuthMethods.PHONE}>
                                       With Phone
                                </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value={AuthMethods.EMAIL}>
                                <label className={styles.label}>Email:</label>
                                <Input type='email'className={styles.input} placeholder='Enter Your Email' />
                        </Tabs.Content>
                        <Tabs.Content value={AuthMethods.PHONE}>
                                <label className={styles.label}>Phone:</label>
                                <Input className={styles.input} placeholder='Enter Your Phone' />
                        </Tabs.Content>
                </Tabs>
                <Input type='password'className={styles.input} placeholder='Enter Your Password' />
                <div>
                        <Button type='submit' className={styles.button} form='rounded' size='md'>Login</Button>
                        <Link to={'/'}>Home</Link>
                </div>
        </form>
    </div>
  )
}

export default LoginForm