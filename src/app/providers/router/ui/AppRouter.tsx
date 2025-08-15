import { Routes, Route } from 'react-router-dom';
import { routeConfig } from "../RoutersConfig";

const AppRouter = () => {
  return (
    <Routes>{routeConfig.map(({path,element})=>(
        <Route key={path} path={path} element={element}/>
    ))}</Routes>
  )
}

export default AppRouter