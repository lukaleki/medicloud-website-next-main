import React from "react";
import Image from "next/image";
import diagonalArrow from "../public/diagonal-arrow.png";
import laptop from "../public/laptop.png";
import appWeb from "../public/app-web.png";
import appDelivery from "../public/app-delivery.png";
import appMobile from "../public/app-mobile.png";
import appPerson from "../public/app-person.png";
import { useTheme } from "@/pages/themeContext";

function Reporting() {
  const { darkTheme, toggleTheme } = useTheme();
  const darkThemeClass = darkTheme ? "dark-theme" : "";
  const darkThemeIcon = darkTheme ? "dark-theme-icon" : "";
  return (
    <section className='reporting'>
      <div className="reporting-left">
        <Image
          className="reporting-img"
          src={laptop}
          width="616"
          height="348"
          alt="laptop"
        />{" "}
        <br />
        <button className={`reporting-btn ${darkThemeClass}`}>
          საიტზე გადასვლა{" "}
          <Image
            src={diagonalArrow}
            width="14"
            height="14"
            alt="diagonal-arrow"
          />
        </button>
      </div>

      <div className="reporting-right">
        <h1>
          რეპორტინგის და <br /> მონიტორინგის აპლიკაცია
        </h1>
        <div className="reporting-card-wrapper">
          <div className={`reporting-card ${darkThemeClass}`}>
            <div className="icon-frame-wrapper">
              <div className="icon-frame">
                <Image
                  src={appWeb}
                  width="37"
                  height="37"
                  alt="app-web"
                  className={`reporting-image ${darkThemeIcon}`}
                />
              </div>
            </div>
            <div className="text-wrapper">
              <h3>სამედიცინო მუშაკები</h3>
              <p>
                სამედიცინო მუშაკების წაშლა, დამატება, დეპარტამენტებში
                დანიშვნა...
              </p>
            </div>
          </div>
          <div className={`reporting-card ${darkThemeClass}`}>
            <div className="icon-frame-wrapper">
              <div className="icon-frame">
                <Image
                  src={appDelivery}
                  width="37"
                  height="37"
                  alt="app-web"
                  className={`reporting-image ${darkThemeIcon}`}
                />
              </div>
            </div>
            <div className="text-wrapper">
              <h3>დეპარტამენტები</h3>
              <p>დეპარტამენტების შექმნა, წაშლა, შეცვლა...</p>
            </div>
          </div>
          <div className={`reporting-card ${darkThemeClass}`}>
            <div className="icon-frame-wrapper">
              <div className="icon-frame">
                <Image
                  src={appMobile}
                  width="37"
                  height="37"
                  alt="app-web"
                  className={`reporting-image ${darkThemeIcon}`}
                />
              </div>
            </div>
            <div className="text-wrapper">
              <h3>ექიმების მიმოსვლა</h3>
              <p>
                ექიმების მიმოსვლის ნახვა, სამედიცინო მუშაკების მოწვევა და
                დამატება...
              </p>
            </div>
          </div>
          <div className={`reporting-card ${darkThemeClass}`}>
            <div className="icon-frame-wrapper">
              <div className="icon-frame">
                <Image
                  src={appPerson}
                  width="37"
                  height="37"
                  alt="app-web"
                  className={`reporting-image ${darkThemeIcon}`}
                />
              </div>
            </div>
            <div className="text-wrapper">
              <h3>მკურნალობების დინამიკა</h3>
              <p>
                მკურნალობების დინამიკის ნახვა, გაფილტვრა თარიღის მიხედვით...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reporting;
