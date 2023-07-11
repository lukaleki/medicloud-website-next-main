import React from 'react'
import Image from 'next/image'
import vectorDown from '../public/vector-down.png'
import clinicMap from '../public/clinic-map.png'
import diagonalArrow from '../public/diagonal-arrow.png'

function Questions() {
  return (
    <section id='questions' className='questions'>
      <h1>ხშირად დასმული <br /> კითხვები</h1>
      <div className="cards">
        <div className="cards-row">
        <div className="card"><Image className='vector' src={vectorDown} width='19' height='20' alt='vector-down'/><h2>ვინ ვართ ჩვენ?</h2></div>
        <div className="card"><Image className='vector' src={vectorDown} width='19' height='20' alt='vector-down'/><h2>რამდენად გამოსადეგია ჩვენი აპლიკაცია?</h2></div>
        <div className="card"><Image className='vector' src={vectorDown} width='19' height='20' alt='vector-down'/><h2>როგორ დავარეგისტრირო კლინიკა?</h2></div>
        </div>
        <div className="cards-row">
        <div className="card"><Image className='vector' src={vectorDown} width='19' height='20' alt='vector-down'/><h2>რას მიიღებთ მედიქლაუდში ჩართვით?</h2></div>
        <div className="card"><Image className='vector' src={vectorDown} width='19' height='20' alt='vector-down'/><h2>როგორ გადმოვწერო აპლიკაცია?</h2></div>
        <div className="card"><Image className='vector' src={vectorDown} width='19' height='20' alt='vector-down'/><h2>რას გთავაზობთ?</h2></div>
        </div>
      </div>

      <div id='contact' className="contact">
        <div className="contact-left">
          <Image className='clinic-map' src={clinicMap} width='300' height='551' alt='clinic-map'/> <div className="contact-line"></div> <h3>კონტაქტი</h3>
        </div>
        <div className="contact-right">
            <h2>გაქვთ შეკითხვები?</h2>
            <h3>შეავსეთ ქვემოთ მითითებული საკონტაქტო ფორმა <br /> და გამოგვიგზავნეთ კითხვები</h3>
            <form>
              <input className='contact-username' placeholder='სახელი' type='text' />
              <input className='contact-email' placeholder='ელ-ფოსტა' type='email'/> 
            </form>
            <textarea placeholder='ჩაწერეთ ტექსტი' name="w3review" rows="10" cols="68"></textarea> 
            <button><h2>გაგზავნა</h2><Image src={diagonalArrow} width='14' height='14' alt='clinic-map'/></button>  
        </div>
      </div>
    </section>
  )
}

export default Questions
