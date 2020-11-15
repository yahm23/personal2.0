import React from 'react'
import Me from '../../assets/yoursTruly.jpg'

export default function About() {
    return (
        <div id="about" className="aboutSection">
                <div>
                    <h1 className="aboutHeading">About Me</h1>
                    <h2 className="aboutContent">I'm a software developer, with a primary, but not exclusive, focus on front-end developement. I studied bioengineering at university but made a career change into software after finding it more satisfying and rewarding. I started off with online courses whilst saving to enroll in CodeClan (a Scottish based software bootcamp). Since graduating from CodeClan, I've continued my programming path with personal projects and professional experience. I currently work at Green, as a junior front-end developer.  </h2>
                </div>
                <div className="selfDiv">
                    <img className="yoursTruly" src={Me}></img>
                </div>
        </div>
    )
}
