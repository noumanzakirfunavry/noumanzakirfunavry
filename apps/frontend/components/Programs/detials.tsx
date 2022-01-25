import AdBanner from "../Shared/AdBanner/AdBanner"
import NewsListTiles from "../Shared/NewsListTiles/NewsListTiles"
import SideBar from "../Shared/SideBar/SideBar"

const ProgramDetails = () => {

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className="pageTitle PageTitleYellow mb-0"><h2>اكسبو في أسبوع</h2></div>

                <div className="NewsTilesBg mb-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="VideoNews">
                                <div className="NewsImage"><img className="img-fluid" src="/_next/static/media/biden.602d4cc9.jpg" /></div>
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                                    </div>
                                </div>
                                <div className="NewsContent">
                                    <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h4>
                                    <p className="mb-0">منذ 5 دقائق</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            
                            <div className="SimpleDarkNews">
                                <h5 className="mb-3">عن البرنامج</h5>
                                <p className="mb-5">أبرزالأحداث والفعاليات التي قامت CNBC عربية بتغطيتها على مدار الأسبوع تأتيكم في برنامج “اكسبو في أسبوع” مع لين خضير </p>
                                <button className="btn btn-outline-light ms-3">تحميل المزيد</button>
                                <button className="btn btn-outline-light">تحميل المزيد</button>
                            </div>

                        </div>
                    </div>
                </div>



                <div className='row'>
                    <div className='col-md-8'>
                            <div className="yellowTitle mb-4"><h3>الحلقات اكسبو في أسبوع</h3></div>
                        <NewsListTiles newsList={[]} />
                    </div>
                    <div className='col-md-4'>
                        <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProgramDetails