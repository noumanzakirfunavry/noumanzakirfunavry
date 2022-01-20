import AdBanner from "../Shared/AdBanner/AdBanner"
import ContactUsForm from "./ContactUsForm"
const ContactAddresses = () => {

    return (
        <>
            <div className="container">
                <AdBanner />
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