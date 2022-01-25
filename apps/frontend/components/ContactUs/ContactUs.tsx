import AdBanner from "../Shared/AdBanner/AdBanner"
import ContactUsForm from "./ContactUsForm"
const ContactAddresses = () => {

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className="pageTitle PageTitleYellow">
                    <h2>اتصل بنا</h2>
                </div>
                <div className='row'>
                    Addresses
                </div>
                <div className='row'>
                    <ContactUsForm />
                </div>
            </div>

        </>
    )
}

export default ContactAddresses