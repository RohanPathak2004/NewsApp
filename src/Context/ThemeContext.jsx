import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [dark, setDark]  = useState(()=>{
        return localStorage.getItem("theme") === "dark";
    })
    useEffect(()=>{
        const root = document.documentElement;
        if(dark){
            root.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            root.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[dark]);

    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);