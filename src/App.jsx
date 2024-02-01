import React from 'react'
import Left from './component/Left'
import './Style/App.css'
import Navbar from './component/Navbar'
import MainContent from './component/MainContent'
const App = () => {
  return (
    <div className='main'>
      <div className='left-main' ><Left/></div>
      <div>
         <Navbar/>
        <div className='content' ><MainContent/></div>
      </div>
    </div>
  )
}

export default App
