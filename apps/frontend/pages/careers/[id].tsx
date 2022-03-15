/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import CareersSlider from "apps/frontend/components/Careers/CareersSlider/CareersSlider";
import JobDetails from "apps/frontend/components/Careers/JobDetails";
import JobOpportunities from "apps/frontend/components/Careers/JobOpportunities/JobOpportunities";
// import HorizontalMediaScrollBar from "apps/frontend/components/Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar";
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner";

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
            </div>
                <div className="pageTitle PageTitleYellow">
                    <h2 className="montserrat text-extra-bold">CNBC ARABIA CAREERS</h2>
                </div>

                <div className='row justify-content-center'>
                    <div className="col-md-6">
                        <JobDetails/>
                    </div>
                </div>
        </>
    )
}

export default Index










