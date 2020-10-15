import React, {Fragment} from 'react'
import {WiWindy} from 'react-icons/wi'
import '../styles/main.css'

const Header = ()=>{
    return(
        <Fragment>
            <div className="w-full z-4">
                <div className="p-3 md:p-3 lg:p-3 xl:p-3 md:px-20 lg:px-20 xl:px-24 sm:pt-2 md:pt-2 lg:pt-2 xl:pt-2 ">
                    <div className="flex justify-between items-center">
                        <div className="logo">
                            <a href="/" className="text-2xl tracking-wider text-black no-underline font-bold">SwitchNet</a>
                        </div>
                        <div className="nav"> 
                            <span><WiWindy size={55} color="#149F82" /></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header