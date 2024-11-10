import { FaShoppingCart } from "react-icons/fa";
import React from "react";

const productCardGrid = () => {
  const productImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsc8Rlhn_ZrCdW9lD66aKjjKBC_Eko8ZdRQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLOcb97AFCLXS9n5PhVWuLjp596cUzF505Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpAwL5IE5p1pxMFjJGnj-C3rjFvezw96SlCJU11aFNBxQ7p5sCed074I&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb-QOETAw_2smnhPtCqsh8A1KTeBnpYEBTQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Aqy7kjjQbxmABSduzIg3uyh_TOOS0_GPGA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9S8G-FFE2i6Z3CEfxjOoa9jlrL3X5Ex3yA&s",
  ];

  return (
    <div style={{ position: "relative", textAlign: "center", padding: "40px" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1O2F91QpeCoibFkxWj3XSzLO8ZUaBPR_hgcvb1bFysywAS5iAd_puFRY&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      ></div>

      <h1
        style={{
          fontWeight: "bold",
          fontSize: "32px",
          marginBottom: "16px",
          color: "white",
          zIndex: 10,
          position: "relative",
        }}
      >
        Most Requested Items
      </h1>
      <h1
        style={{
          fontSize: "24px",
          color: "white",
          zIndex: 10,
          position: "relative",
        }}
      >
        Order Now....!
      </h1>

      <section
        id="Projects"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          justifyItems: "center",
          gap: "40px 56px",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "280px",
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.5s, box-shadow 0.5s",
              cursor: "pointer",
              zIndex: 10,
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <a href="#">
              <img
                src={productImages[index]}
                alt={`product ${index + 1}`}
                style={{
                  height: "320px",
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <div style={{ padding: "16px", width: "280px" }}>
                <span
                  style={{
                    color: "#64748b",
                    marginRight: "12px",
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                >
                  Category
                </span>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#e11d48",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {`pizza ${index + 1}`}
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "black",
                      margin: "12px 0",
                      cursor: "auto",
                    }}
                  >
                    $149
                  </p>
                  <del>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#1e40af",
                        cursor: "auto",
                        marginLeft: "8px",
                      }}
                    >
                      $149
                    </p>
                  </del>
                  <div style={{ marginLeft: "auto" }}>
                    <FaShoppingCart
                      style={{ width: "20px", height: "20px", color: "#1e40af" }}
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default productCardGrid;
