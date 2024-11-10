import React from "react";

export default function Progressor() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          maxWidth: "1024px",
          width: "100%",
          margin: "40px auto",
        }}
      >
        <div style={{ width: "100%" }}>
          {/* Step 1 */}
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                flexShrink: 0,
                margin: "-4px",
                backgroundColor: "#F59E0B", // amber-400
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                1
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "4px",
                margin: "0 16px",
                borderRadius: "8px",
                backgroundColor: "#06B6D4", // cyan-500
              }}
            ></div>
          </div>
          <div>
            <h6
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#F59E0B", // amber-500
              }}
            >
              Step 1: Choose your Dish
            </h6>
            <p style={{ fontSize: "12px", color: "white" }}>
              Explore our delicious menu and select your dish.
            </p>
          </div>

          {/* Step 2 */}
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                flexShrink: 0,
                margin: "-4px",
                backgroundColor: "#F59E0B", // amber-400
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                2
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "4px",
                margin: "0 16px",
                borderRadius: "8px",
                backgroundColor: "#06B6D4", // cyan-500
              }}
            ></div>
          </div>
          <div>
            <h6
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#F59E0B", // amber-500
              }}
            >
              Step 2: Customise your Order
            </h6>
            <p style={{ fontSize: "12px", color: "white" }}>
              Customize your dish according to your preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                flexShrink: 0,
                margin: "-4px",
                backgroundColor: "#F59E0B", // amber-400
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                3
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "4px",
                margin: "0 16px",
                borderRadius: "8px",
                backgroundColor: "#06B6D4", // cyan-500
              }}
            ></div>
          </div>
          <div>
            <h6
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#F59E0B", // amber-500
              }}
            >
              Step 3: Place your Order
            </h6>
            <p style={{ fontSize: "12px", color: "white" }}>
              Ready to eat? Proceed to checkout and complete your order!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
