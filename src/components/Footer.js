import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            convallis massa. Mauris tempus rutrum augue, id fringilla dolor. Sed
            vulputate tincidunt faucibus. Mauris condimentum, ipsum id
            vestibulum pellentesque, augue neque efficitur arcu, ac pharetra
            ligula purus id nulla.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <br />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <br />
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <br />
          <div className="social-icons">
            <FontAwesomeIcon icon={faEnvelope} />
            <br />
            <FontAwesomeIcon icon={faEnvelope} />
            <br />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
