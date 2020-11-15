import React from 'react'
import AnimatedLogo from '../functionalComponents/animLogo'
import Navbar from '../functionalComponents/navbar'
import Header from './header'
import About from './about'

export default function MainPageContent() {
    return (
        <div className="mainContentBody">
            <Navbar/>
            <Header></Header>
            <svg className="wave"  viewBox="0 0 1440 320"><path fill="#feffea" fillOpacity="1" d="M0,224L120,234.7C240,245,480,267,720,240C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <About></About>
        </div>
    )
}
