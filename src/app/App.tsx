
// import AppRouter from "@/providers/router/ui/AppRouter"
// import AppRouter from "./providers/router/ui/AppRouter"
import { Suspense, useEffect } from "react"
import {AppRouter} from "./providers"
import { useAppDispatch } from "@/shared/lib"
import { refreshSession, UserActions } from "@/entities/users";
import { setAuthFailureHandler } from "@/shared/api";

function App() {
  const dispatch=useAppDispatch();

  useEffect(()=>{
    dispatch(UserActions.initUserData())
    dispatch(refreshSession())
    setAuthFailureHandler(()=>{
      dispatch(UserActions.clearUserData())
    })
  },[dispatch])
  
  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  )
}
export default App
