import React, { createContext, ReactNode, useEffect } from "react";
import { Theme, ThemeContextType } from "../helpers/interface";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  useEffect(() => {
    if (theme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
