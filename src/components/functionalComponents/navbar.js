import React from 'react'
import AnimatedLogo from './animLogo'

export default function Navbar() {
    return (
        <div className="topBar">
            <AnimatedLogo/>
            <div className="navbar">
                <h1 className="navTitles">About</h1>
                <h1 className="navTitles">Skills</h1>
                <h1 className="navTitles">Porfolio</h1>
            </div>
          </div>
    )
}
