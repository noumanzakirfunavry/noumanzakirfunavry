/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import styles from "./mainsection.module.css";
import newsimage from "../../../../styles/images/biden.jpg";
import React from "react";

const MainSection = ({newsList}) =>{

    const first3MainNews = newsList.filter((news)=>{
        return news.position <= 3
    })

    const last2MainNews =  newsList.filter((news)=>{
        return news.position > 3 && news.position <= 5
    })

    return (
        <>
            <div className="row">

                    <div className="col-xl-8">
                        <div className={styles.mainNews} >
                            <div className={styles.newscontent}>
                                {/* <h1><a >النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب</a></h1>
                                <hr></hr>
                                <h3><a >بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</a></h3>
                                <hr></hr>
                                <h3><a >مدير منظمة الصحة يحث الدول على اتخاذ إجراءات “متعقلة” في مواجهة أوميكرون</a></h3> */}
                                {
                                    first3MainNews?.map((news)=>{
                                        return (
                                            <React.Fragment key={news.id}>
                                                <h1><a >{news?.news?.title}</a></h1>
                                                <hr></hr>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 d-none d-xl-block">
                        <div className="row">
                            {
                                last2MainNews?.map((news)=>{
                                    return (
                                        <div className="col-sm-6 col-lg-12" key={news.id}>
                                            <div className={styles.newsbox}>
                                                <div className={styles.newsimage}>
                                                    <img className="img-fluid" src={newsimage.src} />
                                                </div>
                                                <div className={styles.newsdetails}>
                                                    <a >{news?.news?.title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
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