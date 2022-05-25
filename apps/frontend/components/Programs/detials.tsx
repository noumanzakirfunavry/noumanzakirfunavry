import newsImage from "./../../styles/images/biden.jpg";
import { baseUrlAdmin } from "../../services/Requests"
import HtmlData from "../../components/Shared/HtmlData/HtmlData";
import TimeAgoArabicFormat from "../../components/Shared/TimeAgoCustom/TimeAgoArabicFormat"
import { useState, useEffect} from "react";
import Dailymotion from 'react-dailymotion';


const ProgramDetails = ({programDetails}) => {

    const [playVideo, setPlayVideo] = useState<boolean>(false)

    useEffect(() => {
        setPlayVideo(false);
    }, [programDetails])
    

    console.log('programDetails:::', programDetails);

    return (
        <>
            <div className="NewsTilesBg mb-5 programDetailNews">
        <div className="container">
        <div className="PageBuilder-pageRow">
                    <div className="PageBuilder-col-9">
                        <div className="VideoNews">
                            { 
                            programDetails?.promoId &&
                            playVideo ? // play video if play flag is set
                                <video className="mb-3 newsDetailimg" controls autoPlay loop muted>
                                    <source src={programDetails?.promo?.path && baseUrlAdmin+programDetails?.promo?.path}/>
                                </video>
                            : // else show thumbnail with play icon
                                programDetails?.promo?.dailyMotionURL ? 
                                <Dailymotion
                                    className={"newsDetailimg mb-3"}
                                    video={programDetails?.promo?.dailyMotionURL}   //news?.video?.dailyMotionURL
                                    uiTheme="light"
                                    autoplay= "false"
                                    width="100%"
                                />    
                                 :
                                <>
                                    <div className="NewsImage"><img className="img-fluid" src={programDetails?.thumbnail?.path ? baseUrlAdmin+programDetails?.thumbnail?.path:newsImage.src} /></div>
                                    <div className="PlayTime">
                                        <h5>05:21</h5>
                                        <div className="btn-text">
                                            <span>شاهد الآن</span><button className="btn btn-warning VideoPlay" onClick={() => setPlayVideo(!playVideo)}><i className="fa play_big"></i></button>
                                        </div>
                                    </div>
                                    <div className="NewsContent">
                                        {/*<h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h4>*/}
                                        <h4>{programDetails?.title}</h4>
                                        {/*<p className="mb-0">منذ 5 دقائق</p>*/}
                                        <p className="mb-0"><TimeAgoArabicFormat date={programDetails?.createdAt} /></p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className="PageBuilder-sidebar">

                        <div className="SimpleDarkNews d-none d-md-block">
                            <h5 className="mb-4">عن البرنامج</h5>
                            {/*<p className="mb-5">أبرزالأحداث والفعاليات التي قامت CNBC عربية بتغطيتها على مدار الأسبوع تأتيكم في برنامج “اكسبو في أسبوع” مع لين خضير </p>*/}
                            <HtmlData data={programDetails?.content} />
                            {/*<button className="btn btn-outline-light ms-3">تحميل المزيد</button>
                            <button className="btn btn-outline-light">تحميل المزيد</button>*/}
                        </div>

                        <div className="text-center d-block d-md-none px-3">
                            <button className="btn btn-outline-light w-100">مشاهدة اعلان</button>
                        </div>

                    </div>
                </div>
        </div>
            </div>
        </>
    )
}

export default ProgramDetails