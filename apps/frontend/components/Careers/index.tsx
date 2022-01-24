import HorizontalMediaScrollBar from "../Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"
import AdBanner from "../Shared/AdBanner/AdBanner"
import JobOpportunities from "./JobOpportunities/JobOpportunities"
const Careers = () => {

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

export default Careers