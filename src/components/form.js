// BookingForm.js
import React, { useState } from "react";

const BookingForm = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: "",
    occasion: "Birthday",
  });

  const isFormValid = formData.date && formData.guests >= 1;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      await submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
      >
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        {/* Other options */}
      </select>

      <label htmlFor="res-guests">Number of guests</label>
      <input
        type="number"
        id="res-guests"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        min="1"
        required
      />

      <label htmlFor="res-occasion">Occasion</label>
      <select
        id="res-occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        {/* Other options */}
      </select>

      <button type="submit" disabled={!isFormValid}>
        Submit reservation
      </button>
    </form>
  );
};

export default BookingForm;
