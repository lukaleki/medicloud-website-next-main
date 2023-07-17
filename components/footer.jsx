import React from 'react'
import Image from 'next/image'
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

function Footer() {
  return (
    <footer>
        <a href="#">თავში დაბრუნება <Image src={collapse} width='22' height='22' alt='arrow-right'/></a>   

      <div className="footer-content">
        <div className="footer-medicloud-info">
            <div className="info-title">
                <Image src={medicloud} width='63' height='64' alt='medicloud-icon'/>
                <div className="title-wrapper">
                    <h1>medicloud</h1>
                    <hr />
                    <h4>healthcare platform</h4>
                </div>
            </div>
            <p>კომპანიის შესახებ ტექსტი, ცბცვბვცბვცბ ვცვბცვნვბნხბცბბ ცბცვბტ გრეტყეჯრი  დფგიდფოგმდფ ვცბვცბ ვბვბნვბნნვნვბ ვნვბნვბვნ</p>
          <div className="footer-social">
           <div className="footer-icon"><Image src={facebook} width='8' height='14' alt='facebook-icon'/></div> 
           <div className="footer-icon"><Image src={instagram} width='13' height='13' alt='instagram-icon'/></div> 
           <div className="footer-icon"><Image src={twitter} width='14' height='11' alt='twitter-icon'/></div> 
           <div className="footer-icon"><Image src={youtube} width='17' height='12' alt='youtube-icon'/></div> 
          </div>
        </div>
        <div className="footer-links">
            <h3>მნიშვნელოვანი ლინკები</h3>
            <hr />
            <a href="#">მთავარი გვერდი</a>
            <a href="#contact">კონტაქტი</a>
            <a href="#questions">ხშირად დასმული კითხვები</a>
            <a href="#services">სერვისები</a>
            <a href="#aboutUs">ჩვენს შესახებ</a>
        </div>
        <div className="footer-contact">
            <h3>კონტაქტი</h3>
            <hr />
            <div className="footer-contact-links"><Image src={call} width='32' height='32' alt='call-icon'/>+021213414115151</div> 
            <div className="footer-contact-links"><Image src={email} width='32' height='32' alt='email-icon'/>hello1234@info.com</div> 
            <div className="footer-contact-links"><Image src={location} width='32' height='32' alt='location-icon'/><div className="link-wrapper">ალექსანდრე <br /> გობრონიშვილის გამზირი 47</div></div> 
        </div>
        <div className="footer-sub">
            <h3>გამოწერა</h3>
            <hr />
            <div className="sub-wrapper">
              <Image src={sendIcon} width='72' height='72' alt='send-icon'/>
              <p>ჩაწერეთ თქვენი მეილი რადგან პირველებმა შეიტყოთ ჩვენი პროდუქტების უახლესი ამბები</p>
            </div>
            <form>
                <input placeholder='ელ-ფოსტა' type="email" />
                <button><div className="button-wrapper">გამოწერა <Image src={sendWhite} width='18' height='18' alt='send-icon'/></div></button>
            </form>
        </div>

       

      </div>

      <div className="footer-terms-conditions">
            <a href="#">Terms & Conditions</a> <br /> |
            <a href="#">Privacy Policy</a> <br /> |
            <a href="#">Sitemap</a> <br /> |
            <a href="#">Disclaimer</a> <br /> |
        </div>
    </footer>
  )
}

export default Footer
