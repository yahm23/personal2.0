import React from 'react'
import AnimatedLogo from './animLogo'
import {useSelector} from 'react-redux'

export default function Navbar() {
    const darkTheme = useSelector( state=>state.darkTheme)
    const menuItems = [
        {
            name:"Main",
            anchor:"#"
        },
        {
            name:"About",
            anchor:"#about"
        },
        {
            name:"Skills",
            anchor:"#skills"
        },
        {
            name:"Portfolio",
            anchor:"#portfolio"
        }
    ]
    return (
        <div className={`topBar ${darkTheme? "darkBackground": "lightBackground"}` }>
            <AnimatedLogo/>
            <div className="navbar">
                {menuItems.map((item)=>{
                    return <a href={item.anchor}>
                        <h1 className={`navTitles ${darkTheme? "darkBackground": "lightBackground"}` }>{item.name}</h1>
                    </a>
                })}
            </div>
          </div>
    )
}
