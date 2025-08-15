import HomePage from "@/pages/home/ui/HomePage";
import LoginPage from "@/pages/login/ui/LoginPage";
import PageNotFound from "@/pages/notfoud/ui/PageNotFound";
import type { RouteProps } from 'react-router';

export const AppRoutes = {
    HOME: "home",
    LOGIN: "login"
} as const;

 type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.LOGIN]: "/login"
};

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
    path: "*",
    element: <PageNotFound />,
  }
];