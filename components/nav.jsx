import React, { useState } from 'react'
import Image from 'next/image'
import arrowDown from '../public/arrow-down.png'
import arrowUp from '../public/arrow-up.png'



function Nav() {
  const [dropdownContent, setDropdownContent] = useState(false) 


  const HandleClick = () => {
    setDropdownContent(!dropdownContent)
  }
  return (
    <nav className='navbar-wrapper'>
      <div className="navbar">
      <div className='nav-label'><div className='Medicloud-icon'></div> <h1>medicloud</h1></div>
     <ul className='nav-links'>
      <li><a href="#">მთავარი</a></li>
      <li><a href="#">კონტაქტი</a></li>
      <li><a href="#">ჩვენს შესახებ</a></li>
      <li><a href="#">ხშირად დასმული კითხვები</a></li>
     </ul>
     <div className="drop-lang">
      <div className="georgian-flag"></div>
      <div className="dropdown">
        <button onClick={HandleClick} className='dropdown-btn'>
          <div className="vector-icon"></div>
          <h3>სისტემაში შესვლა</h3>
          <Image className='nav-arrow' src={dropdownContent ? arrowUp : arrowDown} width='14' height='9' alt='arrow' ></Image>
        </button>
        <div className={dropdownContent ? 'dropdown-content-active' : 'dropdown-content-disabled'}>
          <ul>
            <li className='nav-log-mushaki'><a href="#">როგორც სამედიცინო მუშაკი</a></li>
            <li className='nav-log-klinika'><a href="#">როგორც კლინიკა</a></li>  
          </ul>
        </div>
      </div>
     </div>
     </div>
    </nav>
  )
}

export default Nav
