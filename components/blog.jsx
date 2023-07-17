import React from 'react'
import Image from 'next/image'
import arrowRight from '../public/arrow-right.png'
import blogImg from '../public/blog-img.png'
import calendar from '../public/ic-calendar.png'
import cardImg from '../public/card-img.png'

function Blog() {
  return (
    <section className='blog'>
        <div className="blog-title"><h1>ბლოგი</h1><Image src={arrowRight} width='32' height='32' alt='arrow-right'/></div>
        <div className="blog-content">
          <div className="blog-left">
            <Image className='blog-img' src={blogImg} width='561' height='319' alt='blog-img'/>
            <div className="blog-info">
                <h1>რამდენიმე რჩევა, თუ როგორ აირიდო სეზონური გრიპი...</h1>

                <div className="blog-info-description">
                <Image src={calendar} width='22' height='22' alt='arrow-right'/> <p>26 თებერვალი 2023</p>
                <h4><strong>სრულად ნახვა</strong></h4> <Image src={arrowRight} width='32' height='32' alt='arrow-right'/>
                </div>
            </div>
          </div>
          <div className="blog-right">
            <div className="blog-info-card">
              <Image src={cardImg} width='64' height='75' alt='card-img'/>
              <div className="card-wrapper">
                <h4>ნვნვნნნ ფდჰფტტყუტ ტუყიცვბვნვბ ნვხვცნგგჰჯგჰ ნმბნმბ ნჰგჰვცვნვბმბვ</h4>
                <p>26 თებერვალი 2023</p>
              </div>
            </div>
            <div className="blog-info-card">
              <Image src={cardImg} width='64' height='75' alt='card-img'/>
              <div className="card-wrapper">
                <h4>ნვნვნნნ ფდჰფტტყუტ ტუყიცვბვნვბ ნვხვცნგგჰჯგჰ ნმბნმბ ნჰგჰვცვნვბმბვ</h4>
                <p>26 თებერვალი 2023</p>
              </div>
            </div>
            <div className="blog-info-card">
              <Image src={cardImg} width='64' height='75' alt='card-img'/>
              <div className="card-wrapper">
                <h4>ნვნვნნნ ფდჰფტტყუტ ტუყიცვბვნვბ ნვხვცნგგჰჯგჰ ნმბნმბ ნჰგჰვცვნვბმბვ</h4>
                <p>26 თებერვალი 2023</p>
              </div>
            </div>
          </div>
        </div>
        
      
    </section>
  )
}

export default Blog
