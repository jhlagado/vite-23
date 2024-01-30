import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("App Router: Works with dynamic route segments", () => {
  render(<App />);
  const emailInputElement = screen.getByLabelText(/email/i) as HTMLInputElement;
  expect(emailInputElement.value).toHaveTextContent("Email");
});


// test("Renders page", () => {
//   expect(true).toBe(true);
// });
