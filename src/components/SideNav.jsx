import React from 'react'
import '../styles/sidenav.css'
import BrandLogo from '../utils/BrandLogo'
import PropertyLogo from '../utils/PropertyLogo'
import AssistanceLogo from '../utils/AssistanceLogo'
import ReceivedIntrestLogo from '../utils/ReceivedIntrestLogo'
import SentIntrestLogo from '../utils/SentIntrestLogo'
import PropertyViews from '../utils/PropertyViews'
import TariffPlan from '../utils/TariffPlan'

export default function SideNav() {
  const array = [
    {
      logo: <PropertyLogo />,
      text: 'Property',
      style : 'prop'
    },
    {
      logo: <AssistanceLogo />,
      text: 'PPD Assistance',
      style : 'assist'
    },
    {
      logo: <ReceivedIntrestLogo />,
      text: 'Received Intrest',
      style : 'receive'
    },
    {
      logo: <SentIntrestLogo />,
      text: 'Sent Intrest',
      style : 'sent'
    },
    {
      logo: <PropertyViews />,
      text: 'Property Views',
      style : 'views'
    },
    {
      logo: <TariffPlan />,
      text: 'Tariff Plan',
      style : 't-plan'
    }
  ]

  return (
    // <div className='main-container green-bg'>
    <>
    <div className='green-bg side-nav'>
      <div className='logo'><BrandLogo /></div>
      <div className="options-container">
      {
        array.map((item) => {
          return (
            <div key={item.text} className='options' title={item.text}>
              {item.logo}<p className={`non-selec-clr hidden-text ${item.style}`}>{item.text}</p>
            </div>
          )
        })
      }
      </div>
    </div>
    </>
    // </div>
  )
}
