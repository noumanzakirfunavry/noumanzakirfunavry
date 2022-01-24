/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import Schedules from "apps/frontend/components/Schedules"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"


const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className='row'>
                   <Schedules/>
                </div>
            </div>
        </>
    )
}

export default Index