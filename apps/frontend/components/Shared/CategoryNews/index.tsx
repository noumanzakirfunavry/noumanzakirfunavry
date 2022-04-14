/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import GetData from "apps/frontend/services/GetData";
import { requests } from "apps/frontend/services/Requests";
import { CategoryNewsProps } from "apps/frontend/types/Types";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import newsImage from "../../../styles/images/biden.jpg";
import Title from "../../Title";

const CategoryNewsSection: FC<CategoryNewsProps> = ({ cat, limit, displayTitle, displayTopTwoNews, displayMoreButton }) => {
    const [news, setCategoryNews] = useState<any[]>([])
    const limitVal: number = limit && limit > 0 ? limit : 5; // TODO: currently setting static val too for safe side, can be removed later

    useEffect(() => {

        // GetData(`${requests.newsByCategories}?limit=${limit}&pageNo=1`, {}, 'get', false).then(res=>{
            if(cat){
                GetData(`${requests.newsByCategories}${cat.id}?limit=${limitVal}`+'&pageNo=1', {}, 'get', false).then(res => {
                    setCategoryNews(res.data)
                }).catch(err => {
                    console.warn(err)
                })
            }
    }, [limitVal, cat])
    const fields: JSX.Element[] = [];
    // useEffect(()=>{
       
    for (let i = 2; i < news?.length; i++) {
        fields.push(
                <div key={i} className="col-md-4 col-sm-6">
                    <div className="newBox ">
                        <div className="NewsImage img_sm_none">
                            {news[i]?._source?.image ? <img className="img-fluid" src={news[i]?._source.image.url} />:<img className="img-fluid" src={newsImage.src} />}
                        </div>
                        <div className="NewsInfo">
                        <Link href={`/newsDetails/`+news[i]._id}><a><h4>{news && news[i]?._source?.title}</h4> </a></Link>
                            {/* <p><a>الإمارات</a> منذ 5 دقائق</p> */}
                            <p> {news[i]?._source?.tags.map(quote=>{return ( <a className=" ms-3">{quote}</a>)} )}</p>

                        </div>
                    </div>
                </div>
              
            
        )
    }
    //  }, [])
    return (
        <>
            {displayTitle && <Title styles={"yellowTitle mb-3"}><h3>{cat?.title || 'أميركا في أزمة'}</h3></Title>}
            { news && news[0]  ? <div className="NewsTiles">
                {displayTopTwoNews && (
                    <div className="row">
                        {/* 2 Top News */}
                        <div className="col-md-8 col-sm-7">
                            <div className="newBox newBoxf">
                                <div className="NewsImage">
                                    {/* <img className="img-fluid" src={newsImage.src} /> */}
                                    {news[0]?._source?.image ? <img className="img-fluid" src={news[0]?._source.image.url} />:<img className="img-fluid" src={newsImage.src} />}

                                </div>
                                <div className="NewsInfo">
                                   <Link href={`/newsDetails/`+news[0]._id}><a><h3>{news && news[0]?._source?.title}</h3> </a></Link>
                                   {/* <p><a className="ms-3">الإمارات</a> منذ 5 دقائق</p> */}
                                <p> {news[0]?._source?.tags?.map(quote=>{return ( <a className=" ms-3">{quote}</a>)} )}</p>

                                </div>
                            </div>
                        </div>
                        {news[1] ? <div className="col-md-4 col-sm-5">
                            <div className="newBox newBoxfs VideoNews ">
                                <div className="NewsImage">
                                {news[1]?._source?.image ? <img className="img-fluid" src={news[1]?._source.image.url} />:<img className="img-fluid" src={newsImage.src} />}
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
                                <Link href={`/newsDetails/`+news[1]._id}><a><h4>{news && news[1]?._source?.title}</h4> </a></Link>
                                    <p> {news[1]?._source?.tags?.map(quote=>{return ( <a className=" ms-3">{quote}</a>)} )}</p>
                                </div>
                            </div>
                        </div>:<span></span>}
                    </div>
                )}
                {/* 2 Top News End*/}

                {/* Remaining news */}
                <div className="row" >
                {news.length >2 ? fields:<span></span>}
                </div>

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

export default CategoryNewsSection