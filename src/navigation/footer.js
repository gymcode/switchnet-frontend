import React, {Fragment} from 'react'
import "../styles/main.css"
import "../styles/App.css"
import {BsBoxArrowInUp} from 'react-icons/bs'

const Footer = ()=>{
    return(
        <Fragment>
            <div className={'footer px-20 py-10 text-white'}>
              
               <div className={"h-64 flex flex-col justify-center items-center"}>
                    <p className={"text-md"}>switchnet solutions</p> 
                    
                    <div className={"text-4xl text-white"}>Gadget for your budget</div>
               </div>
               <div className={"flex justify-evenly items-center py-8"}>
                    <div className={"flex flex-row"}>
                        <div className={"px-4"}>Terms</div>
                        <div className={"px-4"}>Privacy</div>
                        <div className={"px-4"}>Services</div>
                        <div className={"px-4"}>Contact</div>
                    </div>
                    <div>
                        sdfsdfsdfsdfsdfsdf
                    </div>
                    <div>
                        <p>&copy; 2016 switchnet solution. all rights reserved</p>
                    </div>
               </div>
            </div>
        </Fragment>
    )
}

export default Footer