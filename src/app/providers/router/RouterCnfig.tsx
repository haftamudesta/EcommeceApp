import HomePage from "@/pages/home"
import LoginPage from "@/pages/login/ui/LoginPage"
iport RouteProps from "react-router"
export const AppRoutes={
        HOME:"home",
        LOGIN:"login"
}as const;

type AppRoutes={typeof AppRoutes}[keyof type AppRoutes]

export const routePaths:Record<AppRoutes,string>=(
        [AppRoutes.HOME]:"/",
        [AppRoutes.LOGIN]:"/login"
)
export const routeConfig:RouteProps[]=[
        {
                path:routePaths[AppRoutes.HOME]
                element:<HomePage />
        },
         {
                path:routePaths[AppRoutes.LOGIN]
                element:<LoginPage />
        }
]