import React from 'react'
import '../Style/Anouncement.css'
import dates from '../assets/Frame 64.png'
import pin from '../assets/bi_pin-angle-fill.png'
import chat from '../assets/carbon_overflow-menu-horizontal.png'
const Anouncement = () => {
    return (
        <div className='main-things' >
            {/* Announcement */}
            <div className='announcement' >
                <h1 className='header-announcement' >Announcement</h1>
                <img className='img-dates' src={dates} alt="./dates-img" />
            </div>
            {/* Middle */}
            <div>
                <div className='middle-announcement' >
                    <div className='announcemant-both'>
                        <h1 className='annoucement-header' >Outing schedule for every department</h1>
                        <p className='announcement-para' >5 Minutes ago</p>
                    </div>
                    <img className='pin'  src={pin} alt="./pin-img" />
                    <img className='chat' src={chat} alt="./chat-img" />
                </div>

                <div className='middle-announcement2' >
                    <div className='announcemant-both'>
                        <h1 className='annoucement-header' >Meeting HR Department</h1>
                        <p className='announcement-para' >Yesterday, 12:30 PM</p>
                    </div>
                    <img className='pin1'  src={pin} alt="./pin-img" />
                    <img className='chat1' src={chat} alt="./chat-img" />
                </div>


                <div className='middle-announcement3' >
                    <div className='announcemant-both'>
                        <h1 className='annoucement-header' >IT Department need two more talents for UX/UI 
                       </h1>
                        <p className='announcement-para' >Yesterday, 12:30 PM</p>
                    </div>
                    <img className='pin2'  src={pin} alt="./pin-img" />
                    <img className='chat2' src={chat} alt="./chat-img" />
                </div>
            </div>
            {/* footer */}
            <div className='announcement-footer' >
                 <h1 className='allAnnouncement' >See All Announcement</h1>
            </div>
        </div>
    )
}

export default Anouncement
