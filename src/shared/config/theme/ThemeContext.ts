import { createContext } from "react";

export const Theme={
        PINK:"pink-theme",
        BLUE:"blue-theme"
}as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];//Creates a type that represents all possible theme values ("pink-theme" | "blue-theme") Automatically updates if new themes are added to the Theme object

export interface ThemeContextProps{
        theme?:ThemeType,
        setTheme:(theme:ThemeType)=>void
}

export const LOCAL_STORAGE_THEME_KEY="theme"

export const ThemeContext = createContext<ThemeContextProps>({
         theme: Theme.PINK, // default theme
         setTheme: () => {
        console.warn("No ThemeProvider found");
    }
})