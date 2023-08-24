// Main.js
import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm"; // Import your BookingForm component
import ConfirmedBooking from "./components/confirmedBooking";

const Main = () => {
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    // Simulate API call
    const submitAPI = async (formData) => {
      // Your actual API call logic here
      // For demonstration, we'll assume the API call was successful
      return true;
    };

    const isBookingSuccessful = await submitAPI(formData);

    if (isBookingSuccessful) {
      navigate("/confirmed-booking"); // Navigate to the booking confirmed page
    }
  };

  return (
    <div>
      {/* Other components */}
      <BookingForm submitForm={submitForm} />
      {/* Other components */}
    </div>
  );
};

export default Main;
