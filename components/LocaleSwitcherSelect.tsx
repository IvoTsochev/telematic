"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Locale, defaultLocale } from "../i18n/config";
import { setUserLocale, getUserLocale } from "../i18n/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({ items, label }: Props) {
  const [selectedLocale, setSelectedLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = getUserLocale();
    setSelectedLocale(storedLocale);
  }, []);

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value as Locale;
    setSelectedLocale(newLocale);
    setUserLocale(newLocale);

    window.location.reload();
  }

  return (
    <DropdownWrapper>
      <Label>{label}</Label>
      <Dropdown value={selectedLocale} onChange={onChange}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Dropdown>
    </DropdownWrapper>
  );
}

// Styled Components
const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #888;
  }
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const Dropdown = styled.select`
  background: transparent;
  border: none;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  outline: none;
`;
