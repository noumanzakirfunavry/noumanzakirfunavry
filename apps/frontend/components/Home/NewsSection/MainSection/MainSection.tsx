/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { FC, useEffect, useState } from "react"
import styles from "./mainsection.module.css";
import newsimage from "../../../../styles/images/biden.jpg";
import GetData from "apps/frontend/services/GetData";
import { requests } from "apps/frontend/services/Requests";

const MainSection:FC = () =>{

    const [featuredNews, setFeaturedNews] = useState({})

    useEffect(()=>{
        getDataFromApi()
    },[])

    const getDataFromApi = () =>{
        GetData(`${requests.featuredNews}/getAll`,{},"get", false).then((res)=>{
            setFeaturedNews(res.data?.response?.featuredNews)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
            <div className="row">

                    <div className="col-lg-8 p_sm_0">
                        <div className={styles.mainNews}>
                            <div className={styles.newscontent}>
                                <h1><a >النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب</a></h1>
                                <hr></hr>
                                <h3><a >بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</a></h3>
                                <hr></hr>
                                <h3><a >مدير منظمة الصحة يحث الدول على اتخاذ إجراءات “متعقلة” في مواجهة أوميكرون</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="row">
                            <div className="col-sm-6 col-lg-12 list_w">
                                <div className={styles.newsbox}>
                                    <div className={styles.newsimage}>
                                        <img className="img-fluid" src={newsimage.src} />
                                    </div>
                                    <div className={styles.newsdetails}>
                                        <a >بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة ال </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-12 ">
                                <div className={styles.newsbox}>
                                    <div className={styles.newsimage}>
                                        <img className="img-fluid" src={newsimage.src} />
                                    </div>
                                    <div className={styles.newsdetails}>
                                        <a >بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                  </div>
        </>
    )
}

export default MainSection