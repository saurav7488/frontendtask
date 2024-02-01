import React from 'react'
import '../Style/Threediv.css'
const Threediv = () => {
  return (
        <div className='main-div' >
            <div className='First-div colorfill1' >
                <div className='availableposition' >Available Position</div>
                <div className='div24'>24</div>
                <div className='urgentlyneeded' >4 Urgently needed</div>
            </div>
            <div className='First-div colorfill2' >
                <div className='availableposition'>Job Open</div>
                <div className='div24'>24</div>
                <div className='urgentlyneeded'>4 Active hiring</div>
            </div>
            <div className='First-div colorfill3' >
                <div className='availableposition'>New Employees</div>
                <div className='div24'>24</div>
                <div className='urgentlyneeded'>4 Department</div>
            </div>
        </div>
  )
}

export default Threediv
