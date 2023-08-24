// src/__tests__/BookingTests.test.js

import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm"; // Adjust the import path
import { initializeTimes, updateTimes } from "../components/Main"; // Adjust the import paths

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the correct value", () => {
  const initialState = {
    selectedDate: "",
    availableTimes: [],
  };

  const result = initializeTimes(initialState);

  // Modify this assertion based on what initializeTimes should return
  expect(result).toEqual(expectedValue);
});

test("updateTimes returns the same value provided in the state", () => {
  const initialState = {
    selectedDate: "2023-08-24",
    availableTimes: ["17:00", "18:00"],
  };

  const newState = updateTimes(initialState, initialState.availableTimes);

  expect(newState.availableTimes).toEqual(initialState.availableTimes);
});
