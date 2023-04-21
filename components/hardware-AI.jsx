import React from 'react'
import Image from 'next/image'
import appChip from '../public/app-chip.png'
import diagonalArrow from '../public/diagonal-arrow.png'
import AiIcon from '../public/hardware-AI.png'
import hardwareImg from '../public/hardware-img.png'

function HardwareAI() {
  return (
    <section className='hardware'>
      <div className="hardware-left">
        <h1>უცხოური ექსპერტიზა</h1>

        <div className="hardware-card">
          <div className="hardware-frame"><Image src={appChip} width='40' height='40' alt='hardware-people' className='hardware-image' /></div>
          <div className="hardware-card-text">
            <h3>ექიმები</h3>
            <p>პროფესიული ცოდნის გაზიარება და <br /> ონლაინ კონსილიუმების მოწვევა...</p>
          </div>
        </div>

        <div className="hardware-card">
        <div className="hardware-frame"><Image src={AiIcon} width='40' height='40' alt='hardware-doctor' className='hardware-image' /></div>
          <div className="hardware-card-text">
            <h3>ექიმები</h3>
            <p>პროფესიული ცოდნის გაზიარება და <br /> ონლაინ კონსილიუმების მოწვევა...</p>
          </div>
        </div>

        <button className='hardware-btn'>დეტალურად <Image src={diagonalArrow} width='14' height='14' alt='diagonal-arrow'/></button>
      </div>

      <div className="hardware-right">
        <Image src={hardwareImg} width='557' height='418' alt='AI-icon'/>
      </div>
    </section>
  )
}

export default HardwareAI
