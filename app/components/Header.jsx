"use client";
import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (event, targetID) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector(".header-area").offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <header className={`header-area ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="head">
              <a href="/" onClick={(e) => handleScrollToSection(e, "/")}>
                <img src="./logo-1.png" alt="Logo" />
              </a>
            </div>
            <div className="main">
              <ul className="menu" id="menu">
                <li>
                  <a href="/" onClick={(e) => handleScrollToSection(e, "/")}>
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#product"
                    onClick={(e) => handleScrollToSection(e, "product")}
                  >
                    Product
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollToSection(e, "contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
