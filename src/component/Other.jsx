import React from 'react'
import '../Style/Other.css'
import support from '../assets/ic_support.png'
import settings from '../assets/ic_settings.png'

const Other = () => {
  return (
    <div>
      <div><div className='other' >OTHER</div></div>
      <div className='outer' >
        <img src={support} alt="./img-support" />
        <div className='support' >Support</div>
      </div>
      <div className='outer'>
        <img src={settings} alt="./img-settings" />
        <div className='settings' >
          Settings
        </div>
      </div>
    </div>
  )
}

export default Other
