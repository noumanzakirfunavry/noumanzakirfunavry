
import { FC } from "react"
import styles from "./mainsection.module.css";
import newsimage from "../../../../styles/images/biden.jpg";

const MainSection:FC = () =>{

    return (
        <>
            <div className="row">
                    
                    <div className="col-md-8">
                        <div className={styles.mainNews}>
                            <div className={styles.newscontent}>
                                <h1><a href="javascript:voide(0)">النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب</a></h1>
                                <hr></hr>
                                <h3><a href="javascript:voide(0)">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</a></h3>
                                <hr></hr>
                                <h3><a href="javascript:voide(0)">مدير منظمة الصحة يحث الدول على اتخاذ إجراءات “متعقلة” في مواجهة أوميكرون</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.newsbox}>
                            <div className={styles.newsimage}>
                                <img className="img-fluid" src={newsimage.src} />
                            </div>
                            <div className={styles.newsdetails}>
                                <a href="javascript:voide(0)">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة ال </a>
                            </div>
                        </div>
                        <div className={styles.newsbox}>
                            <div className={styles.newsimage}>
                                <img className="img-fluid" src={newsimage.src} />
                            </div>
                            <div className={styles.newsdetails}>
                                <a href="javascript:voide(0)">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة ال </a>
                            </div>
                        </div>
                    </div>
                  </div>
        </>
    )
}

export default MainSection