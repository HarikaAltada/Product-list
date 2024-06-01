"use client";
import React from "react";
import "./main.css";

export default function Main() {
  return (
    <div>
      <div className="hero-area" id="/">
        <div className="hero-content">
          <div className="container">
            <div className="watch">
              <div className="offer">
                <h1>Best Products For Your Daily Life</h1>
                <p>
                  Day handsome addition horrible sensible goodness two contempt.
                  Evening for married his account removal. Estimable me
                  disposing of be moonlight cordially curiosity.
                </p>
                <a className="buttonfx" href="/cart">
                  ORDER NOW
                </a>
                <a className="starting" href="/cart">
                  STRATING AT $199
                </a>
              </div>

              <div className="offer">
                <div className="hero-right">
                  <div className="hero-discount">
                    <h1>
                      25 <sup>%</sup>
                      <span>OFF</span>
                    </h1>
                    <p>ONLY THIS WEEK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
