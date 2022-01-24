/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import Addresses from "apps/frontend/components/ContactUs/Addresses"
import ContactUsForm from "apps/frontend/components/ContactUs/ContactUsForm"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"


const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className='row'>
                    <Addresses/>
                </div>
                <div className='row'>
                    <ContactUsForm />
                </div>
            </div>
        </>
        
    )
}

export default Index