/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import JobOpportunities from "apps/frontend/components/Careers/JobOpportunities/JobOpportunities"
import HorizontalMediaScrollBar from "apps/frontend/components/Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"


const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />

                <div className="pageTitle PageTitleYellow">
                    <h2>CNBC ARABIA CAREERS</h2>
                </div>

                <div className='jobsSlider'>
                    <h2 className="text-primary text-start">CURRENT JOBS</h2>
                    <HorizontalMediaScrollBar/>
                </div>
                <hr></hr>
                <div className='row justify-content-center'>
                    <div className="col-md-6">
                        <JobOpportunities/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index