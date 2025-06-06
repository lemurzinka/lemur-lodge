import React from "react";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Lemur Lodge. All rights reserved.</p>
      <p>Contact us: <a href="mailto:info@lemurlodge.com">info@lemurlodge.com</a></p>
    </footer>
  );
}

export default Footer;
