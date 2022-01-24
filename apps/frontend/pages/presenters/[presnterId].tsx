/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import PresenterDetails from "apps/frontend/components/Presenter/details"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className='row'>
                    presenters details Design here
                </div>
            </div>

        </>
    )
}

export default Index