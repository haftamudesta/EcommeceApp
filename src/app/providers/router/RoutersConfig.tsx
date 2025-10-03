import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/registration";
import { PageNotFound } from "@/pages/notFound";
import type { RouteProps } from 'react-router';
import {routePaths,AppRoutes} from "@/shared/config"



export const routeConfig: RouteProps[] = [
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage />
    },
    {
        path: routePaths[AppRoutes.LOGIN],
        element: <LoginPage />,
    },
    {
        path: routePaths[AppRoutes.REGISTER],
        element: <RegisterPage />,
    },
    {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <PageNotFound />,
  }
];