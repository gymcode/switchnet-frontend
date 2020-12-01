import React, {Fragment} from 'react'
import "../styles/App.css"
import {BsArrowRightShort} from 'react-icons/bs'

const Banner = ({title})=>{
    return(
        <Fragment>
            <section className="main">
                <div className="p-5 sm:p-6 md:p-6 lg:p-8 xl:p-8 md:px-32 lg:px-32 xl:px-32 ">
                    <div>
                        <h2>
                            <div className="py-6 md:py-1 lg:py-1 xl:py-1 z-10">
                                <div>
                                    <span className="font_default font-mix text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold">
                                        Dreams about the <span> Future</span> are
                                    </span>
                                </div>
                                <div>
                                    <span className="font_default font-mix text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold">always filled with gadgets</span>
                                </div>
                            </div>
                            <div className="font_default py-2 font-semibold text-md sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl ">
                                <a href="">
                                    More about us <BsArrowRightShort className="hover_link" size={40} style={{borderRadius: "50px", borderWidth: 2, borderColor: "#000",}}/>
                                </a>
                            </div>
                        </h2>
                    </div>
                </div>
            </section>
        </Fragment>
    ) 
}

export default Banner