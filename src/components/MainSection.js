import React, {Fragment, useEffect} from 'react'
import '../styles/App.css'
import '../styles/main.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import {FaNetworkWired} from 'react-icons/fa'
import {GiAutoRepair} from 'react-icons/gi'
import {GrDeliver} from 'react-icons/gr'

const items = [
    {
        id: 1, 
        name: "Dell Xps 13", 
        price: "Ghc 99", 
        duration: 1000,
        image: require('../assets/dell_XPS_13_black_and_white_standard_mode.jpg')
    }, 
    {
        id: 2, 
        name: "iPhone 12", 
        price: "Ghc 99", 
        duration: 2500,
        image: require('../assets/iphone12.jpg')
    }, 
    {
        id: 3, 
        name: "Samsung note 20 Ultra", 
        price: "Ghc 99", 
        duration: 4000,
        image: require('../assets/SamsungGalaxyS20Ultra__1_.jpg')
    },
    {
        id: 4, 
        name: "Apple Macbook Air", 
        price: "Ghc 99", 
        duration: 5500,
        image: require('../assets/Apple-Macbook-Air-Space-Grey-New-1.jpg')
    }, 
    {
        id: 5, 
        name: "Hp Spectre", 
        price: "Ghc 99", 
        duration: 6000,
        image: require('../assets/HPSpectrex2-12-c0__1_.jpg')
    }, 
    {
        id: 6, 
        name: "Canon EOS", 
        price: "Ghc 99", 
        duration: 7500,
        image: require('../assets/highres-tamron_70-200mm_G2_on_canon_5dsr_1488194528.jpg')
    }
]


const MainSection  = ()=>{

    const GetBorder = (id, data)=>{
        switch (id) {
            case 1:
                return (
                    <Fragment>
                         <div className={`items-color flex items-center justify-center rounded`} style={{borderBottomWidth:1, borderRightWidth: 1,borderColor: "#149F82"}}>
                            <img src={data.image} className={"object-cover w-2/3 h-48"}/>
                        </div>
                        <div className={"flex justify-between my-6 text_default font_Sans font-black text-sizeItem"}>
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                        </div>
                    </Fragment>
                );
            case 2:
                return (
                    <Fragment>
                         <div className={`items-color flex items-center justify-center rounded`} style={{borderBottomWidth:1, borderLeftWidth: 1, borderRightWidth: 1,borderColor: "#149F82"}}>
                            <img src={data.image} className={"object-cover w-2/3 h-48"}/>
                        </div>
                        <div className={"flex justify-between my-6 text_default font_Sans font-black text-sizeItem"}>
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                        </div>
                    </Fragment>
                );
            case 3:
                return (
                    <Fragment>
                         <div className={`items-color flex items-center justify-center rounded`} style={{borderBottomWidth:1, borderLeftWidth: 1,borderColor: "#149F82"}}>
                            <img src={data.image} className={"object-cover w-2/3 h-48"}/>
                        </div>
                        <div className={"flex justify-between my-6 text_default font_Sans font-black text-sizeItem"}>
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                        </div>
                    </Fragment>
                );
            case 4:
                return (
                    <Fragment>
                         <div className={`items-color flex items-center justify-center rounded`} style={{borderTopWidth:1, borderRightWidth: 1,borderColor: "#149F82"}}>
                            <img src={data.image} className={"object-cover w-2/3 h-48"}/>
                        </div>
                        <div className={"flex justify-between my-6 text_default font_Sans font-black text-sizeItem"}>
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                        </div>
                    </Fragment>
                );
            case 5:
                return (
                    <Fragment>
                         <div className={`items-color flex items-center justify-center rounded`} style={{borderTopWidth:1, borderLeftWidth: 1, borderRightWidth: 1,borderColor: "#149F82"}}>
                            <img src={data.image} className={"object-cover w-2/3 h-48"}/>
                        </div>
                        <div className={"flex justify-between my-6 text_default font_Sans font-black text-sizeItem"}>
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                        </div>
                    </Fragment>
                );
            case 6:
                return (
                    <Fragment>
                         <div className={`items-color flex items-center justify-center rounded`} style={{borderTopWidth:1, borderLeftWidth: 1,borderColor: "#149F82"}}>
                            <img src={data.image} className={"object-cover w-2/3 h-48"}/>
                        </div>
                        <div className={"flex justify-between my-6 text_default font_Sans font-black text-sizeItem"}>
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                        </div>
                    </Fragment>
                );
                
                break;
        
            default:
                return (
                    <Fragment>
                         <div className={`items-color flex items-center justify-center rounded`} style={{borderBottomWidth:1, borderLeftWidth: 1,borderColor: "#149F82"}}>
                            <img src={data.image} className={"object-cover w-2/3 h-48"}/>
                        </div>
                        <div className={"flex justify-between my-6 text_default font_Sans font-black text-sizeItem"}>
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                        </div>
                    </Fragment>
                )
                break;
        }
    }
    
    useEffect(()=>{
        aos.init({duration: 2000})
    },[])
    return (
        <Fragment>
            <div>
                {/* pc section */}
                <div className={'px-24 py-12'}>
                    <div className={'hidden md:block lg:block xl:block rounded'}>
                        <div className={"mx-20 py-20 grid grid-cols-12 gap-4"}>
                            <h2 data-aos="fade-right" className={"col-span-4 text_default font_Nunito text-4xl capitalize leading-tight font-black"}>get a gadget 4 ur budget</h2>
                            <div className={"horiLine col-span-1"}/>
                            <p data-aos="fade-left" className={'col-span-7 text_size leading-loose font_Sans font-bold'} style={{color: "#152445"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                        <div className={"veriLine"}/>
                        <div className={"mx-8 py-16"}>
                            <h2 data-aos="fade-right" className={'text_default font_Nunito text-4xl capitalize font-black'}>items in stock</h2>
                            <div className={"flex flex-wrap px-20 py-10"}>
                                {
                                    items.map((data)=>(
                                        <>
                                            <div key={data.id} data-aos="fade-up" data-aos-duration={data.duration} className={"width-sub mx-6"}>
                                                {GetBorder(data.id, data)}
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                            {/* btn  */}
                            <div className={'capitalize text-xs font-bold flex justify-center items-center'}>
                                <a href="">
                                    <div data-aos="zoom-out-left" className={'hover_link w-40 h-12 border font_Sans flex justify-center items-center'} style={{borderWidth: 2, borderColor: "#149F82"}}>and many more...</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* service section  */}
                <div className={'services w-full relative hidden md:block lg:block xl:block'}>   
                    <div className={'grid grid-cols-2 px-24 text-white py-16 flex items-center'}>
                        <div className={'text-4xl mx-8 font_Nunito font-black capitalize leading-tight'}>
                           <div>The service</div>
                           <div>we provide</div>  
                        </div>
                        <div className={'text_size leading-loose font_Sans font-bold'}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </div>
                    </div>
                    <div className={"sub-service w-full flex px-40 "}>
                        <div className={"bg-white mx-6 w-1/2 shadow-xl flex items-center justify-center"} style={{borderBottomLeftRadius: 30}}>
                            <div className={"text-center px-10"}>
                                <FaNetworkWired size={40} color={"#149F82"}  className={'flex items-center justify-center w-full'}/>
                                <div className={'py-6'}>
                                    <h1 className={'text-xl font_Sans font-black capitalize'}>Networking</h1>
                                    <div className={'text_size leading-loose font_Sans font-bold'} style={{color: "#152445"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-white mx-6 w-1/2 shadow-xl flex items-center justify-center"}>
                            <div className={"text-center px-10"}>
                                <GiAutoRepair color={"#149F82"} size={50} className={'flex items-center justify-center w-full'}/>
                                <div className={'py-6'}>
                                    <h1 className={'text-xl font_Sans font-black capitalize'}>Repairs</h1>
                                    <div className={'text_size leading-loose font_Sans font-bold'} style={{color: "#152445"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-white mx-6 w-1/2 shadow-xl flex items-center justify-center"} style={{borderTopRightRadius: 30}}>
                            <div className={"text-center px-10"}>
                                <GrDeliver size={50} className={'flex items-center justify-center w-full'}/>
                                <div className={'py-6'}>
                                    <h1 className={'text-xl font_Sans font-black capitalize'}>Tech Accessories</h1>
                                    <div className={'text_size leading-loose font_Sans font-bold'} style={{color: "#152445"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>

                {/* mobile section */}
            </div>
        </Fragment>
    )
}

export default MainSection