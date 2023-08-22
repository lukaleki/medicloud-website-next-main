import React from "react";
import Image from "next/image";
import collapse from "../public/ic-collapse.png";
import medicloud from "../public/Medicloud-icon.png";
import facebook from "../public/facebook.png";
import youtube from "../public/youtube.png";
import instagram from "../public/logo-instagram.png";
import twitter from "../public/logo-twitter.png";
import call from "../public/call-orange.png";
import email from "../public/email-orange.png";
import location from "../public/location-orange.png";
import sendIcon from "../public/send-orange.png";
import sendWhite from "../public/send.png";
import sliderArrow from "../public/slider-arrow.png";
import { useTheme } from "@/pages/themeContext";

function Footer() {
  const [isSlider, setIsSlider] = React.useState(false);
  const [dropdownSub, setDropdownSub] = React.useState(false);
  const [dropdownLinks, setDropdownLinks] = React.useState(false);
  const [dropdownContact, setDropdownContact] = React.useState(false);

  const { darkTheme, toggleTheme } = useTheme();
  const darkThemeLighter = darkTheme ? "dark-theme-lighter" : "";

  React.useEffect(() => {
    const handleResize = () => {
      setIsSlider(window.innerWidth <= 376);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const HandleLinksClick = () => {
    setDropdownLinks(!dropdownLinks);
    setDropdownSub(false);
    setDropdownContact(false);
  };

  const HandleContactClick = () => {
    setDropdownContact(!dropdownContact);
    setDropdownSub(false);
    setDropdownLinks(false);
  };

  const HandleSubClick = () => {
    setDropdownSub(!dropdownSub);
    setDropdownLinks(false);
    setDropdownContact(false);
  };

  return (
    <footer>
      <a className="footer-main-link" href="#">
        თავში დაბრუნება{" "}
        <Image src={collapse} width="22" height="22" alt="arrow-right" />
      </a>

      <div className="footer-content">
        <div className="footer-medicloud-info">
          <div className="info-title">
            <Image
              src={medicloud}
              width="63"
              height="64"
              alt="medicloud-icon"
            />
            <div className="title-wrapper">
              <h1>medicloud</h1>
              <div className="title-line"></div>
              <h4>healthcare platform</h4>
            </div>
          </div>
          <p>
            კომპანიის შესახებ ტექსტი, ცბცვბვცბვცბ ვცვბცვნვბნხბცბბ ცბცვბტ
            გრეტყეჯრი დფგიდფოგმდფ ვცბვცბ ვბვბნვბნნვნვბ ვნვბნვბვნ
          </p>

          <div className="footer-social">
            <div className="footer-icon">
              <Image src={facebook} width="8" height="14" alt="facebook-icon" />
            </div>
            <div className="footer-icon">
              <Image
                src={instagram}
                width="13"
                height="13"
                alt="instagram-icon"
              />
            </div>
            <div className="footer-icon">
              <Image src={twitter} width="14" height="11" alt="twitter-icon" />
            </div>
            <div className="footer-icon">
              <Image src={youtube} width="17" height="12" alt="youtube-icon" />
            </div>
          </div>
        </div>
        {isSlider && (
          <dropdown>
            <button onClick={HandleLinksClick} className="dropdown-btn">
              მნიშვნელოვანი ლინკები{" "}
              <Image
                className={
                  dropdownLinks ? "dropdown-arrow-down" : "dropdown-arrow-up"
                }
                src={sliderArrow}
                width="15"
                height="25"
                alt="dropdown-arrow-icon"
              />
            </button>
          </dropdown>
        )}
        <div
          className={
            dropdownLinks ? "footer-links active" : "footer-links disabled"
          }
        >
          <h3>მნიშვნელოვანი ლინკები</h3>
          <hr />
          <a href="#">მთავარი გვერდი</a>
          <a href="#contact">კონტაქტი</a>
          <a href="#questions">ხშირად დასმული კითხვები</a>
          <a href="#services">სერვისები</a>
          <a href="#aboutUs">ჩვენს შესახებ</a>
        </div>
        {isSlider && (
          <dropdown>
            <button onClick={HandleContactClick} className="dropdown-btn">
              კონტაქტი{" "}
              <Image
                className={
                  dropdownContact ? "dropdown-arrow-down" : "dropdown-arrow-up"
                }
                src={sliderArrow}
                width="15"
                height="25"
                alt="dropdown-arrow-icon"
              />
            </button>
          </dropdown>
        )}
        <div
          className={
            dropdownContact
              ? "footer-contact active"
              : " footer-contact disabled"
          }
        >
          <h3>კონტაქტი</h3>
          <hr />
          <div className="footer-contact-links">
            <Image src={call} width="32" height="32" alt="call-icon" />
            +021213414115151
          </div>
          <div className="footer-contact-links">
            <Image src={email} width="32" height="32" alt="email-icon" />
            hello1234@info.com
          </div>
          <div className="footer-contact-links">
            <Image src={location} width="32" height="32" alt="location-icon" />
            <div className="link-wrapper">
              ალექსანდრე <br /> გობრონიშვილის გამზირი 47
            </div>
          </div>
        </div>
        {isSlider && (
          <dropdown>
            <button onClick={HandleSubClick} className="dropdown-btn">
              გამოწერა{" "}
              <Image
                className={
                  dropdownSub ? "dropdown-arrow-down" : "dropdown-arrow-up"
                }
                src={sliderArrow}
                width="15"
                height="25"
                alt="dropdown-arrow-icon"
              />
            </button>
          </dropdown>
        )}
        <div
          className={dropdownSub ? "footer-sub active" : "footer-sub disabled"}
        >
          <h3>გამოწერა</h3>
          <hr />
          <div className="sub-wrapper">
            <Image src={sendIcon} width="72" height="72" alt="send-icon" />
            <p>
              ჩაწერეთ თქვენი მეილი რადგან პირველებმა შეიტყოთ ჩვენი პროდუქტების
              უახლესი ამბები
            </p>
          </div>
          <form>
            <input placeholder="ელ-ფოსტა" type="email" />
            <button>
              <div className="button-wrapper">
                გამოწერა{" "}
                <Image src={sendWhite} width="18" height="18" alt="send-icon" />
              </div>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-terms-conditions">
        <p>© 2023 Medicloud LLC. All rights reserved</p>
        <div className="centered-links">
          <a href="#">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
