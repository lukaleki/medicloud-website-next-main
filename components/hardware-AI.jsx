import React from "react";
import Image from "next/image";
import appChip from "../public/app-chip.png";
import diagonalArrow from "../public/diagonal-arrow.png";
import AiIcon from "../public/hardware-AI.png";
import hardwareImg from "../public/hardware-img.png";
import cosmeticsImg from "../public/hardware-cosmetics.png";
import cosmeticsImgDark from "../public/hardware-cosmetics-dark.png";
import { useTheme } from "../pages/themeContext";

function HardwareAI() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <section className="hardware">
      <div className="hardware-left">
        <h1>HARDWARE & AI</h1>

        <div className="hardware-cards">
          <div className="hardware-card">
            <div className="frame-wrapper">
              <div className="hardware-frame">
                <Image
                  src={appChip}
                  width="40"
                  height="40"
                  alt="hardware-people"
                  className="hardware-image"
                />
              </div>
            </div>
            <div className="hardware-card-text">
              <h3>ექიმები</h3>
              <p>
                პროფესიული ცოდნის გაზიარება და <br /> ონლაინ კონსილიუმების
                მოწვევა...
              </p>
            </div>
          </div>

          <div className="hardware-card">
            <div className="frame-wrapper">
              <div className="hardware-frame">
                <Image
                  src={AiIcon}
                  width="40"
                  height="40"
                  alt="hardware-doctor"
                  className="hardware-image"
                />
              </div>
            </div>
            <div className="hardware-card-text">
              <h3>ექიმები</h3>
              <p>
                პროფესიული ცოდნის გაზიარება და <br /> ონლაინ კონსილიუმების
                მოწვევა...
              </p>
            </div>
          </div>
        </div>

        <button className="hardware-btn">
          დეტალურად{" "}
          <Image
            src={diagonalArrow}
            width="14"
            height="14"
            alt="diagonal-arrow"
          />
        </button>
      </div>

      <div className="hardware-right">
        <Image
          className="hardware-img"
          src={hardwareImg}
          width="557"
          height="418"
          alt="hardware-img"
        />
        <Image
          className="hardware-cosmetics"
          src={darkTheme ? cosmeticsImgDark : cosmeticsImg}
          width="557"
          height="418"
          alt="hardware-cosmetics"
        />
      </div>
    </section>
  );
}

export default HardwareAI;
