import livetvimg from "../../../styles/images/livetv.png";

const LiveTvBox = () => {
    return (
        <>
            <div className="livetvbox mb-5">
                <div className="container">
                    <div className='liveTV'>
                        <img src={livetvimg.src} className="img-fluid"/>
                    </div>
                    <button className="btn btn-outline-light fs15_b">جدول البرامج</button>
                </div>
            </div>
        </>
    )
}
export default LiveTvBox