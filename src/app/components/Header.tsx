import React from "react";
import Image from "next/image";
import { GiFullPizza } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr", // For mobile and smaller screens
        }}
      >
        <div style={{ padding: "20px 0" }}>
          <div
            style={{
              padding: "15px",
              borderRadius: "20px",
              background: "linear-gradient(to right, #1f2937, white)",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Pizza Logo */}
                <GiFullPizza style={{ width: "24px", height: "24px", color: "#F59E0B", cursor: "pointer" }} />
                {/* Search input */}
                <div style={{ position: "relative" }}>
                  <input
                    style={{
                      borderRadius: "20px",
                      padding: "12px 15px",
                      fontSize: "12px",
                      width: "350px",
                      outline: "none",
                      display: "block",
                    }}
                    placeholder="Search for your favourite pizza from menu."
                  />
                  <FaSearch
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "20px",
                      height: "20px",
                      color: "#3B82F6",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <nav
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "15px",
                    marginRight: "auto",
                    borderLeft: "1px solid #D1D5DB",
                    paddingLeft: "15px",
                    fontSize: "14px",
                  }}
                >
                  <a
                    style={{
                      color: "white",
                      fontWeight: "600",
                      textDecoration: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                    }}
                    href=" http://localhost:3000"
                  >
                    Home
                  </a>
                  <a
                    style={{
                      color: "white",
                      fontWeight: "600",
                      textDecoration: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                    }}
                    href=" http://localhost:3000/reservation"
                  >
                    Reservation
                  </a>
                  <a
                    style={{
                      color: "white",
                      fontWeight: "600",
                      textDecoration: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                    }}
                    href=" http://localhost:3000/menu"
                  
                  >
                    Menu
                  </a>
                  <a
                    style={{
                      color: "white",
                      fontWeight: "600",
                      textDecoration: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                    }}
                    href=" http://localhost:3000/offer"
                  >
                    Offers
                  </a>
                </nav>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <FaBolt style={{ width: "20px", height: "20px", color: "#F59E0B", display: "block" }} />
                <p style={{ fontSize: "12px", color: "white", display: "block", margin: "0" }}>
                  Order now and get it with <span style={{ color: "#F59E0B" }}>15 minutes</span>
                </p>
                {/* Cart icon */}
                <FaCartShopping
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    padding: "5px",
                    border: "2px solid transparent",
                    color: "#22D3EE",
                    cursor: "pointer",
                    transition: "color 0.3s, transform 0.3s",
                  }}
                />
                <Image
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "2px solid #38BDF8",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  src="https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_1280.jpg"
                  alt="user avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
