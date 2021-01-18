import React, {Fragment, useEffect, useState} from 'react'
import {DiJqueryLogo} from 'react-icons/di'
import {ReactComponent as UpArrow} from "../assets/up-arrow-circle.svg"
import {Link} from 'react-router-dom'
import '../styles/main.css'

const Header = ()=>{

    return(
        <Fragment>
            <nav className="w-full z-4 nav">
                <div className="p-3 md:p-3 lg:p-3 xl:p-3 md:px-20 lg:px-32 xl:px-32 sm:pt-2 md:pt-2 lg:pt-2 xl:pt-2 ">
                    <div className="flex justify-between items-center">
                        <div className="logo">
                            <a href="/" className="text-2xl tracking-wider text-black no-underline font-bold">SwitchNet</a>
                        </div>
                        <div className="cursor-pointer relative pr-8 flex justify-center items-center"> 
                            <div className={"nav-inline"}>
                                <li>
                                    <Link to={"/services"}>Services</Link>
                                </li>
                                <li>
                                    <Link to={"/stock"}>Stock</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>Contact</Link>
                                </li>                            
                            </div>
                            <div className={'pl-24 flex justify-center items-center'}>
                                <span><DiJqueryLogo size={30} color="#149F82" /></span>
                                <span className={""}>why switchnet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header