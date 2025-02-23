import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { NextIntlClientProvider } from "next-intl";

describe("Header", () => {
  it("renders a heading", () => {
    render(
      <NextIntlClientProvider
        locale="en"
        messages={{ Index: { app_name: "Telematic" } }}
      >
        <Header />
      </NextIntlClientProvider>
    );

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Telematic");
  });
});
