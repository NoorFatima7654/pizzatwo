'use client'
import React from "react";

const ReservationSection = () => {
  return (
    <section
      style={{
        background: "linear-gradient(to right, black, #1E293B)", // bg-gradient-to-r from black to bg-slate-900
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "800",
            marginBottom: "24px",
            color: "white",
          }}
        >
          Make a Reservation
        </h2>
        <form
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              marginBottom: "16px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D1D5DB", // border-gray-300
                borderRadius: "8px",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D1D5DB", // border-gray-300
                borderRadius: "8px",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <input
              type="date"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D1D5DB", // border-gray-300
                borderRadius: "8px",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="time"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #D1D5DB", // border-gray-300
                borderRadius: "8px",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
  <button
    style={{
      backgroundColor: "#06B6D4", // cyan background
      color: "white",
      padding: "12px 16px",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s ease", // smooth transition
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#1D4ED8"; // blue background on hover
      e.currentTarget.style.transform = "scale(1.05)"; // zoom effect on hover
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#06B6D4"; // reset to cyan
      e.currentTarget.style.transform = "scale(1)"; // reset zoom effect
    }}
  >
    Reserved Table
  </button>
</div>

        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
