import React, {Fragment} from 'react'
import "../styles/main.css"
import "../styles/App.css"

const Footer = ()=>{
    return(
        <Fragment>
            <div className={'footer px-32 py-16 text-white'}>
               <div className={"flex justify-between p-4 px-10"}>
                    <div>switchnet</div>
                    <div className={'text-xs'}>return to top</div>
               </div>   
               <hr/>
            </div>
        </Fragment>
    )
}

export default Footer