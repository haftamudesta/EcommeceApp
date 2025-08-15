import { Routes, Route } from 'react-router-dom';
import { routeConfig } from "../RoutersConfig";
import { Suspense } from 'react';

const AppRouter = () => {
  return (
    <Routes>{routeConfig.map(({path,element})=>(
        <Route key={path} path={path} element={<Suspense key={path} fallback={<>Loading...</>}>{element}</Suspense>}/>
    ))}</Routes>
  )
}

export default AppRouter