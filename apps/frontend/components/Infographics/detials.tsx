
import NewsImage from "../../styles/images/biden2.jpg";
import InfographiscModal from "./infographicModal";
import MediaSlider from "./mediaSlider";
import MediaSliderModal from "./mediaSlider";

const InfographicsDetails = () => {

    return (
        <>
            <div className='pt-3'>
                <div className="mb-3">
                    <img className="img-fluid" data-bs-toggle="modal" data-bs-target="#mediaSlider" src={NewsImage.src} />
                </div>
                <div className="mb-3">
                    <img className="img-fluid" data-bs-toggle="modal" data-bs-target="#mediaSlider" src={NewsImage.src} />
                </div>
                <div className="mb-3">
                    <img className="img-fluid" data-bs-toggle="modal" data-bs-target="#mediaSlider" src={NewsImage.src} />
                </div>
                <div className="mb-3">
                    <img className="img-fluid" data-bs-toggle="modal" data-bs-target="#mediaSlider" src={NewsImage.src} />
                </div>
                <div className="mb-3">
                    <img className="img-fluid" data-bs-toggle="modal" data-bs-target="#mediaSlider" src={NewsImage.src} />
                </div>
                <div className="mb-3">
                    <img className="img-fluid" data-bs-toggle="modal" data-bs-target="#mediaSlider" src={NewsImage.src} />
                </div>

                <InfographiscModal modalId={"mediaSlider"} >
                    <MediaSlider />
                </InfographiscModal>

            </div>
        </>
    )
}

export default InfographicsDetails