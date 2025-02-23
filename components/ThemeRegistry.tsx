"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "@/theme";
import ThemeToggle from "@/components/ThemeToggle";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
      </div>
      {children}
    </ThemeProvider>
  );
}
