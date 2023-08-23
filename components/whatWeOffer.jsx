import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import appWeb from "../public/app-web.png";
import appDelivery from "../public/app-delivery.png";
import appMonitoring from "../public/app-monitoring.png";
import appMobile from "../public/app-mobile.png";
import appPerson from "../public/app-person.png";
import appChip from "../public/app-chip.png";
import sliderArrow from "../public/slider-arrow.png";

const OfferCards = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlider, setIsSlider] = useState(false);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % sliderRef.current.children.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderRef.current.children.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSlider(window.innerWidth <= 376);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSlider) {
      const cardWidth = sliderRef.current.clientWidth;
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
      console.log(cardWidth);
    } else {
      sliderRef.current.style.transform = "translateX(0)";
    }
  }, [isSlider, currentIndex]);

  return (
    <section className="what-we-offer-wrapper">
      <div className='what-we-offer'>
        <h1>რას გთავაზობთ</h1>
        <div
          className={isSlider ? "offer-cards slider-mode" : "offer-cards"}
          ref={sliderRef}
        >
          <div className='offer-card'>
            <div className="icon-frame">
              <Image
                src={appWeb}
                width="32"
                height="32"
                alt="app-web"
                className='offer-Image'
              />
            </div>
            <h3>
              ვებ და მობილური <br /> აპლიკაცია
            </h3>
            <p>
              ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ
              ვნვბნ
            </p>
          </div>
          <div className='offer-card'>
            <div className="icon-frame">
              <Image
                src={appDelivery}
                width="32"
                height="32"
                alt="app-web"
                className='offer-Image'
              />
            </div>
            <h3>
              წამლის მიწოდების <br /> გადაწყვეტილება
            </h3>
            <p>
              ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ
              ვნვბნ
            </p>
          </div>
          <div className='offer-card'>
            <div className="icon-frame">
              <Image
                src={appMonitoring}
                width="32"
                height="32"
                alt="app-web"
                className='offer-Image'
              />
            </div>
            <h3>
              რეპორტინგის და <br /> მონიტორინგის აპლიკაცია
            </h3>
            <p>
              ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ
              ვნვბნ
            </p>
          </div>

          <div className='offer-card'>
            <div className="icon-frame">
              <Image
                src={appMobile}
                width="32"
                height="32"
                alt="app-web"
                className='offer-Image'
              />
            </div>
            <h3>
              ვებ და მობილური <br /> აპლიკაცია
            </h3>
            <p>
              ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ
              ვნვბნ
            </p>
          </div>
          <div className='offer-card'>
            <div className="icon-frame">
              <Image
                src={appPerson}
                width="32"
                height="32"
                alt="app-web"
                className='offer-Image'
              />
            </div>
            <h3>
              წამლის მიწოდების <br /> გადაწყვეტილება
            </h3>
            <p>
              ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ
              ვნვბნ
            </p>
          </div>
          <div className='offer-card'>
            <div className="icon-frame">
              <Image
                src={appChip}
                width="32"
                height="32"
                alt="app-web"
                className='offer-Image'
              />
            </div>
            <h3>
              რეპორტინგის და <br /> მონიტორინგის აპლიკაცია
            </h3>
            <p>
              ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ
              ვნვბნ
            </p>
          </div>
        </div>

        {isSlider && (
          <>
            <button onClick={handlePrev} id="prevBtn">
              <Image
                style={{ rotate: "180deg" }}
                src={sliderArrow}
                width="10"
                height="8"
                alt="slider-arrow"
                className="slider-arrow"
              />
            </button>
            <button onClick={handleNext} id="nextBtn">
              <Image
                src={sliderArrow}
                width="10"
                height="8"
                alt="slider-arrow"
                className="slider-arrow"
              />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default OfferCards;
