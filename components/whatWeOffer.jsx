import React from 'react'
import Image from 'next/image'
import appWeb from '../public/app-web.png'
import appDelivery from '../public/app-delivery.png'
import appMonitoring from '../public/app-monitoring.png'
import appMobile from '../public/app-mobile.png'
import appPerson from '../public/app-person.png'
import appChip from '../public/app-chip.png'

function WhatWeOffer() {
  return (
    <section id='services' className='what-we-offer'>
      <h1>რას გთავაზობთ?</h1>

      <div className="offer-cards">
        <div className="offer-cards-first-row">
            <div className="offer-card">
            <div className="icon-frame"><Image src={appWeb} width='32' height='32' alt='app-web' className='offer-image' /></div>
            <h3>ვებ და მობილური <br /> აპლიკაცია</h3>
            <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            </div>
            <div className="offer-card">
            <div className="icon-frame"><Image src={appDelivery} width='32' height='32' alt='app-web' className='offer-image' /></div>
            <h3>წამლის მიწოდების <br /> გადაწყვეტილება</h3>
            <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            </div>
            <div className="offer-card">
            <div className="icon-frame"><Image src={appMonitoring} width='32' height='32' alt='app-web' className='offer-image' /></div>    
            <h3>რეპორტინგის და <br /> მონიტორინგის აპლიკაცია</h3>
            <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            </div>
        </div>
        <div className="offer-cards-second-row">
            <div className="offer-card">
            <div className="icon-frame"><Image src={appMobile} width='32' height='32' alt='app-web' className='offer-image' /></div>
            <h3>ვებ და მობილური <br /> აპლიკაცია</h3>
            <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            </div>
            <div className="offer-card">
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
      </div>
    </section>
  )
}

export default WhatWeOffer
