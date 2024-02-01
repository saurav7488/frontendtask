    import React from 'react'
    import '../Style/recentactivity.css'
    const Recent_Activity = () => {
    return (
        <div className='mm' >
            {/* Up side */}
            <div className='activityMain' >
                <h1 className='recentlyheader' >Recently Activity</h1>   
            </div>
            {/* down side */}
            <div className='outeractivyt' >
                <div className='middleActivity'>
                    <p className='activity_paragraph_1' >10:40 AM, Fri 10 sept 2021</p>
                    <h1 className='activity_header' >You Posted a New Job</h1>
                    <p className='activity_paragraph_2' >Kindly check the requirements and terms of work and</p>
                    <p className='activity_paragraph_2'>make sure everything is right.</p>
                </div>
                <div className='recentFooter' >
                     <div>
                         <h1 className='activity_header_2'>Today you makes 12 Activity</h1>
                     </div>
                     {/* <div className='outerbtn' ><button className='btn' >See All Activity</button></div> */}
                     <button className='outerbtn'><div className='btn'>See All Activity</div></button>
                </div>
            </div>
        </div>
    )
    }

    export default Recent_Activity
