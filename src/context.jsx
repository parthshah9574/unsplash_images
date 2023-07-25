import {createContext, useContext, useState, useEffect} from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
    const darkPreference = window.matchMedia(
        "(prefers-color-scheme:dark)"
    ).matches;
    return darkPreference;
};

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);
    const [searchWord, setSearchWord] = useState("Honey");

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
    };

    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme);
    }, [isDarkTheme]);
    return (
        <AppContext.Provider
            value={{isDarkTheme, toggleDarkTheme, searchWord, setSearchWord}}
        >
            {" "}
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);
