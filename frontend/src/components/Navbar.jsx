import React, { useState, useEffect } from "react";
import Logo from "../assets/Eco.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
 
const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/model", label: "Model" },
];
 
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => setOpenLinks((o) => !o);
  const closeNavbar = () => setOpenLinks(false);
 
  // Close on Escape + lock page scroll while the menu is open
  useEffect(() => {
    if (!openLinks) return;
    const onKey = (e) => e.key === "Escape" && setOpenLinks(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openLinks]);
 
  return (
    <>
      {/* Dimmed backdrop: tap to close (mobile only, via CSS) */}
      <div
        className={`menuOverlay ${openLinks ? "show" : ""}`}
        onClick={closeNavbar}
      />
 
      {/* Centered mobile menu (hidden on desktop via CSS) */}
      <div id="mobile-links" className={`hiddenLinks ${openLinks ? "show" : ""}`}>
        {LINKS.map(({ to, label }, i) => (
          <Link key={to} to={to} onClick={closeNavbar} style={{ "--i": i }}>
            {label}
          </Link>
        ))}
      </div>
 
      <div className="navContainer">
        <div className="logo">
          <img src={Logo} alt="The logo" />
        </div>
 
        <div className="navbar">
          <div className="mobileNavBar">
            <div className="logo">
              <img src={Logo} alt="The logo" />
            </div>
            <button
              className="menuButton"
              onClick={toggleNavbar}
              aria-expanded={openLinks}
              aria-controls="mobile-links"
            >
              {openLinks ? "CLOSE" : "MENU"}
            </button>
          </div>
 
          <div className="desktopNavBar">
            {LINKS.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Navbar;