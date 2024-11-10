"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffer: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Happy Hours",
      description: "5PM se 7PM tamam drinks per 50% off hasil kren",
    },
    {
      title: "Family Meal Deal",
      description: "2 main courses order kren aur family deal coupon code hasil kren",
    },
    {
      title: "Weekly Brunch",
      description: "Ek free complimentry drink muft uthaen",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section style={{ padding: "40px 0" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          background: "black",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "24px",
            color: "white",
          }}
        >
          Special Offer
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                textAlign: "center",
                padding: "20px",
                transition: "background-color 0.3s, transform 0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#E2E8F0";
                (e.target as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "white";
                (e.target as HTMLElement).style.transform = "scale(1)";
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                {offer.title}
              </h3>
              <p
                style={{
                  marginTop: "12px",
                  color: "#374151",
                }}
              >
                {offer.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
