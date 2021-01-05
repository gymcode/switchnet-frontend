import React, {Fragment, useEffect, useState} from 'react'
import {WiWindy} from 'react-icons/wi'
import {ReactComponent as UpArrow} from "../assets/up-arrow-circle.svg"
import '../styles/main.css'

const Header = ()=>{

    const [menuState, setMenuState] = useState({menuOpened: false})

    useEffect(()=>{
        if (menuState.menuOpened === true) {
            
        } else {
            
        }
    }, [])
    return(
        <Fragment>
            <div className="w-full z-4 nav">
                <div className="p-3 md:p-3 lg:p-3 xl:p-3 md:px-20 lg:px-32 xl:px-32 sm:pt-2 md:pt-2 lg:pt-2 xl:pt-2 ">
                    <div className="flex justify-between items-center">
                        <div className="logo">
                            <a href="/" className="text-2xl tracking-wider text-black no-underline font-bold">SwitchNet</a>
                        </div>
                        <div className="nav-toggle cursor-pointer relative flex justify-center items-center"> 
                            <div className={'humburger-menu'}>
                                <span><WiWindy size={55} color="#149F82" /></span>
                                <span></span>
                            </div>
                            <div className={'humburger-menu-close absolute hidden'}>
                                <UpArrow/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header