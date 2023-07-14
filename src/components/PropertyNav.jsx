import React, { useState } from 'react'
import '../styles/propertyNav.css'
import { Link } from 'react-router-dom'

export default function PropertyNav({ section }) {

  const intialState = {
    basic: [],
    property: [],
    general: [],
    location: [],
  }
  const [style, setStyle] = useState({
    ...intialState,
    [section]: ["option-active", "option-number-active"]
  });

  const optionsData = [
    {
      toRoute: '/basicinfo',
      num: 1,
      activeClass: style.basic[0],
      activeNum: style.basic[1],
      text: 'Basic Info'
    },
    {
      toRoute: '/propertydetails',
      num: 2,
      activeClass: style.property[0],
      activeNum: style.property[1],
      text: 'Property Detail'
    },
    {
      toRoute: '/generalinfo',
      num: 3,
      activeClass: style.general[0],
      activeNum: style.general[1],
      text: 'General Info'
    },
    {
      toRoute: '/locationinfo',
      num: 4,
      activeClass: style.location[0],
      activeNum: style.location[1],
      text: 'Location Info'
    },
  ]

  return (
    <div>
      <div className='add-new-property txt-clr'>ADD NEW PROPERTY</div>
      <div className='property-nav-container txt-clr'>

        {
          optionsData.map((item) => {
            return (
              <Link
                to={item.toRoute}
                key={item.num}
                className='option-stages-nav'
                >
                <button
                  title={item.text}
                  className={`property-nav-option txt-clr ${item.activeClass}`}>
                  <span 
                  className={`number-in-button ${item.activeNum}`}>{item.num}</span>
                  <span 
                  className='property-nav-option-text'>{item.text}</span>
                </button>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
