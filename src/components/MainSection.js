import React, {Fragment, useMemo} from 'react'
import '../styles/App.css'
import '../styles/main.css'

const MainSection  = ()=>{
    return (
        <Fragment>
            <div className={'px-20 py-12'}>
                {/* body section  */}

                {/* left section  */}

                {/* pc section */}
                <div className={'hidden md:block lg:block xl:block rounded'}>
                    <div className={"mx-24 py-20 grid grid-cols-12 gap-4"}>
                        <h2 className={"col-span-3 font_default text-4xl ml-16 capitalize font-bold"}>Gadget 4 ur budget</h2>
                        <div className={"horiLine col-span-1 ml-10"}/>
                        <p className={'col-span-8 text-xs leading-loose'}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                    <h2 className={'font_default text-4xl ml-16 pt-6 capitalize'}>items in stock</h2>
                </div>

                {/* mobile section */}
            </div>
        </Fragment>
    )
}

export default MainSection