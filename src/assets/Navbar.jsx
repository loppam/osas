import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Scrolltosection from "../scrolltosection";
import { IoMail } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrollClass, setScrollClass] = useState("");
  const [scrolllClass, setScrolllClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = 20;
      if (window.scrollY >= scrollPosition) {
        setScrollClass("on-scroll");
        setScrolllClass("on-scrolll");
      } else {
        setScrollClass("");
        setScrolllClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScrollt = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");

      // Create an array to store the section positions
      const sectionPositions = Array.from(sections).map((section) => ({
        id: section.id,
        offsetTop: section.offsetTop,
        offsetBottom: section.offsetTop + section.clientHeight,
      }));

      // Determine which section is currently in view
      const currentSection = sectionPositions.find(
        (section) =>
          scrollY >= section.offsetTop && scrollY < section.offsetBottom
      );

      if (currentSection) {
        setActiveLink(currentSection.id);
      } else {
        setActiveLink("");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScrollt);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollt);
    };
  }, []);
  return (
    <nav
      className={
        Mobile ? `mobile_navbar ${scrollClass}` : `navbar ${scrollClass}`
      }
    >
      <div
        className={
          Mobile
            ? `mobile_nav_margin ${scrolllClass}`
            : `nav_margin ${scrolllClass}`
        }
      >
        <div className="logo">
          <img src="/favicon.jpeg" alt="" />
          <p>sas</p>
        </div>
        <div
          className={Mobile ? "nav-mob" : "nav"}
          onClick={() => setMobile(false)}
        >
          <ul className={Mobile ? "nav-mobile" : "navigation"}>
            <li>
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#portfolio">Portfolio</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>

          <Link className="mail" to="mailto:">
            <IoMail />
          </Link>
        </div>
        <button className="mobile" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <FaTimes /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
