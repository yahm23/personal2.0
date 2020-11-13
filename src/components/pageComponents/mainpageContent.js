import React from 'react'
import AnimatedLogo from '../functionalComponents/animLogo'
import Navbar from '../functionalComponents/navbar'

export default function MainPageContent() {
    return (
        <div className="mainContentBody">
          <div className="topBar">
            <AnimatedLogo/>
            <Navbar/>
          </div>
          <h1  className="test" >MAIN PAGE SHI</h1>
        </div>
    )
}
