import React, {Fragment} from 'react'
import "../styles/main.css"
import "../styles/App.css"
import {BsBoxArrowInUp} from 'react-icons/bs'

const Footer = ()=>{
    return(
        <Fragment>
            <div className={'footer px-32 py-10 text-white'}>
              
               <div className={"h-64 flex flex-col justify-center items-center"}>
                    <p className={"text-md"}>switchnet solutions</p> 
                    
                    <div className={"text-4xl"}>Gadget for your budget</div>
               </div>
               <div className={"flex justify-evenly items-center p-8"}>
                    <div>

                    </div>
                    <div></div>
                    <div>
                        <p>&copy; switchnet_solution.com</p>
                    </div>
               </div>
            </div>
        </Fragment>
    )
}

export default Footer