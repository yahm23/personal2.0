import React from 'react'
import AnimatedLogo from './animLogo'

export default function Navbar() {
    return (
        <div className="topBar">
            <AnimatedLogo/>
            <div className="navbar">
                <a href="#about">
                    <h1 className="navTitles">About</h1>
                </a>
                <a href="#anchor">
                    <h1 className="navTitles">Skills</h1>
                </a>
                <a href="#anchor">
                    <h1 className="navTitles">Porfolio</h1>
                </a>
            </div>
          </div>
    )
}
