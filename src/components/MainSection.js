import React, {Fragment, useMemo} from 'react'
import '../styles/App.css'
import '../styles/main.css'

const items = [
    {
        id: 1, 
        name: "Dell Xps 13", 
        price: "Ghc 99", 
        image: require('../assets/dell_XPS_13_black_and_white_standard_mode.jpg')
    }, 
    {
        id: 2, 
        name: "iPhone 12", 
        price: "Ghc 99", 
        image: require('../assets/iphone12.jpg')
    }, 
    {
        id: 3, 
        name: "Samsung note 20 Ultra", 
        price: "Ghc 99", 
        image: require('../assets/SamsungGalaxyS20Ultra__1_.jpg')
    },
    {
        id: 4, 
        name: "Apple Macbook Air", 
        price: "Ghc 99", 
        image: require('../assets/Apple-Macbook-Air-Space-Grey-New-1.jpg')
    }, 
    {
        id: 5, 
        name: "Hp Spectre", 
        price: "Ghc 99", 
        image: require('../assets/HPSpectrex2-12-c0__1_.jpg')
    }, 
    {
        id: 6, 
        name: "Camon EOS", 
        price: "Ghc 99", 
        image: require('../assets/highres-tamron_70-200mm_G2_on_canon_5dsr_1488194528.jpg')
    }
]

const MainSection  = ()=>{
    return (
        <Fragment>
            <div>
                {/* pc section */}
                <div className={'px-24 py-12'}>
                    <div className={'hidden md:block lg:block xl:block rounded'}>
                        <div className={"mx-20 py-20 grid grid-cols-12 gap-4"}>
                            <h2 className={"col-span-4 text_default font_Nunito text-4xl capitalize leading-tight font-black"}>get a gadget 4 ur budget</h2>
                            <div className={"horiLine col-span-1"}/>
                            <p className={'col-span-7 text_size leading-loose font_Sans'} style={{color: "#8d97a2"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                        <div className={"veriLine"}/>
                        <div className={"mx-8 py-16"}>
                            <h2 className={'text_default font_Nunito text-4xl capitalize font-black'}>items in stock</h2>
                            <div className={"flex flex-wrap px-20 py-10"}>
                                {
                                    items.map((data)=>(
                                        <>
                                            <div className={"width-sub mx-6"}>
                                                <div className={"items-color flex items-end justify-center border"}>
                                                    <img src={data.image} className={"object-cover w-full h-full"}/>
                                                </div>
                                                <div className={"flex justify-between my-6 text_default font_Sans font-black text-sizeItem"}>
                                                    <div>{data.name}</div>
                                                    <div>{data.price}</div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                            {/* btn  */}
                            <div className={'capitalize text-xs font-bold flex justify-center items-center'}>
                                <a href="">
                                    <div className={'hover_link w-40 h-12 border flex justify-center items-center'} style={{borderWidth: 2, borderColor: "#000",}}>see all items</div>
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
                        <div className={'text-xs leading-loose font_Sans'} style={{color: "#8d97a2"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </div>
                    </div>
                    <div className={"sub-service w-full flex px-40 "}>
                        <div className={"bg-white mx-6 w-1/2 shadow-xl flex items-center justify-center"} style={{borderBottomLeftRadius: 30}}>
                            <div className={"text-center px-10"}>
                                <h1>Networking</h1>
                                <div className={"text_size leading-loose font_Sans"} style={{color: "#8d97a2"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                            </div>
                        </div>
                        <div className={"bg-white mx-6 w-1/2 shadow-xl flex items-center justify-center"}>
                            <div className={"text-center px-10"}>
                                <h1>Repairs</h1>
                                <div className={"text_size leading-loose font_Sans"} style={{color: "#8d97a2"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                            </div>
                        </div>
                        <div className={"bg-white mx-6 w-1/2 shadow-xl flex items-center justify-center"} style={{borderTopRightRadius: 30}}>
                            <div className={"text-center px-10"}>
                                <h1>Tech Accessories</h1>
                                <div className={"text_size leading-loose font_Sans"} style={{color: "#8d97a2"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
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