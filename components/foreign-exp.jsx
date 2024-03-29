import React from "react";
import Image from "next/image";
import ForeignExp from "../public/foreign-exp.png";
import foreignPeople from "../public/foreign-people.svg";
import foreignDoctor from "../public/foreign-doctor.png";
import diagonalArrow from "../public/diagonal-arrow.png";
import cosmeticImg from "../public/foreign-cosmetics.png";
import cosmeticImgDark from "../public/foreign-cosmetics-dark.png";
import { useTheme } from "../pages/themeContext";

function Foreign() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <section className="foreign">
      <div className="foreign-left">
        <Image
          className="foreign-exp-img"
          src={ForeignExp}
          width="471"
          height="482"
          alt="foreign-exp"
        />
        <Image
          className="foreign-cosmetics"
          src={darkTheme ? cosmeticImgDark : cosmeticImg}
          width="671"
          height="600"
          alt="foreign-cosmetics"
        />
      </div>

      <div className="foreign-right">
        <h1>უცხოური ექსპერტიზა</h1>

        <div className="foreign-cards">
          <div className="foreign-card">
            <div className="icon-frame-wrapper">
              <div className="foreign-frame">
                <Image
                  src={foreignPeople}
                  width="40"
                  height="40"
                  alt="foreign-people"
                  className="foreign-image"
                />
              </div>
            </div>
            <div className="foreign-card-text">
              <h3>პაციენტები</h3>
              <p>კვლევების და დიაგნოზების გაზიარება და გადამოწმება...</p>
            </div>
          </div>

          <div className="foreign-card">
            <div className="icon-frame-wrapper">
              <div className="foreign-frame">
                <Image
                  src={foreignDoctor}
                  width="40"
                  height="40"
                  alt="foreign-doctor"
                  className="foreign-image"
                />
              </div>
            </div>
            <div className="foreign-card-text">
              <h3>ექიმები</h3>
              <p>
                პროფესიული ცოდნის გაზიარება და ონლაინ კონსილიუმების
                მოწვევა...
              </p>
            </div>
          </div>
        </div>

        <button className="foreign-btn">
          დეტალურად{" "}
          <Image
            src={diagonalArrow}
            width="14"
            height="14"
            alt="diagonal-arrow"
          />
        </button>
      </div>
    </section>
  );
}

export default Foreign;
