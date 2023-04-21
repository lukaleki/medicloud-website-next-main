import React from 'react'
import Image from 'next/image'
import diagonalArrow from '../public/diagonal-arrow.png'
import laptop from '../public/laptop.png'
import appWeb from '../public/app-web.png'
import appDelivery from '../public/app-delivery.png'
import appMobile from '../public/app-mobile.png'
import appPerson from '../public/app-person.png'

function Reporting() {
  return (
    <section className='reporting'>
      <div className="reporting-left">
      <Image className='delivery-img' src={laptop} width='616' height='348' alt='laptop'/> <br />
      <button className='reporting-btn'>საიტზე გადასვლა <Image src={diagonalArrow} width='14' height='14' alt='diagonal-arrow'/></button>
      </div>

      
      <div className="reporting-right">
        <h1>რეპორტინგის და <br /> მონიტორინგის აპლიკაცია</h1>
        <div className="reporting-cards-first-row">
            <div className="reporting-card">
            <div className="icon-frame"><Image src={appWeb} width='32' height='32' alt='app-web' className='reporting-image' /></div>
            <h3>სამედიცინო მუშაკები</h3>
            <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            </div>
            <div className="reporting-card">
            <div className="icon-frame"><Image src={appDelivery} width='32' height='32' alt='app-web' className='reporting-image' /></div>
            <h3>დეპარტამენტები</h3>
            <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            </div>
        </div>
        <div className="reporting-cards-second-row">
            <div className="reporting-card">
            <div className="icon-frame"><Image src={appMobile} width='32' height='32' alt='app-web' className='reporting-image' /></div>
            <h3>ექიმების მიმოსვლა</h3>
            <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            </div>
            <div className="reporting-card">
            <div className="icon-frame"><Image src={appPerson} width='32' height='32' alt='app-web' className='reporting-image' /></div>
            <h3>მკურნალობების დინამიკა</h3>
            <p>ცვბცვბცვბცვბცვბვცბ ცვ ბცბტყუყიუტყ ტზხ ყიტყი ტცხვყ უტყუტფჰფფგჰვბვნ ვნვბნ</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Reporting
