import { useState } from 'react'
import Header from './components/Header/Header'
import Feetback from './components/Feetback/Feetback'
import './App.css'

function App() {


  return (
    <>
     <div className='blue-box'></div>
    <div className='wrap'>
      <Header/>
     <div className="homePage">
      <div className="homeText">
        <h1>We Care About Your Dental Health.</h1>
        <p>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. healthy mouth, free of infections, injuries and other problems .</p>
        <div className="btn-group">
          <button>Appoinment</button>
          <button>Watch Video</button>
        </div>
      </div>
  


     </div>
      <Feetback/>
    </div>
    
    </>
  )
}

export default App
