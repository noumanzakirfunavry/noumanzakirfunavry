import livetvimg from "../../../styles/images/livetv.png";

const LiveTvBox = () => {
    return (
        <>
            <div className="livetvbox mb-5">
                <div className='liveTV'>
                    <img src={livetvimg.src} className="img-fluid"/>
                </div>
                <button className="btn btn-outline-light">جدول البرامج</button>
            </div>
        </>
    )
}
export default LiveTvBox