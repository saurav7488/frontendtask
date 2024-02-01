import React from 'react'
import '../Style/Main_menu.css'
import dashboard from '../assets/Vector.png'
import recruitment from '../assets/ic_recruitment.png'
import scheduled from '../assets/ic_calendar.png'
import department from '../assets/ic_department.png'
import employee from '../assets/ic_employee.png'
const Main_menu = () => {
    return (
        <div>
            <div className='outermenu' ><div className='mainmenu'>MAIN MENU</div></div>
            <div className='outer' >
                <img className='imgdash' src={dashboard} alt="/dashboard-img" />
                <div className='dashboard' >Dashboard</div>
            </div>
            <div className='outer'>
                <img className='imgrecrui' src={recruitment} alt="./recruitment-img" />
                <div className='recruitment' >Recruitment</div>
            </div>
            <div className='outer'> 
                <img className='imgouter' src={scheduled} alt="./schedule-img" />

                <div className='schedule'>Schedule</div>
            </div>
            <div className='outer' >
                <img className='imgouter' src={employee} alt="./employee-img" />

                <div className='employee'>Employee</div></div>
            <div className='outer'>
                <img className='imgouter' src={department} alt="./department-img" />

                <div className='department'>Department</div></div>
        </div>
    )
}

export default Main_menu
