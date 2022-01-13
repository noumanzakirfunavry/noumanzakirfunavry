import newsimg from "../../../styles/images/biden.jpg";

const NewsDetailListImageWithMedia = () =>{

    return (
        <>
            <div className="NewsList">
                <ul>
                    <li>
                        <div className="newsText">
                            <a href="#"><span className="badge bg-success">PRO</span> بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                            <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li>
                    <li>
                        <div className="newsText">
                            <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                            <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li>
                    <li>
                        <div className="newsText">
                            <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                            <p><a href="#">أمريكا</a> منذ 5 دقائق</p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NewsDetailListImageWithMedia