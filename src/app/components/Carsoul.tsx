import React from "react";
import Image from "next/image";

export default function Carousel() {
  return (
    <div>
      <section
        style={{
          background: "linear-gradient(to right, black, #4b5563)", // Background gradient
          padding: "16px 0",
        }}
      >
        <div
          style={{
            padding: "16px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "16px",
              height: "100%",
            }}
          >
            {/* First Pizza Block */}
            <div
              style={{
                gridColumn: "span 2",
                background: "linear-gradient(to right, black, #4b5563)",
                height: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                href="#"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "160px 16px 16px",
                  flexGrow: 1,
                }}
              >
                <Image
                  src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_570541132.jpg.webp"
                  alt="pizza 1"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease-in-out",
                  }}
                  className="hover:scale-105" // Hover effect in CSS
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to bottom, rgba(55, 65, 81, 0.25), rgba(55, 65, 81, 0.05))",
                  }}
                ></div>
                <h3
                  style={{
                    zIndex: 10,
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "white",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    padding: "16px",
                  }}
                >
                  Vegetable Pizza
                </h3>
              </a>
            </div>

            {/* Second Pizza Block */}
            <div
              style={{
                gridColumn: "span 2",
                background: "linear-gradient(to right, black, #4b5563)",
                height: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                href="#"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "160px 16px 16px",
                  marginBottom: "16px",
                }}
              >
                <Image
                  src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_514457074.jpg.webp"
                  alt="pizza 2"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease-in-out",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to bottom, rgba(55, 65, 81, 0.25), rgba(55, 65, 81, 0.05))",
                  }}
                ></div>
                <h3
                  style={{
                    zIndex: 10,
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "white",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    padding: "16px",
                  }}
                >
                  Pepperoni Pizza
                </h3>
              </a>

              {/* Nested Grid for Smaller Pizzas */}
              <div
                style={{
                  display: "grid",
                  gap: "16px",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                {/* Third Pizza Block */}
                <a
                  href="#"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                    padding: "160px 16px 16px",
                  }}
                >
                  <Image
                    src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413.jpg.webp"
                    alt="pizza 3"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease-in-out",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to bottom, rgba(55, 65, 81, 0.25), rgba(55, 65, 81, 0.05))",
                    }}
                  ></div>
                  <h3
                    style={{
                      zIndex: 10,
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "white",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      padding: "16px",
                    }}
                  >
                    BBQ Pizza
                  </h3>
                </a>

                {/* Fourth Pizza Block */}
                <a
                  href="#"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                    padding: "160px 16px 16px",
                  }}
                >
                  <Image
                    src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_313437680.jpg.webp"
                    alt="pizza 4"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease-in-out",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to bottom, rgba(55, 65, 81, 0.25), rgba(55, 65, 81, 0.05))",
                    }}
                  ></div>
                  <h3
                    style={{
                      zIndex: 10,
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "white",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      padding: "16px",
                    }}
                  >
                    Hawaiian Pizza
                  </h3>
                </a>
              </div>
            </div>

            {/* Fifth Pizza Block */}
            <div
              style={{
                gridColumn: "span 1",
                background: "linear-gradient(to right, black, #4b5563)",
                height: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                href="#"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  padding: "160px 16px 16px",
                  flexGrow: 1,
                }}
              >
                <Image
                  src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_244706695.jpg.webp"
                  alt="pizza 5"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease-in-out",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to bottom, rgba(55, 65, 81, 0.25), rgba(55, 65, 81, 0.05))",
                  }}
                ></div>
                <h3
                  style={{
                    zIndex: 10,
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "white",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    padding: "16px",
                  }}
                >
                  Supreme Pizza
                </h3>
              </a>
            </div>
          </div>
        </div>
</section>
</div>
)
}
