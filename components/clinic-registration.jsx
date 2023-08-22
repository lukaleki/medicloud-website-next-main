import React from 'react'
import Image from 'next/image'
import diagonalArrow from '../public/diagonal-arrow.png'
import regImg from '../public/reg-img.png'
import regImgDark from '../public/reg-img-dark.png'
import { useTheme } from '@/pages/themeContext'



function ClinicRegistration() {
  const { darkTheme, toggleTheme } = useTheme();
  const darkThemeClass =  darkTheme ? 'dark-theme' : ''

  return (
    <section id='aboutUs' className='clinic-registration'>
      <div className="reg-left">
        <h1>ყველაზე სრულყოფილი <br /> ჯანდაცვის პლატფორმა</h1>
        <p>დაარეგისტრირეთ თქვენი კლინიკა აპლიკაცია მედიქლაუდში და გახადეთ თქვენი სამედიცინო სერვისები პაციენტებისთვის უფრო კომფორტული და ხელმისაწვდომი.</p>
        <button className={`reg-btn ${darkThemeClass}`}>კლინიკების რეგისტრაცია <Image src={diagonalArrow} width='14' height='14' alt='diagonal-arrow'/></button>
      </div>
      <Image className='clinic-reg-img' src={darkTheme ? regImgDark : regImg} width='618' height='464' alt='reg-img'/> 
    </section>
  )
}

export default ClinicRegistration
