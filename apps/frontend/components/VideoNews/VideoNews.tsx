import FadedNews from "../Shared/FadedNews/FadedNews"
import PageCatgories from "../Shared/PageCategories/PageCategories"
import newsImage from "../../styles/images/biden2.jpg";

const VideoNews = () => {

    return (
        <>
          <div className="VideoNews mb-4">
            <div className="NewsImage">
                <img className="img-fluid" src={newsImage.src} />
            </div>
            <div className="PlayTime">
                <h5>05:21</h5>
                <div className="btn-text">
                    <span>شاهد الآن</span>
                    <button className="btn btn-warning VideoPlay">
                        <i className="fa fa-play"></i>
                    </button>
                </div>
            </div>
          </div>

          <div className="pageSimpleTitle mb-5">
              <div className="float-start">
                  <div className="newsSocial">
                      <ul>
                          <li><a><i className="fa fa-envelope"></i></a></li>
                          <li><a><i className="fab fa-whatsapp"></i></a></li>
                          <li><a><i className="fab fa-linkedin"></i></a></li>
                          <li><a><i className="fab fa-twitter"></i></a></li>
                          <li><a><i className="fab fa-facebook"></i></a></li>
                      </ul>
                  </div>
              </div>
              <div className="float-end">
              <h6 className="text-primary">الإمارات</h6>
              </div>
              <div className="clearfix"></div>
              <h1>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h1>
          </div>

          <p><small>نشر الجمعة 5 نوفمبر 2021 | 10:35 صباحًا</small></p>

          <FadedNews/>
          <PageCatgories/>
        </>
    )
}

export default VideoNews