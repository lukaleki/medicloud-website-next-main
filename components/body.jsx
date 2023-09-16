import React from "react";
import Nav from "../components/nav";
import ClinicRegistration from "../components/clinic-registration";
import MedPartner from "../components/med-partners";
import WhatWeOffer from "../components/whatWeOffer";
import ClinicWeb from "../components/clinic-web";
import MobileApp from "../components/mobile-app";
import MedDelivery from "../components/med-delivery";
import Reporting from "../components/reporting";
import Foreign from "../components/foreign-exp";
import HardwareAI from "../components/hardware-AI";
import Questions from "../components/questions";
import Blog from "../components/blog";
import Footer from "../components/footer";
import { useTheme } from "../pages/themeContext";
import Image from "next/image";
import diagonalArrow from "../public/diagonal-arrow.png"
import sunIcon from "../public/sun.png"
import moonIcon from "../public/moon.png"

function Body() {
  const { darkTheme, toggleTheme } = useTheme();
  const darkThemeClass = darkTheme ? "dark-theme" : "";

  return (
    <section className={`body-container ${darkThemeClass}`}>
      <div className="cosmetic-rectangle"></div>
      <button className="theme-change">
        <Image
          className="theme-change-arrow"
          src={diagonalArrow}
          width="14"
          height="14"
          alt="theme-change-arrow"
        />
        <Image
          onClick={toggleTheme}
          className="sun-icon"
          src={darkTheme ? moonIcon : sunIcon}
          width="25"
          height="25"
          alt="sun-icon"
        />
      </button>
      <Nav />
      <ClinicRegistration />
      <MedPartner />
      <WhatWeOffer />
      <ClinicWeb />
      <MobileApp />
      <MedDelivery />
      <Reporting />
      <Foreign />
      <HardwareAI />
      <Questions />
      <Blog />
      <Footer />
    </section>
  );
}

export default Body;
