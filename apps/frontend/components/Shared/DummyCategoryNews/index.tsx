/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import GetData from "apps/frontend/services/GetData";
import { requests } from "apps/frontend/services/Requests";
import { CategoryNewsProps } from "apps/frontend/types/Types";
import { FC, useEffect, useState } from "react";
import newsImage from "../../../styles/images/biden.jpg";
import Title from "../../Title";

const DummyCategoryNewsSection: FC<CategoryNewsProps> = ({ limit, displayTitle, displayTopTwoNews, displayMoreButton }) => {
    // const [news, setCategoryNews] = useState<any[]>([])
    // useEffect(() => {
        // GetData(`${requests.newsByCategories}?limit=${limit}&pageNo=1`, {}, 'get', false).then(res=>{
    //         if(cat){
    //             GetData(`${requests.newsByCategories}${cat.id}`+'?limit=5&pageNo=1', {}, 'get', false).then(res => {
    //                 setCategoryNews(res.data)
    //             }).catch(err => {
    //                 console.warn(err)
    //             })
    //         }
    // }, [limit])
    const fields: JSX.Element[] = [];
    // useEffect(()=>{
    for (let i = 2; i < limit; i++) {
        fields.push(
            <div className="row" key={i}>
                <div className="col-md-4 col-sm-6">
                    <div className="newBox ">
                        <div className="NewsImage img_sm_none">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                        <div className="NewsInfo">
                            <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h4>
                            <p>
                                <a>الإمارات</a> منذ 5 دقائق
                                منذ 5 دقائق</p>
                        </div>
                    </div>
                </div>
              
            </div>
        );
    }
    //  }, [])
    return (
        <>
            {displayTitle && <Title styles={"yellowTitle mb-3"}><h3>{'أميركا في أزمة'}</h3></Title>}
            { news && news[0]  ? <div className="NewsTiles">
                {displayTopTwoNews && (
                    <div className="row">
                        {/* 2 Top News */}
                        <div className="col-md-8 col-sm-7">
                            <div className="newBox newBoxf">
                                <div className="NewsImage">
                                    <img className="img-fluid" src={newsImage.src} />
                                </div>
                                <div className="NewsInfo">
                                    <h3>{news && news[0]?._source?.title} </h3>
                                    {/* <p><a className="ms-3">الإمارات</a> منذ 5 دقائق</p> */}
                                <p> {news[0]?._source?.quotes.map(quote=>{return ( <a className=" ms-3">{quote}</a>)} )}</p>

                                </div>
                            </div>
                        </div>
                        {news[1] ? <div className="col-md-4 col-sm-5">
                            <div className="newBox newBoxfs VideoNews ">
                                <div className="NewsImage">
                                    <img className="img-fluid" src={newsImage.src} />
                                </div>
                                {/* <div className="PlayTime">
                                <h5>05:21</h5>
                                <div className="btn-text">
                                    <span>شاهد الآن</span>
                                    <button className="btn btn-warning VideoPlay">
                                        <i className="fa fa-play"></i>
                                    </button>
                                </div>
                            </div> */}
                                <div className="NewsInfo">
                                    <h4>{news && news[1]?._source?.title}</h4>
                                    <p> {news[1]?._source?.quotes.map(quote=>{return ( <a className=" ms-3">{quote}</a>)} )}</p>
                                </div>
                            </div>
                        </div>:<span></span>}
                    </div>
                )}
                {/* 2 Top News End*/}

                {/* Remaining news */}
                {news.length >2 ? fields:<span></span>}

                {/* <div className="row">
                  { fields}
                </div> */}
            </div> :<div>No Data</div>
            }
            {/* {
                displayMoreButton && (
                    <div className="text-center mt-3 mb-4 more_btn">
                        <button className="btn btn-outline-primary">المزيد</button>
                    </div>
                )
            } */}
        </>
    )
}

export default DummyCategoryNewsSection