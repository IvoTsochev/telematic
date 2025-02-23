"use client";

import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function ThemeToggle({
  toggleTheme,
  darkMode,
}: {
  toggleTheme: () => void;
  darkMode: boolean;
}) {
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{ color: theme.palette.text.primary }}
    >
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
