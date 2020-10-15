import React, { Fragment } from 'react'
import "../styles/App.css"
import '../styles/main.css'


const casesData = [
    {
        id: 1, 
        subtitle: "Branding", 
        title: "Get all branded phones, laptops and many more", 
        img: require('../assets/brand.jpg')
    }, 
    {
        id: 2, 
        subtitle: "Accessories", 
        title: "Why wonder looking for Tech parts ", 
        img: require('../assets/accessories.jpg')
    }, 
    {
        id: 3, 
        subtitle: "With any Gadget of your choice", 
        title: "No bugdet is too low guys ", 
        img: require('../assets/gadget.jpg')
    }
]


const Cases = ()=>{
    return(
        <Fragment>
            <section className="cases">
                <div>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                        {casesData.map((dataItems)=>
                            (
                            <Fragment key={dataItems.id}>                              
                                <div className="relative">
                                        <div className="caseDetail p-10 mt-12 xl:mt-32">
                                            <span className="font_default font-semibold text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl">{dataItems.subtitle}</span>
                                            <h2 className="font_default font-bold text-2xl xl:text-4xl">{dataItems.title}</h2>
                                        </div>
                                        <div className="casesDiv w-full">                                        
                                            <img src={dataItems.img} className="casesImage object-cover" style={{height: "100%"}}/>
                                        </div>
                                </div>
                            </Fragment>
                            )
                        )}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Cases