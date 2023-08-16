import React from 'react'
import Image from 'next/image'
import phoneImg from '../public/phone.png'
import googlePlayImg from '../public/google-play-badge.png'
import appStoreImg from '../public/app-store-badge.png'

function MobileApp() {
  return (
    <section className='phone-app'>
    <div className="mobile-wrapper">
      <Image src={phoneImg} width='320' height='708' alt='reg-img'/>
    </div> 
      <div className="mobile-right">
        <h1>პაციენტის მობილური <br /> აპლიკაცია</h1>
        <p className='mobile-p'>დაარეგისტრირეთ თქვენი კლინიკა აპლიკაცია მედიქლაუდში და გახადეთ თქვენი სამედიცინო სერვისები პაციენტებისთვის უფრო კომფორტული და ხელმისაწვდომი. ჩვენ დაგეხმარებით მოაწესრიგოთ ჯავშნები და შეამციროთ რიგები, პაციენტებს დისტანციური მომსახურება შესთავაზოთ და გამოიყენოთ სამედიცინო საინფორმაციო სისტემა უფასოდ</p>
        <h3>ჩვენი აპლიკაცია ხელმისაწვდომია <br /> როგორც Android ასევე iOS მომხმარებლებისთვის</h3>
        <div className="mobile-downloads">
        <Image src={googlePlayImg} width='192' height='90' alt='app-store-img'/>
        <Image src={appStoreImg} width='192' height='90' alt='app-store-img'/>
        </div>
      </div>
    </section>
  )
}

export default MobileApp
