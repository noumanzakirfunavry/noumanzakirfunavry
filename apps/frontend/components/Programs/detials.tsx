

const ProgramDetails = () => {

    return (
        <>
            <div className="NewsTilesBg mb-5 programDetailNews">
        <div className="container">
        <div className="row">
                    <div className="col-md-9">
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
                    <div className="col-md-3">

                        <div className="SimpleDarkNews d-none d-md-block">
                            <h5 className="mb-4">عن البرنامج</h5>
                            <p className="mb-5">أبرزالأحداث والفعاليات التي قامت CNBC عربية بتغطيتها على مدار الأسبوع تأتيكم في برنامج “اكسبو في أسبوع” مع لين خضير </p>
                            <button className="btn btn-outline-light ms-3">تحميل المزيد</button>
                            <button className="btn btn-outline-light">تحميل المزيد</button>
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