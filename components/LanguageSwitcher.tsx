"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = pathname.startsWith("/en") ? "bg" : "en";
    const newPath = pathname.replace(/^\/(en|bg)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <Button onClick={toggleLanguage} variant="outlined">
      {pathname.startsWith("/en") ? "BG" : "EN"}
    </Button>
  );
}
