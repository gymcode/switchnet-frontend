import React, {Fragment} from 'react'
import "../styles/main.css"
import "../styles/App.css"
import {IoLogoInstagram} from 'react-icons/io'
import {RiFacebookCircleLine} from "react-icons/ri"
import {TiMail} from "react-icons/ti"


const Footer = ()=>{
    return(
        <Fragment>
            <div className={'footer px-20 text-white'}>
              
               <div className={"h-64 flex flex-col justify-center items-center"}>
                    <p className={"text-sm font_Sans color_default font-bold uppercase tracking-widest "}>switchnet solutions</p> 
                    
                    <div className={"text-5xl text-white font-bold font_Nunito"}>Gadget for your budget</div>
               </div>
               <div className={"flex justify-evenly text-sm items-center py-8"}>
                    <div className={"flex flex-row font_Sans"}>
                        <div className={"px-4"}>Terms</div>
                        <div className={"px-4"}>Privacy</div>
                        <div className={"px-4"}>Services</div>
                        <div className={"px-4"}>Contact</div>
                    </div>
                    <div className={"font_Sans flex flex-row"}>
                        <div className={"px-4"}><RiFacebookCircleLine/></div>
                        <div className={"px-4"}><TiMail/></div>
                        <div className={"px-4"}><IoLogoInstagram/></div>
                    </div>
                    <div className={"font_Sans"}>
                        <p>&copy; 2016 switchnet solution. all rights reserved</p>
                    </div>
               </div>
            </div>
        </Fragment>
    )
}

export default Footer