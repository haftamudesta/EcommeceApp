import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from "./ThemeContext";

interface UseThemeReturn {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
    const { theme = Theme.PINK, setTheme } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        const newTheme = theme === Theme.PINK ? Theme.BLUE : Theme.PINK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
};