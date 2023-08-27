import React, { useState, useEffect } from "react";

function MedPartners() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { text: "sponsor 1 sponsor 2 sponsor 3 sponsor 4 sponsor 5 sponsor 6" },
    { text: "sponsor 7 sponsor 8 sponsor 9 sponsor 10 sponsor 11 sponsor 12" },
    {
      text: "sponsor 13 sponsor 14 sponsor 15 sponsor 16 sponsor 17 sponsor 18",
    },
    {
      text: "sponsor 19 sponsor 20 sponsor 21 sponsor 22 sponsor 23 sponsor 24",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide, slides.length]);

  return (
    <section className="med-partners">
      <h1>
        მედიქლაუდში ჩართული <br /> პარტნიორი კლინიკები
      </h1>

      <div className="slider">
        <div className="cosmetic-circle"></div>
        <div className="cosmetic-circle"></div>
        <div className="slider-content">
          <div className={`slide ${activeSlide === 0 ? "active" : ""}`}>
            <h4>{slides[0].text}</h4>
          </div>
          <div className={`slide ${activeSlide === 1 ? "active" : ""}`}>
            <h4>{slides[1].text}</h4>
          </div>
          <div className={`slide ${activeSlide === 2 ? "active" : ""}`}>
            <h4>{slides[2].text}</h4>
          </div>
          <div className={`slide ${activeSlide === 3 ? "active" : ""}`}>
            <h4>{slides[3].text}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedPartners;
