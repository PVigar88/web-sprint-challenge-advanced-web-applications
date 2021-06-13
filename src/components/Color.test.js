import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={{ color: "", code: { hex: "" } }} />);
  screen.debug();
});

test("Renders the color passed into component", () => {
  render(
    <Color
      color={{
        color: "limegreen",
        code: {
          hex: "#99ddbc",
        },
        id: 2,
      }}
    />
  );
  screen.debug();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  render(
    <Color
      color={{
        color: "limegreen",
        code: {
          hex: "#99ddbc",
        },
        id: 2,
      }}
    />
  );
  const deleteButton = screen.getByTestId("delete");
  userEvent.click(deleteButton);
  screen.debug();
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {});
