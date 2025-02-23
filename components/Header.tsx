"use client";

import { Typography, Box } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Index");

  return (
    <Box display="flex" justifyContent="space-between" padding="10px">
      <Typography variant="h5" role="heading">
        {t("app_name")}
      </Typography>
    </Box>
  );
}
