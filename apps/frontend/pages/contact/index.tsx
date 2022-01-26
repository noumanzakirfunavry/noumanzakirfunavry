/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import ContactAddresses from "apps/frontend/components/ContactUs/ContactUs"
import ContactUsForm from "apps/frontend/components/ContactUs/ContactUsForm"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <Title styles={"pageTitle PageTitleYellow"} >
                    <h2>اتصل بنا</h2>
                </Title>
                <ContactAddresses/>
                
                <div className='contactForm'>
                    <ContactUsForm />
                </div>
            </div>

        </>
        
    )
}

export default Index