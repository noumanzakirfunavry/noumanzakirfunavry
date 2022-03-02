/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CategoryNewsProps } from "apps/frontend/types/Types";
import { FC } from "react";
import newsImage from "../../../styles/images/biden.jpg";
import Title from "../../Title";

const CategoryNewsSection: FC<CategoryNewsProps> = ({limit, displayTitle, displayTopTwoNews, displayMoreButton}) => {

    const fields: JSX.Element[] = [];
        for (let i = 1; i <= limit; i++) {
        fields.push(
            <>
                <div className="col-md-4 col-sm-6">
                    <div className="newBox ">
                        <div className="NewsImage">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                        <div className="NewsInfo">
                            <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>
                            <p><a>الإمارات</a> منذ 5 دقائق</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                        <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span>
                                  <button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                              </div>
                            </div>

                          </div>
                        <div className="NewsInfo">
                            <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h4>
                            <p><a>الإمارات</a> منذ 5 دقائق</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="newBox">
                        <div className="NewsImage">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                        <div className="NewsInfo">
                            <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>
                            <p><a>الإمارات</a> منذ 5 دقائق</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
           {displayTitle && <Title styles={"yellowTitle mb-3"}><h3>أميركا في أزمة</h3></Title> }
           <div className="NewsTiles">
                {displayTopTwoNews && (
                    <div className="row">
                            {/* 2 Top News */}
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
                )}
                {/* 2 Top News End*/}
                <div className="row">
                  { fields}
                </div>
            </div>
            {
                displayMoreButton && (
                    <div className="text-center mt-3 mb-4 more_btn">
                        <button className="btn btn-outline-primary">المزيد</button>
                    </div>
                )
            }
        </>
    )
}

export default CategoryNewsSection