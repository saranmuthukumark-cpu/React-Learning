import { useEffect, useState } from "react";
import { themeContext } from "./ThemeApi";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isLog, setIsLog] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const userData = [
    {
      userName: "saran",
      password: "12345",
    },
  ];

  return (
    <themeContext.Provider
      value={{ theme, setTheme, isLog, setIsLog, userData , currentUser, setCurrentUser  }}>
      {children}
    </themeContext.Provider>
  );
};
