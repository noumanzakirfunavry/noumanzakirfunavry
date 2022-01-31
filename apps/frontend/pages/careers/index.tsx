/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import JobOpportunities from "apps/frontend/components/Careers/JobOpportunities/JobOpportunities"
import HorizontalMediaScrollBar from "apps/frontend/components/Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"


const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
<<<<<<< HEAD
                <div className='row'>
                    <HorizontalMediaScrollBar/>
                </div>
                <div className='row'>
                    <JobOpportunities/>
=======

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
>>>>>>> 6af2479d59929f31d403667d4d604cbfd9a584b0
                </div>
            </div>
        </>
    )
}

export default Index