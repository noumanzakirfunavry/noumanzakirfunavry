import ad from '../../../styles/images/ad-970.jpg';

const   AdBanner = () =>{
    return (
        <>
            <div className="text-center mb-4 mt-4 w-75 w_sm_100 mx-auto">
                <img className="img-fluid" src={ad.src} />
            </div>
        </>
    )
}

export default AdBanner