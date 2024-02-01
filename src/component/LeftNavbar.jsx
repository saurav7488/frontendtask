import React from 'react'
import '../Style/LeftNavbar.css'
import bell from '../assets/ic_round-notifications.png'
import msg from '../assets/bi_chat-left-dots-fill.png'
import profile from '../assets/unsplash_OH2S9XAcLhc (1).png'
import signFrom from '../assets/Frame 10.png'
const LeftNavbar = () => {
  return (
    <div className='first' >
      <div className='bell' >
        <img src={bell} alt="./img-icon" />
      </div>
      <div className='bell' >
        <img src={msg} alt=".img-icon" />
      </div>

      <div className='second' >
        <img className='profileImg bello' src={profile} alt="./profile-img" />
      </div>
      <div className='name' >
        <h2>Admirra John</h2>
      </div>
      <div className='bell1' >
        <img src={signFrom} alt="./sign" />
      </div>
    </div>
  )
}

export default LeftNavbar
