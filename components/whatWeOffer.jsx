// import React, {useState, useRef} from 'react'
// import offerCard from './offer-card'
import Image from 'next/image'
import appWeb from '../public/app-web.png'
import appDelivery from '../public/app-delivery.png'
import appMonitoring from '../public/app-monitoring.png'
import appMobile from '../public/app-mobile.png'
import appPerson from '../public/app-person.png'
import appChip from '../public/app-chip.png'

// function WhatWeOffer() {

//   const sliderRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     const maxIndex = sliderRef.current.children.length - 1;
//     const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : maxIndex;
//     setCurrentIndex(nextIndex);
//     sliderRef.current.style.display = `block`;
//   };

//   const handlePrev = () => {
//     const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
//     setCurrentIndex(prevIndex);
//     sliderRef.current.style.display = 'block';
//   };


//   return (
//     <section id='services'  className='what-we-offer'>
    
//       <h1>რას გთავაზობთ?</h1>

//       <div className="offer-cards" >
        
            // <div data-index='1' ref={sliderRef} className="offer-card">
            //   <div className="icon-frame"><Image src={appWeb} width='32' height='32' alt='app-web' className='offer-image' /></div>
            //   <h3>ვებ და მობილური <br /> აპლიკაცია</h3>
            //   <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            // </div>
            // <div data-index='2' className="offer-card">
            //   <div className="icon-frame"><Image src={appDelivery} width='32' height='32' alt='app-web' className='offer-image' /></div>
            //   <h3>წამლის მიწოდების <br /> გადაწყვეტილება</h3>
            //   <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            // </div>
            // <div data-index='3' className="offer-card">
            //   <div className="icon-frame"><Image src={appMonitoring} width='32' height='32' alt='app-web' className='offer-image' /></div>    
            //   <h3>რეპორტინგის და <br /> მონიტორინგის აპლიკაცია</h3>
            //   <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            // </div>
        
            // <div data-index='4' className="offer-card">
            //   <div className="icon-frame"><Image src={appMobile} width='32' height='32' alt='app-web' className='offer-image' /></div>
            //   <h3>ვებ და მობილური <br /> აპლიკაცია</h3>
            //   <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            // </div>
            // <div data-index='5' className="offer-card">
            //   <div className="icon-frame"><Image src={appPerson} width='32' height='32' alt='app-web' className='offer-image' /></div>
            //   <h3>წამლის მიწოდების <br /> გადაწყვეტილება</h3>
            //   <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            // </div>
            // <div data-index='6' className="offer-card">
            //   <div className="icon-frame"><Image src={appChip} width='32' height='32' alt='app-web' className='offer-image' /></div>    
            //   <h3>რეპორტინგის და <br /> მონიტორინგის აპლიკაცია</h3>
            //   <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            // </div>

            
        
//       </div>
//       <button onClick={handlePrev} id="prevBtn">Previous</button>
//       <button onClick={handleNext} id="nextBtn">Next</button>
//     </section>
//   )
// }

// export default WhatWeOffer

import React, { useState, useRef, useEffect } from 'react';

const OfferCards = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlider, setIsSlider] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderRef.current.children.length);
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isSlider) {
      const cardWidth = sliderRef.current.clientWidth;
      sliderRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      console.log(cardWidth);
    } else {
      sliderRef.current.style.transform = 'translateX(0)';
    }
  }, [isSlider, currentIndex]);


  return (
  <div className="slider-container">
        <div className={isSlider ? 'offer-cards slider-mode' : 'offer-cards'} ref={sliderRef}>
            <div data-index='1' className="offer-card">
               <div className="icon-frame"><Image src={appWeb} width='32' height='32' alt='app-web' className='offer-image' /></div>
               <h3>ვებ და მობილური <br /> აპლიკაცია</h3>
               <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
             </div>
             <div data-index='2' className="offer-card">
               <div className="icon-frame"><Image src={appDelivery} width='32' height='32' alt='app-web' className='offer-image' /></div>
               <h3>წამლის მიწოდების <br /> გადაწყვეტილება</h3>
               <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
             </div>
             <div data-index='3' className="offer-card">
               <div className="icon-frame"><Image src={appMonitoring} width='32' height='32' alt='app-web' className='offer-image' /></div>    
               <h3>რეპორტინგის და <br /> მონიტორინგის აპლიკაცია</h3>
               <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
             </div>
        
             <div data-index='4' className="offer-card">
               <div className="icon-frame"><Image src={appMobile} width='32' height='32' alt='app-web' className='offer-image' /></div>
               <h3>ვებ და მობილური <br /> აპლიკაცია</h3>
               <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
             </div>
             <div data-index='5' className="offer-card">
               <div className="icon-frame"><Image src={appPerson} width='32' height='32' alt='app-web' className='offer-image' /></div>
               <h3>წამლის მიწოდების <br /> გადაწყვეტილება</h3>
               <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
             </div>
             <div className="offer-card">
               <div className="icon-frame"><Image src={appChip} width='32' height='32' alt='app-web' className='offer-image' /></div>    
               <h3>რეპორტინგის და <br /> მონიტორინგის აპლიკაცია</h3>
               <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
             </div>
          
        </div>
      
      {isSlider && (
        <>
          <button onClick={handlePrev} id="prevBtn">
            Previous
          </button>
          <button onClick={handleNext} id="nextBtn">
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default OfferCards;