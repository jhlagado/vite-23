import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

it("check ", () => {
  render(<Form />);
  const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
  expect(emailInput.value).toBe("");
  const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
  expect(passwordInput.value).toBe("");
  const confirmPasswordInput = screen.getByLabelText(
    "Confirm Password"
  ) as HTMLInputElement;
  expect(confirmPasswordInput.value).toBe("");
});
