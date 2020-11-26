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
                <div className={'hidden md:block lg:block xl:block mid_section'}>
                    <h2 className={'font_default text-4xl ml-12 capitalize'}>new arrivals</h2>
                </div>

                {/* mobile section */}
            </div>
        </Fragment>
    )
}

export default MainSection