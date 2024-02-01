import React from 'react'
import '../Style/TwoDiv.css'
import left from '../assets/Frame 52 (1).png'
import right from '../assets/Frame 52.png'
const TwoDiv = () => {
    return (
        <div className='maintwodiv' >
            {/* First Div */}
            <div className='firstdivtwodiv' >
                <div><div className='totalemployees' >Total Employees</div>
                    <div className='div216' >216</div>
                    <div className='paragraph' >
                        <p className='inner-para' >120 Men</p>
                        <p className='inner-para'>96 Women</p>
                    </div></div>
                {/* img tag */}
                <div className='left-img' >
                    <img src={right} alt="/left-img" />
                </div>
            </div>
            {/* Second Div */}
                <div className='firstdivtwodiv'>

                <div><div className='totalemployees' >Talent Request</div>
                    <div className='div216' >16</div>
                    <div className='paragraph' >
                        <p className='inner-para' >6 Men</p>
                        <p className='inner-para'>10 Women</p>
                    </div></div>
                {/* img tag */}
                <div className='left-img' >
                    <img src={left} alt="/left-img" />
                </div>
                </div>
        </div>
    )
}

export default TwoDiv
