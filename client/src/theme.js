import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#808088",
          200: "#ffffff" 
        },
        primary: {
          100: "#2f3241", //light blue
          200: "#191d28", //dark blue
        },
        greenAccent: {
          100: "#3dc5c1", 
        },
        redAccent: {
          100: "#d95757",
          // #d95757  
        },
        
      }
    : {
        grey: {
          100: "#808088",
          200: "#000000"
        },
        primary: {
          100: "#e7e6e8",//offwhite
          200: "#ffffff",
        },
        greenAccent: {
          100: "#3dc5c1", 
        },
        redAccent: {
          100: "#d95757",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[200],
            },
            secondary: {
              main: colors.greenAccent[100],
            },
            background: {
              default: colors.primary[200],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[100],
            },
            background: {
              default: colors.primary[200],
            },
          }),
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode ? storedMode : "dark";
  });

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};