import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {toggle} from '../../actions'
import Moon from '../../assets/darkMode/moon.svg'
import Sun from '../../assets/darkMode/sun.svg'
import stylings from '../../stylingVars'

export default function AnimatedLogo() {
    const darkTheme = useSelector( state=>state.darkTheme)
    const dispatch = useDispatch()

    const toggleDarkMode =() =>{
        dispatch(toggle())
    }
    

    return (
        <div>
            <a className="animLogo"  href="#">
        
                <div  className="logo">
                    <svg  fill={darkTheme? "#FFFFFF" :"#1C1D19"} xmlns="http://www.w3.org/2000/svg" width="11.31mm" height="15.52mm" viewBox="0 0 32.06 44"><defs></defs><path d="M0,.34V19.85a.29.29,0,0,0,.09.21l7.76,7.78a.27.27,0,0,0,.21.09H23.23l.71-.36.11,4.3a.31.31,0,0,1-.09.22l-3.82,3.72a.29.29,0,0,1-.21.09l-7.8.08a.27.27,0,0,1-.21-.09L7.3,31.22a.3.3,0,0,0-.42,0L1.27,36.77a.3.3,0,0,0,0,.43L8,43.91a.33.33,0,0,0,.21.09H23.93a.31.31,0,0,0,.21-.09L32,36.05a.31.31,0,0,0,.09-.22V.3a.29.29,0,0,0-.3-.3H24.34A.3.3,0,0,0,24,.3l0,15.64a.3.3,0,0,1-.1.22L20.15,19.9a.32.32,0,0,1-.21.08H12.15a.32.32,0,0,1-.21-.08L8.16,16.09a.29.29,0,0,1-.09-.21L8.14.34A.31.31,0,0,0,7.84,0H.3A.3.3,0,0,0,0,.34Z"/></svg>
                </div>

                <div className="darkToggle">
                    <div className="iconsContainer">

                    { darkTheme?
                        <img className="darkIcons" height="20px" src={Sun}/>
                        :
                        <img className="darkIcons" height="20px"  src={Moon}/>
                    }
                    </div>
                </div>
                
                <h2>Log redux state: {darkTheme}</h2>
                <button onClick={()=>dispatch(toggle())}>Toggle Dark</button>
                <button onClick={()=>{console.log(darkTheme)}}>Redux log</button>

            </a>

        </div>
    )
}
