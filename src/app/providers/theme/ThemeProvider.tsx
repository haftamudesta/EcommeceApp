import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from "@/shared/config";
import { useEffect, useState, type ReactNode } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

const getDefaultTheme = (): ThemeType => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    return storedTheme && Object.values(Theme).includes(storedTheme as ThemeType)
        ? storedTheme as ThemeType
        : Theme.PINK;
};
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>(getDefaultTheme);

    // useEffect(() => {
    //     document.body.classList.remove(
    //     Theme.PINK, 
    //     Theme.BLUE
    // );
    // document.body.classList.add(getDefaultTheme());
    // console.log("Theme:",getDefaultTheme())
    // console.log('Current theme class:', document.body.className);
    //     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    // }, [theme]);

    useEffect(() => {
        const root = document.documentElement;
        root.style.removeProperty('--primary-color');
        root.style.removeProperty('--primary-color-light');
        root.style.removeProperty('--primary-color-dark');

        if (theme === Theme.PINK) {
            root.style.setProperty('--primary-color', '#b6349a');
            root.style.setProperty('--primary-color-light', '#fef5fd');
            root.style.setProperty('--primary-color-dark', '#a02b84');
        }
        if (theme === Theme.BLUE) {
            root.style.setProperty('--primary-color', '#6155f5');
            root.style.setProperty('--primary-color-light', '#f8f5ff');
            root.style.setProperty('--primary-color-dark', '#4e44d4');
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
}, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};