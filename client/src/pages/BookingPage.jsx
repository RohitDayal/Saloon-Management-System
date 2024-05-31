import React, { useState } from "react";

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedStylist, setSelectedStylist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log(
      "Form submitted:",
      selectedService,
      selectedStylist,
      selectedDate,
      selectedTime
    );
  };

  return (
    <div className="booking-container">
      <h1 className="booking-heading">Book Your Appointment</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="service-select" className="form-label">
            Select Service:
          </label>
          <select
            id="service-select"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="haircut">Haircut</option>
            <option value="coloring">Coloring</option>
            <option value="manicure">Manicure</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="stylist-select" className="form-label">
            Select Stylist:
          </label>
          <select
            id="stylist-select"
            value={selectedStylist}
            onChange={(e) => setSelectedStylist(e.target.value)}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="stylist1">Stylist 1</option>
            <option value="stylist2">Stylist 2</option>
            <option value="stylist3">Stylist 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date-input" className="form-label">
            Select Date:
          </label>
          <input
            id="date-input"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time-input" className="form-label">
            Select Time:
          </label>
          <input
            id="time-input"
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
