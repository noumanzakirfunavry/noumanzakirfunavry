/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import CareersSlider from "apps/frontend/components/Careers/CareersSlider/CareersSlider";
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

                <div className="container">
                <CareersSlider/>
                <hr></hr>
                <div className='row justify-content-center'>
                    <div className="col-md-6">
                        <JobOpportunities title={'FUTURE JOB OPPORTUNITIES'} description={'Are you interested in working with CNBC Arabia? Fill the form below and we will keep you in mind for any future job offerings'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index










