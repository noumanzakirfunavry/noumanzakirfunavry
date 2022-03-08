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
                </div>
                <Title styles={"pageTitle PageTitleYellow"} >
                    <h2 className="fs32_bolder">اتصل بنا</h2>
                </Title>
                <div className="container">
                <ContactAddresses/>
                <hr className="mb-5"></hr>
                <div className='contactForm'>
                    <ContactUsForm />
                </div>
            </div>

        </>

    )
}

export default Index