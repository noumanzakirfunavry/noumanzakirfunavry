/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import JobOpportunities from "apps/frontend/components/Careers/JobOpportunities/JobOpportunities"
import HorizontalMediaScrollBar from "apps/frontend/components/Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"


const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className='row'>
                    <HorizontalMediaScrollBar/>
                </div>
                <div className='row'>
                    <JobOpportunities/>
                </div>
            </div>
        </>
    )
}

export default Index