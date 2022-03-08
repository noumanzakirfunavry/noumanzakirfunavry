<<<<<<< HEAD
import ContactAddresses from "apps/frontend/components/ContactUs/ContactUs"
import Infographics from "apps/frontend/components/Infographics"
=======
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import ContactAddresses from "apps/frontend/components/ContactUs/ContactUs"
import ContactUsForm from "apps/frontend/components/ContactUs/ContactUsForm"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import Title from "apps/frontend/components/Title"
>>>>>>> 7fd24e8f5e47a5f157173105bdf6dd63ff98b78c

const Index = () =>{

    return (
        <>
<<<<<<< HEAD
        <ContactAddresses/>
            </>
        
=======
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

>>>>>>> 7fd24e8f5e47a5f157173105bdf6dd63ff98b78c
    )
}

export default Index