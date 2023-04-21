import React from 'react'
import Image from 'next/image'
import ForeignExp from '../public/foreign-exp.png'
import foreignPeople from '../public/foreign-people.svg'
import foreignDoctor from '../public/foreign-doctor.png'
import diagonalArrow from '../public/diagonal-arrow.png'
import alert from '../public/alert.png'

function Foreign() {
  return (
    <section className='foreign'>
      <div className="foreign-left">
      <Image src={ForeignExp} width='470' height='482' alt='foreign-exp' />
      </div>

      <div className="foreign-right">
        <h1>უცხოური ექსპერტიზა</h1>

        <div className="foreign-card">
          <div className="foreign-frame"><Image src={foreignPeople} width='40' height='40' alt='foreign-people' className='foreign-image' /></div>
          <div className="foreign-card-text">
            <h3>ექიმები</h3>
            <p>პროფესიული ცოდნის გაზიარება და <br /> ონლაინ კონსილიუმების მოწვევა...</p>
          </div>
        </div>

        <div className="foreign-card">
        <div className="foreign-frame"><Image src={foreignDoctor} width='40' height='40' alt='foreign-doctor' className='foreign-image' /></div>
          <div className="foreign-card-text">
            <h3>ექიმები</h3>
            <p>პროფესიული ცოდნის გაზიარება და <br /> ონლაინ კონსილიუმების მოწვევა...</p>
          </div>
        </div>

        <div className="foreign-card">
        <div className="foreign-frame-alert"><Image src={alert} width='24' height='24' alt='alert' className='foreign-allert' /></div>
          <div className="foreign-alert-text">
            <h3>მალე...</h3>
          </div>
        </div>

        <button className='foreign-btn'>დეტალურად <Image src={diagonalArrow} width='14' height='14' alt='diagonal-arrow'/></button>
      </div>
    </section>
  )
}

export default Foreign
