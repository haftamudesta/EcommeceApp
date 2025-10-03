import { lazy } from "react";

export const RegisterPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulate delay
      setTimeout(() => resolve(import("./RegistrationPage")), 1500);
    })
);