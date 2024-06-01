"use client";
import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer class="footer-area" id="contact">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <div class="footer-logo">
                <a href="#">
                  <img src="./logo-1.png" alt="proone" />
                </a>
              </div>
              <div class="footer-menu ">
                <ul>
                  <li class="li">
                    <a href="/">HOME</a>
                  </li>

                  <li class="li">
                    <a href="#product">PRODUCT</a>
                  </li>

                  <li class="li">
                    <a href="/contact">CONTACT</a>
                  </li>
                </ul>
              </div>
              <div class="footer-social">
                <ul>
                  <li>
                    <a href="#">
                      <img src="./twitter.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./instagram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./Google.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./linkedin.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright pt-18pb-5">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="copy-right">
                  <p>© 2024 ProOne. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
