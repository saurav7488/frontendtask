import React from 'react'
import '../Style/Left.css'
import logo from '../assets/Group 29966.png'
import Main_menu from './Main_menu'
import Logo from './Logo'
import Other from './Other'
const Left = () => {
  return (
    <div className='left-container' >
      {/* For Logo */}
      <div className='outer-logo' ><div className='logo-container' ><Logo /></div></div>
      {/* for Main Menu */}
      <div className='outer-main-menu' >
        <div className='main-menu' >
          <Main_menu />
        </div>
     
      {/* For others */}
      
      <Other/>
      </div>
        
    </div>
  )
}

export default Left
