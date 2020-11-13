import React, {Fragment, useMemo} from 'react'
import '../styles/App.css'
import '../styles/main.css'

const MainSection  = ()=>{
    return (
        <Fragment>
            <div className={'p-20'}>
                {/* body section  */}

                {/* left section  */}

                {/* pc section */}
                <div className={'hidden md:block lg:block xl:block'}>
                    <h2 className={'font_default text-4xl capitalize'}>Items in stock</h2>
                </div>

                {/* mobile section */}
            </div>
        </Fragment>
    )
}

export default MainSection