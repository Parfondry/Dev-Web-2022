import React from "react"
import { screen, render } from "@testing-library/react";
//import "@testing-library/jest-dom";
import InscriptionC from "./inscription"

describe("InscriptionForm", () => {
    test("should render the basic fields", () => {
      render(<InscriptionC />);
      /*expect(screen.getByRole("textbox", { name: /pseudo/i })).toBeInTheDocument();
      expect(screen.getByRole("textbox", { name: /mdp/i })).toBeInTheDocument();
      expect(screen.getByRole("textbox", { name: /Mail/i })).toBeInTheDocument();
      expect(screen.getByRole("textbox", { name: /Birth/i })).toBeInTheDocument();
      expect(
        screen.getByRole("spinbutton", { name: /servings/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /add ingredient/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();*/
    });
  });


