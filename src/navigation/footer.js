import React, {Fragment} from 'react'
import "../styles/main.css"
import "../styles/App.css"
import {BsBoxArrowInUp} from 'react-icons/bs'

const Footer = ()=>{
    return(
        <Fragment>
            <div className={'footer px-32 py-10 text-white'}>
               <div className={"flex justify-between p-2 px-8"}>
                    <div>switchnet</div>
                    <div className={'text-xs flex justify-center items-center'}>
                        <p className={"px-3"}>return to top</p>
                        <div><BsBoxArrowInUp size={20}/></div>
                    </div>
               </div>   
               <hr/>
               {/* navigation for footer  */}
               <nav className={"p-8"}>
                    <div>About</div> 
                    <div className={"pt-6"}>Contact</div> 
                    <div className={"pt-6"}>Connect</div> 
               </nav>
               <hr/>

               <div className={"px-8 py-4 leading-tight "}>
                    <div className={""}>switchnet</div>
                    <p>&copy; switchnet_solution.com</p>
               </div>
            </div>
        </Fragment>
    )
}

export default Footer