/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import styles from "./mainsection.module.css";
import newsimage from "../../../../styles/images/biden.jpg";
import React from "react";
import Link from "next/link";
import { baseUrlAdmin } from "apps/frontend/services/Requests";

const MainSection = ({ newsList }) => {

    // const first3MainNews = newsList?.filter((news:any)=>{
    //     return news?._source?.featuredNews?.position <= 3
    // })

    // const last2MainNews =  newsList?.filter((news:any)=>{
    //     return news?._source?.featuredNews?.position > 3 && news?._source?.featuredNews?.position <= 5
    // })
    
    // background image path
    const backgroundImagePath = newsList[0]?._source?.videoId ? newsList[0]?._source?.thumbnail?.path : newsList[0]?._source?.image?.path
    return (
        <>
            <div className="row">
                <div className="col-lg-8 p_sm_0">
                    <div className={`${styles.mainNews} VideoNews`} style={{background: `url(${baseUrlAdmin+encodeURIComponent(backgroundImagePath)}) no-repeat`}} >
                    
                        { newsList[0]?._source?.videoId &&
                                    <div className="PlayTime">
                                        <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span>
                                                <Link href={`/newsDetails/` + newsList[0]._id}>
                                                    <a>
                                                        <button className="btn btn-warning VideoPlay">
                                                            <i className="fa play_small"></i>
                                                        </button>
                                                    </a>
                                                </Link>
                                        </div>
                                    </div>
                        }
                        <div className={styles.newscontent} >
                            {/* <h1><a >النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب</a></h1>
                                <hr></hr>
                                <h3><a >بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</a></h3>
                                <hr></hr>
                                <h3><a >مدير منظمة الصحة يحث الدول على اتخاذ إجراءات “متعقلة” في مواجهة أوميكرون</a></h3> */}
                            {
                                newsList?.length && newsList?.map((news: any, index: number) => {
                                    if (index < 3)
                                        return (
                                            <React.Fragment key={news._id}>
                                               { index==0 ? <h1>
                                                    <Link href={`/newsDetails/` + news._id}><a >{news?._source?.title}</a></Link>
                                                </h1>:
                                                <h3>
                                                    <Link href={`/newsDetails/` + news._id}><a >{news?._source?.title}</a></Link>
                                                </h3>}

                                                <hr></hr>
                                            </React.Fragment>
                                        )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="row">
                        {
                            newsList?.length && newsList?.map((news: any, index: number) => {
                                if (index >= 3) {
                                    return (
                                        <div className="col-sm-6 col-lg-12 list_w" key={news._id}>
                                            <div className={styles.newsbox} >
                                                { // show thmbnail with play icon if video news
                                                //.NewsTiles .newBox .PlayTime
                                                //.VideoTextBox .VideoNews .PlayTime
                                                !news?._source?.videoId ?
                                                    <div className="VideoNews">
                                                        <div className="mainsection_newsimage__zRzlt">
                                                            <img className="img-fluid" src={news?._source?.thumbnail?.path ? baseUrlAdmin+news?._source?.thumbnail?.path:newsimage.src} />
                                                            <div className="PlayTime">
                                                            <h5>05:21</h5>
                                                            <div className="btn-text">
                                                                <span>شاهد الآن</span>
                                                                <Link href={`/newsDetails/` + news._id}>
                                                                    <a>
                                                                        <button className="btn btn-warning VideoPlay">
                                                                            <i className="fa play_small"></i>
                                                                        </button>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        
                                                    </div>

                                                : // else show image

                                                <div className={styles.newsimage}>
                                                    {news?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news?._source?.image?.path} /> : <img className="img-fluid" src={newsimage.src} />}
                                                </div>
                                                }
                                                <div className={styles.newsdetails}>
                                                    <Link href={`/newsDetails/` + news._id}><a >{news?._source?.title}</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                        {/* <div className="col-sm-6 col-lg-12">
                                <div className={styles.newsbox}>
                                    <div className={styles.newsimage}>
                                        <img className="img-fluid" src={newsimage.src} />
                                    </div>
                                    <div className={styles.newsdetails}>
                                        <a >بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة ال </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-12">
                                <div className={styles.newsbox}>
                                    <div className={styles.newsimage}>
                                        <img className="img-fluid" src={newsimage.src} />
                                    </div>
                                    <div className={styles.newsdetails}>
                                        <a >بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                                    </div>
                                </div>
                            </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainSection