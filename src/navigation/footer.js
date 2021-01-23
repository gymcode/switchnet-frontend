import React, {Fragment} from 'react'
import "../styles/main.css"
import "../styles/App.css"
import {IoLogoInstagram} from 'react-icons/io'
import {MdCall} from "react-icons/md"
import {RiFacebookLine} from "react-icons/ri"
import {TiMail} from "react-icons/ti"



const Footer = ()=>{
    return(
        <Fragment>
            <div className={'footer px-20 text-white'}>
              
               <div className={"h-64 flex flex-col justify-center items-center"}>
                    <p className={"text-2xl font_dancing color_default font-semibold uppercase tracking-widest "}>switchnet solutions</p> 
                    
                    <div className={"text-5xl text-white font-bold font_Nunito"}>Gadget for your budget</div>
               </div>
               <div className={"flex justify-evenly text-sm items-center"}>
                    <div className={"flex flex-row font_Sans"}>
                        <div className={"px-4"} style={{color: "#c5c5c5"}}>Terms</div>
                        <div className={"px-4"} style={{color: "#c5c5c5"}}>Privacy</div>
                        <div className={"px-4"} style={{color: "#c5c5c5"}}>Services</div>
                        <div className={"px-4"} style={{color: "#c5c5c5"}}>Contact</div>
                    </div>
                    <div className={"font_Sans flex flex-row"}>
                        <div className={"px-4"}><MdCall size={20} color={"#c5c5c5"} /></div>
                        <div className={"px-4"}><RiFacebookLine size={20} color={"#c5c5c5"}/></div>
                        <div className={"px-4"}><TiMail size={20} color={"#c5c5c5"}/></div>
                        <div className={"px-4"}><IoLogoInstagram size={20} color={"#c5c5c5"}/></div>
                    </div>
                    <div className={"font_Sans"}>
                        <p style={{color: "#c5c5c5"}}>&copy; 2016 <span className={"font_dancing color_default"}> switchnet solution. </span> All rights reserved</p>
                    </div>
               </div>
            </div>
        </Fragment>
    )
}

export default Footer