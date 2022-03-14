import newsImage from "../../../styles/images/biden.jpg";

const News2TopTiles = () => {
    return (
        <>
            <div className="NewsTiles">
                <div className="row">
                    <div className="col-md-8 col-sm-7">
                        <div className="newBox newBoxf">
                            <div className="NewsImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="NewsInfo">
                                <h3>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h3>
                                <p><a>الإمارات</a> منذ 5 دقائق</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-5">
                        <div className="newBox newBoxfs">
                            <div className="NewsImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="NewsInfo">
                                <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>
                                <p><a>الإمارات</a> منذ 5 دقائق</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News2TopTiles

