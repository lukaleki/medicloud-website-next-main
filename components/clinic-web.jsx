import React from 'react'
import Image from 'next/image'
import diagonalArrow from '../public/diagonal-arrow.png'
import clinicImg from '../public/web-clinic-notebook.png'

function ClinicWeb() {
  return (
    <section className='clinic-registration'>
      <div className="reg-left">
        <h1>კლინიკების ვებ აპლიკაცია</h1>
        <p>დაარეგისტრირეთ თქვენი კლინიკა აპლიკაცია მედიქლაუდში და გახადეთ თქვენი სამედიცინო სერვისები პაციენტებისთვის უფრო კომფორტული და ხელმისაწვდომი.</p>
        <button className='web-btn'>საიტზე გადასვლა<Image src={diagonalArrow} width='14' height='14' alt='diagonal-arrow'/></button>
      </div>
      <Image className='clinic-img' src={clinicImg} width='756' height='431' alt='reg-img'/>
    </section>
  )
}

export default ClinicWeb
