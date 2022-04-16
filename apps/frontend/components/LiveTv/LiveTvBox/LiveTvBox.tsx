import livetvimg from "../../../styles/images/livetv.png";

const LiveTvBox = () => {
    return (
        <>
            <div className="livetvbox mb-5">
                <div className="container">
                    <div className='liveTV VideoNews'>
                        <img src={livetvimg.src} className="img-fluid"/>
                        <div className="PlayTime">

                                <div className="btn-text">
                                    <span>المباشر</span>
                                    <button className="btn  VideoPlay">
                                        <i className="fa play_big"></i>
                                        {/* <img className="img-fluid" src={playicon.src} /> */}
                                    </button>
                                </div>
                            </div>
                    </div>
                    <button className="btn btn-outline-light fs15_b btn-sm-wide">جدول البرامج</button>
                </div>
            </div>
        </>
    )
}
export default LiveTvBox