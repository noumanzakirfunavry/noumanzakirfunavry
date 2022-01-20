import AdBanner from "../Shared/AdBanner/AdBanner"
import News2TopTiles from "../Shared/News2TopTiles"
import NewsDetatilListWithMedia from "../Shared/NewsDetatilListWithMedia/NewsDetatilListWithMedia"
import SideBar from "../Shared/SideBar/SideBar"
import NewsImage from "../../styles/images/biden2.jpg";

const InfographicsDetails = () => {

    return (
        <>
            <div className="container">
                <AdBanner />

                <div className="pageSimpleTitle mb-5">
                <h6 className="text-primary">إنفوغرافيك</h6>
                <h1>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h1>
            </div>
            <div className='col-md-8'>
                    <div className="NewsInfobox">
                        <div className="infoItem">نشر الجمعة 5 نوفمبر 2021 | 10:35 صباحًا</div>
                        <div className="infoItem">تم تحريره الجمعة 6 نوفمبر 2021 | 12:35 مساءً</div>
                        <div className="newsSocial">
                            <ul className="newsSocial">
                                <li><a><i className="fa fa-envelope"></i></a></li>
                                <li><a><i className="fab fa-whatsapp"></i></a></li>
                                <li><a><i className="fab fa-linkedin"></i></a></li>
                                <li><a><i className="fab fa-twitter"></i></a></li>
                                <li><a><i className="fab fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    </div>

                <div className='row'>
                    <div className='col-md-8 pt-3'>
                        <div className="mb-3">
                            <img className="img-fluid" src={NewsImage.src} />
                        </div>
                        <div className="mb-3">
                            <img className="img-fluid" src={NewsImage.src} />
                        </div>
                        <div className="mb-3">
                            <img className="img-fluid" src={NewsImage.src} />
                        </div>
                        <div className="mb-3">
                            <img className="img-fluid" src={NewsImage.src} />
                        </div>
                        <div className="mb-3">
                            <img className="img-fluid" src={NewsImage.src} />
                        </div>
                        <div className="mb-3">
                            <img className="img-fluid" src={NewsImage.src} />
                        </div>


                        <div className="page-categories">
                            <h6>العلامات</h6>
                            <ul>
                                <li><a href="">الرئيسية تسجيل الدخول </a></li>
                                <li><a href="">تسجيل الدخول </a></li>
                                <li><a href="">الرئيسية</a></li>
                                <li><a href="">الرئيسية تسجيل الدخول </a></li>
                                <li><a href="">الرئيسية</a></li>
                                <li><a href="">تسجيل الدخول </a></li>
                                <li><a href="">الرئيسية</a></li>
                                <li><a href="">الرئيسية تسجيل الدخول </a></li>
                                <li><a href="">الرئيسية</a></li>
                                <li><a href="">تسجيل الدخول </a></li>
                            </ul>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfographicsDetails