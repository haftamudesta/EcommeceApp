import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";


describe("Button", () => {
  test("renders with correct text", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("applies custom className", () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("custom-class");
  });
  test("handles click events", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>test</Button>);
    fireEvent.click(screen.getByText("test"))
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText("Disabled")).toBeDisabled();
  });
  test("is not disabled when disabled prop is false", () => {
    render(<Button disabled={false}>Enabled</Button>);
    expect(screen.getByText("Enabled")).not.toBeDisabled();
  });
});
