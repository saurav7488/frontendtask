import React from 'react'
import '../Style/Navbar.css'
import inputIcon from '../assets/Frame 9.png'
import LeftNavbar from './LeftNavbar'
const Navbar = () => {
    return (
        <div>
            <div className='outerNavbar' >
                <div className='innerNavbar' >
                    {/* Search bar */}
                    <div className='outerType' >
                          <span><input className='inputType' type="text" placeholder='Search' /> </span>
                          <span><img className='icon'  src={inputIcon} alt="./input-icon" /></span>
                    </div>
                    {/* Name bar */}
                    <div className='leftNavbar' ><LeftNavbar/></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
