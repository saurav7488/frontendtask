import React from 'react'
import '../Style/LeftBottom.css'
import dates from '../assets/Frame 64.png'
import chat from '../assets/carbon_overflow-menu-horizontal.png'

const LeftBottom = () => {
    return (
        <div className='left_bottom' >
            <div className='upcommingscheduled' >
                <h1 className='upcomingheader' >Upcoming Schedule</h1>
                <img className='upcoming_img' src={dates} alt="/upcoming-scheduled-img" />
            </div>
            <div className='layoutpriority' >
                <h1>Priority</h1>
            </div>
            <div className='middle-left' >
                <div className='left-both'>
                    <h1 className='left-header' >Review candidate applications</h1>
                    <p className='left-para' >Today - 11:30 AM</p>
                </div>
                <img className='chatleft' src={chat} alt="./pin-img" />
            </div>
            <div className='layoutpriority1' >
                <h1>Other</h1>
            </div>

            <div className='middle-left1' >
                <div className='left-both'>
                    <h1 className='left-header' >Interview with candidates</h1>
                    <p className='left-para' >Today - 10:30 AM</p>
                </div>
                <img className='chatleft1' src={chat} alt="./pin-img" />
            </div>

            <div className='middle-left2' >
                <div className='left-both'>
                    <h1 className='left-header' >Short meeting </h1>
                    <p className='left-para' >Today - 11:30 AM</p>
                </div>
                <img className='chatleft2' src={chat} alt="./pin-img" />
            </div>

            <div className='footerleftbottom' >
            <h1 className='allAnnouncement1' >Create a New Schedule</h1>
            </div>
        </div>
    )
}

export default LeftBottom
