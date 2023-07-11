import React from 'react'
import Image from 'next/image'
import diagonalArrow from '../public/diagonal-arrow.png'
import android from '../public/Android.png'
import deliveryMap from '../public/delivery-map.png'
import phone from '../public/Phone.png'

function MedDelivery() {
  return (
    <section className='med-delivery'>
        <div className="delivery-left-wrapper">
          <h1 className='delivery-title'>წამლის მიწოდების <br /> გადაწყვეტილება</h1>
          <div className="delivery-left">
          <div className="delivery-left-first-part">
            <h1 className='delivery-circle'>01</h1> <br /> <div className="delivery-line"></div> <br /> <h1 className='delivery-circle-hollow'>02</h1>
          </div>
          <div className="delivery-left-second-part">
            <h2>ელექტრონული რეცეპტები</h2>
            <p>ექიმის მიერ გაცემული რეცეპტის გადამოწმება და რაოდენობების კონტროლი აფთიაქში.</p>
            <br />
            <br />
            <h2>მიწოდების სერვისი</h2>
            <p>ექიმის გამოწერილი მედიკამენტების აპლიკაციიდანვე მიწოდება და ფასების შედარება.</p>
          </div>
          </div>
          <button className='delivery-btn'>დეტალურად <Image src={diagonalArrow} width='14' height='14' alt='diagonal-arrow'/></button>
        </div>
        <div className="delivery-right">
          <Image className='delivery-android' src={android} width='360' height='559' alt='android'/>
          <Image className='delivery-phone' src={phone} width='254' height='550' alt='phone'/>
          <Image className='delivery-map' src={deliveryMap} width='330' height='462' alt='delivery-map'/>
        </div>
    </section>
  )
}

export default MedDelivery