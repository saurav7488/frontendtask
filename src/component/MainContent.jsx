import React from 'react'
import '../Style/MainContent.css'
import Threediv from './Threediv'
import TwoDiv from './TwoDiv'
import Anouncement from './Anouncement'
import Recent_Activity from './Recent_Activity'
import LeftBottom from './LeftBottom'
const MainContent = () => {
  return (
    <div>
      <div className='outerdashboard'>
        <div className='innerdashboard' >
          <h1>Dashboard</h1>
        </div>
      </div>
      <div className='fivediv' >
        <div className='alldiv' >
          <div className='threediv' ><Threediv/></div>
          <div className='twodiv' ><TwoDiv/></div>
          <div className='onediv' ><Anouncement/></div>
        </div>
        <div className='allTwodiv' >
          <div className='sidetopdiv' ><Recent_Activity/></div>
          <div className='sidebotttomdiv'><LeftBottom/></div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
