
import { baseUrlAdmin } from "apps/frontend/services/Requests";
import { FC, useEffect, useState } from "react";
import newsImage from "../../../styles/images/biden.jpg";
import logoImage from "../../../styles/images/CNBC-favicon.png";
import twite from "../../../styles/images/twite.png";
import HtmlData from "../../Shared/HtmlData/HtmlData";
import NewsRealtedStock from "../CategoryDetailsBoxes/CategoryDetailsBoxes";
import Dailymotion from 'react-dailymotion';

const ArticleDetails: FC<any> = ({ news }) => {

    const [playVideo, setPlayVideo] = useState<boolean>(false)

    useEffect(() => {
        //setPlayVideo(false);
    }, [news])

    
    console.log("news id====>",news);
    
    return (
        <>
            <NewsRealtedStock />
            {/* <script src="https://geo.dailymotion.com/player/x8lqy.js" data-video="x8adsti"></script> */}
            { // if video news then deal with video
                news?.videoId ? 
                playVideo ? // play video if play flag is set
                    <video className="mb-3 newsDetailimg" controls autoPlay loop>
                        <source src={news?.video?.path ? baseUrlAdmin+news?.video?.path:logoImage.src} type="video/mp4" />
                    </video>
                    // apply condition base player if daily motion video exist then show otherwise show local video 
                    // <iframe src="https://geo.dailymotion.com/player/x8lqy.html?video=x8adsti" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen frameBorder="0" width="100%" height="360"></iframe>
                : // else show thumbnail with play icon
                news?.video?.dailyMotionURL ? 
                      <Dailymotion
                        className={"newsDetailimg mb-3"}
                        video={news?.video?.dailyMotionURL}   //news?.video?.dailyMotionURL
                        uiTheme="light"
                        autoplay= "false"
                      /> :
                    <div className="VideoNews mb-4 ">
                        <div className="NewsImage">
                            <img className="img-fluid" src={news?.thumbnail?.path ? baseUrlAdmin+news?.thumbnail?.path:logoImage.src} />
                        </div>
                        <div className="PlayTime">
                            <h5>05:21</h5>
                            <div className="btn-text">
                                <span>شاهد الآن</span>
                                <button className="btn btn-warning VideoPlay" onClick={() => setPlayVideo(!playVideo)}>
                                    <i className="fa play_big"></i>
                                </button>
                            </div>
                        </div>
                    </div>

            : // else show image if not video news

                <div className="mb-3 newsDetailimg">
                    <img className="img-fluid" src={news?.image?.path ? baseUrlAdmin+news?.image?.path:logoImage.src} />
                </div>
            } 
            <h6 className="newsDetailtext">{/*news?.image?.description*/}</h6>
            <hr></hr>
            {news ? <HtmlData data={news?.content} /> :<div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                    <div className="newsDetailPtext">
                        <p>
                            لا يتوقع شرقاوي أن ينجح مشروع القانون المقدم في الكونغرس في تصنيف الجماعة إرهابية، لكنه “سيمثل أداة ضغط على الإدارة الأميركية لتغير سياستها في التعاطي مع التنظيم”، فضلا عن كونه “خطوة في طريق حظره”.
                        </p>
                        <p>
                            وأكد شرقاوي أن “الضغوط المستمرة من جانب النواب في الكونغرس على إدارة بايدن ستجعلها تغير سياستها تجاه الإخوان، أو تجعلها محايدة”.
                        </p>
                        <p>وكان كروز انتقد الطريقة التي تتعامل بها إدارة بايدن مع تنظيم الإخوان، قائلا إن “من حق الشعب الأميركي معرفة ما إذا كانت الإدارة تحاول الضغط على حلفاء الولايات المتحدة للإفراج عن المتطرفين من الإخوان”.</p>

                        <p>وقال كروز إنه “في عهد الرئيس (الأسبق) باراك أوباما ونائب الرئيس بايدن، كانت السياسات المطبقة كارثة لحلفائنا في الشرق الأوسط، ونعمة لأعدائنا. مرة أخرى، تعمل إدارة بايدن على تعزيز جماعة الإخوان والجماعات المتطرفة الأخرى في الشرق الأوسط”</p>
                        <p>لا يتوقع شرقاوي أن ينجح مشروع القانون المقدم في الكونغرس في تصنيف الجماعة إرهابية، لكنه “سيمثل أداة ضغط على الإدارة الأميركية لتغير سياستها في التعاطي مع التنظيم”، فضلا عن كونه “خطوة في طريق حظره”. </p>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="VideoNews my-3">
                        <div className="NewsImage">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                        <div className="PlayTime"><h5>05:21</h5>
                            <div className="btn-text"><span>شاهد الآن</span>
                                <button className="btn btn-warning VideoPlay"><i className="fa play_big"></i></button>
                            </div>
                        </div>
                        <div className="NewsContent">
                            <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>

                        </div>
                    </div>
                    <h6 className="newsDetailtext">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h6>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                    
                        <div className="companies_announced">
                            <h5>شركات أعلنت خطط للإنقسام هذا ال</h5>
                            <div className="newsDetailPtext">
                                <p>
                                    لا يتوقع شرقاوي أن ينجح مشروع القانون المقدم في الكونغرس في تصنيف الجماعة إرهابية، لكنه “سيمثل أداة ضغط على الإدارة الأميركية لتغير سياستها في التعاطي مع التنظيم”، فضلا
                                    <a href="javascript:void(0)">
                                        عن كونه “خطوة في طريق حظره”.
                                    </a>
                                </p>
                                <p>وأكد شرقاوي أن “الضغوط المستمرة من جانب النواب في الكونغرس على إدارة بايدن ستجعلها تغير سياستها تجاه الإخوان، أو تجعلها محايدة”. </p>
                                <p>وكان كروز انتقد الطريقة التي تتعامل بها إدارة بايدن مع تنظيم الإخوان، قائلا إن “من حق الشعب الأميركي معرفة ما إذا كانت الإدارة تحاول الضغط على حلفاء الولايات المتحدة للإفراج عن المتطرفين من الإخوان”. </p>
                                <img className="img-fluid" src={twite.src} />

                                <p>
                                    لا يتوقع شرقاوي أن ينجح مشروع القانون المقدم في الكونغرس في تصنيف الجماعة إرهابية، لكنه “سيمثل أداة ضغط على الإدارة الأميركية لتغير سياستها في التعاطي مع التنظيم”، فضلا عن كونه “خطوة في طريق حظره”.
                                </p>
                                <p>وأكد شرقاوي أن “الضغوط المستمرة من جانب النواب في الكونغرس على إدارة بايدن ستجعلها تغير سياستها تجاه الإخوان، أو تجعلها محايدة”.</p>
                                <p>
                                    وكان كروز انتقد الطريقة التي تتعامل بها إدارة بايدن مع تنظيم الإخوان، قائلا إن “من حق الشعب الأميركي معرفة ما إذا كانت الإدارة تحاول الضغط على حلفاء الولايات المتحدة للإفراج عن المتطرفين من الإخوان”.
                                </p>

                            </div>
                        </div>

                    {/*  */}

                </div>
            </div>
</div>}

        </>


    )
}

export default ArticleDetails