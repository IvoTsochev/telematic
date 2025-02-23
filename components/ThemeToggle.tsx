"use client";

import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeToggle({
  toggleTheme,
  darkMode,
}: {
  toggleTheme: () => void;
  darkMode: boolean;
}) {
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
