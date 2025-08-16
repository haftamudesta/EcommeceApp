import { useTranslation } from "react-i18next"
import { Link } from "react-router"


const LogIn = () => {
  const {t}=useTranslation('login')
  return (
    <>
    {t('login')}
    <Link to={'/'}>Home</Link>
    </>
  )
}

export default LogIn