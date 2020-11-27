import React, {Fragment, useMemo} from 'react'
import '../styles/App.css'
import '../styles/main.css'

const items = [
    {
        id: 1, 
        name: "DAsdasdasd", 
        price: "Ghc 99", 
        image: require('../assets/brand.jpg')
    }, 
    {
        id: 2, 
        name: "DAsdasdasd", 
        price: "Ghc 99", 
        image: require('../assets/backup.jpg')
    }, 
    {
        id: 3, 
        name: "DAsdasdasd", 
        price: "Ghc 99", 
        image: require('../assets/image2.jpg')
    },
    {
        id: 4, 
        name: "DAsdasdasd", 
        price: "Ghc 99", 
        image: require('../assets/image3.jpg')
    }, 
    {
        id: 5, 
        name: "DAsdasdasd", 
        price: "Ghc 99", 
        image: require('../assets/image4.jpg')
    }, 
    {
        id: 6, 
        name: "DAsdasdasd", 
        price: "Ghc 99", 
        image: require('../assets/image1.jpg')
    }
]

const MainSection  = ()=>{
    return (
        <Fragment>
            <div className={'px-24 py-12'}>
                {/* pc section */}
                <div className={'hidden md:block lg:block xl:block rounded'}>
                    <div className={"mx-24 py-20 grid grid-cols-12 gap-4"}>
                        <h2 className={"col-span-3 font_default text-4xl ml-16 capitalize font-bold"}>Gadget 4 ur budget</h2>
                        <div className={"horiLine col-span-1 ml-10"}/>
                        <p className={'col-span-8 text-xs leading-loose'}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                    <div className={"veriLine"}/>
                    <div className={"mx-8 py-16"}>
                        <h2 className={'font_default text-4xl capitalize'}>items in stock</h2>
                        <div className={"flex flex-wrap py-10"}>
                            {
                                items.map((data)=>(
                                    <>
                                        <div className={"width-sub mx-6"}>
                                            <div className={"items-color flex items-end justify-center"}>
                                                <img src={data.image} className={"object-cover w-2/3 h-40 rounded"}/>
                                            </div>
                                            <div className={"flex justify-between my-6 font-bold font_default"}>
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
                            <div className={'w-40 h-12 border flex justify-center items-center'}>see all items</div>
                        </div>
                        <div className={"veriLine my-16"}/>
                    </div>
                </div>

                {/* mobile section */}
            </div>
        </Fragment>
    )
}

export default MainSection