import styles from "./sidebarvideo.module.css";
import newsImage from "../../styles/images/biden2.jpg";
import Link from "next/link";
import { baseUrlAdmin } from "../../services/Requests";
import TimeAgoArabicFormat from "../Shared/TimeAgoCustom/TimeAgoArabicFormat";
import { useEffect } from "react";

const SideBarWithVideo = ({title, videoNewsList}) => {

    return (
        <>
        <div className="videNewspage_sidebar">
            <div className={styles.sidebar}>
            <div className={styles.themeTitle}>
             <h4>{title}</h4>
            </div>
            <div className={styles.listBody}>
                <div className="NewsList VideoTextBox">
                    <ul>

                    {// show videos
                    videoNewsList?.length && videoNewsList.map((video: any, index: number)=>{
                        return (
                                <li key={index}>
                                    <div className="newsText">
                                        <Link href={`/videoNews/`+video.id}><a>{video?._source?.title.length > 50 ? video?._source?.title.substring(0, 50) + ' ...' : video?._source?.title} </a></Link>
                                        {/*<p><TimeAgoArabicFormat date={video?._source?.createdAt} /></p>*/}
                                        <p>
                                            { // to show categories
                                            video?._source?.categories?.map((category: any, categoryIndex: number) => {
                                                    return(
                                                            <a key={categoryIndex}>{category.title}</a>
                                                        )
                                                })  
                                            }
                                        </p>
                                    </div>
                                    <div className="VideoNews">
                                        <img className="img-fluid" src={video?._source?.thumbnail?.path ? baseUrlAdmin+video?._source?.thumbnail?.path:newsImage.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <Link href={`/videoNews/` + video?._source?.id}>
                                                <a>
                                                    <div className="btn-text">
                                                        <span>شاهد الآن</span>
                                                        <button className="btn btn-warning VideoPlay">
                                                            <i className="fa play_small"></i>
                                                        </button>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                       {/*<li>
                            <div className="newsText">
                                <a href="#">النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة</a>
                                <p><a href="#">الإمارات</a> منذ 5 دقائق</p>
                            </div>
                            <div className="VideoNews">
                                <img className="img-fluid" src={newsImage.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="newsText">
                                <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="VideoNews">
                                <img className="img-fluid" src={newsImage.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="newsText">
                                <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="VideoNews">
                                <img className="img-fluid" src={newsImage.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="newsText">
                                <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="VideoNews">
                                <img className="img-fluid" src={newsImage.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="newsText">
                                <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="VideoNews">
                                <img className="img-fluid" src={newsImage.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
                                    </div>
                                </div>
                            </div>
                </li>*/} 

                    </ul>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default SideBarWithVideo