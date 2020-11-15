import React from 'react'
import Me from '../../assets/yoursTruly.jpg'

export default function About() {
    return (
        <div className="aboutSection">

                <h1 className="aboutHeading">About Me</h1>
                <div className="selfDiv">
                    <img className="yoursTruly" src={Me}></img>
                </div>
        </div>
    )
}
