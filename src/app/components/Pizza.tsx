import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Vegetable Pizza",
    category: "Fixing",
    price: "600.00",
    imageUrl: "/images/chickentikka png.png", // Ensure the image path is correct
    bgColor: "#f59e0b", // amber color
  },
  {
    id: 2,
    title: "Chicago Pizza",
    category: "Delights",
    price: "1000.00",
    imageUrl: "/images/chicagopizza.png", // Ensure the image path is correct
    bgColor: "#14b8a6", // teal color
  },
  {
    id: 3,
    title: "Scillian Pizza",
    category: "Delights",
    price: "1500.00",
    imageUrl: "/images/peppronipizza6.png", // Ensure the image path is correct
    bgColor: "#f59e0b", // amber color
  },
];

export default function ProductList() {
  return (
    <div style={{ padding: "4px", display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "24px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            flexShrink: "0",
            margin: "24px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: product.bgColor,
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "320px",
          }}
        >
          <svg
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              marginBottom: "32px",
              transform: "scale(1.5)",
              transition: "transform 0.3s ease",
              opacity: "0.1",
            }}
            viewBox="0 0 375 283"
            fill="none"
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div
            style={{
              position: "relative",
              paddingTop: "40px",
              paddingLeft: "40px",
              paddingRight: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease",
              transform: "scale(1)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "192px",
                bottom: "0",
                left: "0",
                marginBottom: "-24px",
                marginLeft: "12px",
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            <Image
              style={{
                position: "relative",
                width: "200px",
              }}
              src={product.imageUrl}
              alt={product.title}
            />
          </div>
          <div
            style={{
              position: "relative",
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingBottom: "24px",
              marginTop: "24px",
              color: "white",
            }}
          >
            <span
              style={{
                display: "block",
                opacity: "0.75",
                marginBottom: "-4px",
              }}
            >
              {product.category}
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                {product.title}
              </span>
              <span
                style={{
                  display: "block",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  color: "#F59E0B",
                  fontSize: "12px",
                  fontWeight: "700",
                  padding: "6px 12px",
                }}
              >
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
