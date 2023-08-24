// src/__tests__/Main.test.js

import { initializeTimes, updateTimes } from "../components/Main";

// Mock fetchAPI for testing purposes
const mockFetchAPI = async () => ["17:00", "18:00", "19:00"];

test("initializeTimes returns the correct value", async () => {
  const initialState = {
    selectedDate: "",
    availableTimes: [],
  };

  const result = await initializeTimes(initialState, mockFetchAPI);

  expect(result.availableTimes).toEqual(
    expect.arrayContaining(["17:00", "18:00", "19:00"])
  );
});

test("updateTimes returns the same value provided in the state", () => {
  const initialState = {
    selectedDate: "2023-08-24",
    availableTimes: ["17:00", "18:00"],
  };

  const newState = updateTimes(initialState, initialState.availableTimes);

  expect(newState.availableTimes).toEqual(initialState.availableTimes);
});
