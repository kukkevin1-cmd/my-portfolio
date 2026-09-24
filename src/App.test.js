import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders name and resume link", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /kevin kuk/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute("href", expect.stringContaining("docs.google.com/document"));
});
