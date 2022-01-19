import HorizontalMediaScrollBar from "../Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"
import AdBanner from "../Shared/AdBanner/AdBanner"
import HorizontalFooterNewsSlider from "../Shared/HorizontalFooterNewsSlider"

const LiveTV = () => {

    return (
        <>
            <div className="container">
                <AdBanner />
            </div>
            <div className='row'>
                Live Tv
            </div>
            <div>
                Imran shb Design this slider
                <HorizontalFooterNewsSlider />
            </div>
        </>
    )
}

export default LiveTV