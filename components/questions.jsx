import React from "react";
import Image from "next/image";
import vectorDown from "../public/vector-down.png";
import clinicMap from "../public/clinic-map.png";
import diagonalArrow from "../public/diagonal-arrow.png";

function Questions() {
  return (
    <section id="questions" className='questions-wrapper'>
      <div className='questions'>
        <h1>
          ხშირად დასმული <br /> კითხვები
        </h1>
        <div className="cards">
          <div className='card'>
            <Image
              className="vector"
              src={vectorDown}
              width="19"
              height="20"
              alt="vector-down"
            />
            <h2>ვინ ვართ ჩვენ?</h2>
          </div>
          <div className='card'>
            <Image
              className="vector"
              src={vectorDown}
              width="19"
              height="20"
              alt="vector-down"
            />
            <h2>რამდენად გამოსადეგია ჩვენი აპლიკაცია?</h2>
          </div>
          <div className='card'>
            <Image
              className="vector"
              src={vectorDown}
              width="19"
              height="20"
              alt="vector-down"
            />
            <h2>როგორ დავარეგისტრირო კლინიკა?</h2>
          </div>
          <div className='card'>
            <Image
              className="vector"
              src={vectorDown}
              width="19"
              height="20"
              alt="vector-down"
            />
            <h2>რას მიიღებთ მედიქლაუდში ჩართვით?</h2>
          </div>
          <div className='card'>
            <Image
              className="vector"
              src={vectorDown}
              width="19"
              height="20"
              alt="vector-down"
            />
            <h2>როგორ გადმოვწერო აპლიკაცია?</h2>
          </div>
          <div className='card'>
            <Image
              className="vector"
              src={vectorDown}
              width="19"
              height="20"
              alt="vector-down"
            />
            <h2>რას გთავაზობთ?</h2>
          </div>
        </div>

        <div id="contact" className="contact">
          <div className="contact-left">
            <Image
              className="clinic-map"
              src={clinicMap}
              width="700"
              height="551"
              alt="clinic-map"
            />
            <div className="contact-line">
              <h3>კონტაქტი</h3>
            </div>
          </div>
          <div className="contact-right">
            <h2>გაქვთ შეკითხვები?</h2>
            <h3>
              შეავსეთ ქვემოთ მითითებული საკონტაქტო ფორმა და გამოგვიგზავნეთ
              კითხვები
            </h3>
            <form>
              <input
                className='contact-username'
                placeholder="სახელი"
                type="text"
              />
              <input
                className='contact-email'
                placeholder="ელ-ფოსტა"
                type="email"
              />
            </form>
            <textarea
              placeholder="ჩაწერეთ ტექსტი"
              name="w3review"
              rows="10"
              cols="68"
            ></textarea>
            <button>
              გაგზავნა
              <Image
                src={diagonalArrow}
                width="14"
                height="14"
                alt="clinic-map"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
