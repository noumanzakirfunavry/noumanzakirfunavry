/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import GetData from "apps/frontend/services/GetData";
import { baseUrlAdmin, requests } from "apps/frontend/services/Requests";
import { CategoryNewsProps } from "apps/frontend/types/Types";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import newsImage from "../../../styles/images/biden.jpg";
import Title from "../../Title";

const CategoryNewsSection: FC<CategoryNewsProps> = ({ cat, limit, displayTitle, displayTopTwoNews, displayMoreButton, loopIndex, extended }) => {
    const [news, setCategoryNews] = useState<any[]>([])
    const [limitX, setLimitX] = useState<number>(limit);
   // const pageNo: number = displayMoreButton ? 1 : 1;
    const pageNo = 1;

    useEffect(() => {

        // GetData(`${requests.newsByCategories}?limit=${limit}&pageNo=1`, {}, 'get', false).then(res=>{
            if(cat){
                GetData(`${requests.newsByCategories}${cat.id}?limit=${limitX}&pageNo=${pageNo}`, {}, 'get', false).then(res => {
                    setCategoryNews(res.data)
                }).catch(err => {
                    console.warn(err)
                })

                //console.log('limitX:::::', limitX)
            }
    }, [limitX, cat])
    const fields: JSX.Element[] = [];
    // useEffect(()=>{
       
    for (let i = loopIndex; i < news?.length; i++) {
        const newsPage = news[i]?._source?.isPro ? 'proNews' : 'newsDetails';
        fields.push(
                <div key={i} className="col-md-4 col-sm-6">
                    <div className="newBox VideoNews">

                    {
                        news[i]?._source?.videoId ?
                                <>
                                    <div className="NewsImage img_sm_none">
                                        <img className="img-fluid" src={news[i]?._source?.thumbnail?.path ? baseUrlAdmin+news[i]?._source?.thumbnail?.path:newsImage.src} />
                                    
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <Link href={`/${newsPage}/` + news[i]._id}>
                                                <a>
                                                    <div className="btn-text">
                                                        <span>شاهد الآن</span>
                                                        <button className="btn btn-warning VideoPlay">
                                                            <i className="fa play_small"></i>
                                                        </button>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                 </>

                            :

                                <div className="NewsImage img_sm_none">
                                    {news[i]?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news[i]?._source.image?.path} />:<img className="img-fluid" src={newsImage.src} />}
                                </div>
                    }

                        {/*<div className="NewsImage img_sm_none">
                            {news[i]?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news[i]?._source.image?.path} />:<img className="img-fluid" src={newsImage.src} />}
                                            </div>*/}
                        <div className="NewsInfo">
                        <Link href={`/${newsPage}/`+news[i]._id}><a><h4>{news && news[i]?._source?.title}</h4> </a></Link>
                            {/* <p><a>الإمارات</a> منذ 5 دقائق</p> */}
                            <p> {news[i]?._source?.categories.map((category: any, index: number) =>{return ( <a key={index} className=" ms-3">{category.title}</a>)} )}</p>
                        </div>
                    </div>
                </div>
              
            
        )
    }
    //  }, [])

    const firstNewsPage = news[0]?._source?.isPro ? 'proNews' : 'newsDetails';
    const secondNewsPage = news[1]?._source?.isPro ? 'proNews' : 'newsDetails';

    return (
        <>
            {displayTitle && <Title styles={"yellowTitle mb-3"}><h3>{extended && 'المزيد من'} {cat?.title || 'أميركا في أزمة'} </h3></Title>}
            { news && news[0]  ? <div className="NewsTiles">
                {displayTopTwoNews && (
                    <div className="row">
                        {/* 2 Top News */}
                        <div className="col-md-8 col-sm-7">
                            <div className="newBox newBoxf VideoNews">

                            {
                            news[0]?._source?.videoId ?
                                <>
                                    <div className="NewsImage img_sm_none">
                                        <img className="img-fluid" src={news[0]?._source?.thumbnail?.path ? baseUrlAdmin+news[0]?._source?.thumbnail?.path:newsImage.src} />
                                    </div>
                                    <div className="PlayTime">
                                        <h5>05:21</h5>
                                        <Link href={`/${firstNewsPage}/` + news[0]._id}>
                                            <a>
                                                <div className="btn-text">
                                                    <span>شاهد الآن</span>
                                                    <button className="btn btn-warning VideoPlay">
                                                        <i className="fa play_small"></i>
                                                    </button>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                 </>

                            :

                                <div className="NewsImage img_sm_none">
                                    {news[0]?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news[0]?._source.image?.path} />:<img className="img-fluid" src={newsImage.src} />}
                                </div>
                            }

                                {/*<div className="NewsImage">
                                    {news[0]?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news[0]?._source.image?.path} />:<img className="img-fluid" src={newsImage.src} />}

                                </div>*/}
                               
                                <div className="NewsInfo">
                                   <Link href={`/${firstNewsPage}/`+news[0]._id}><a><h3>{news && news[0]?._source?.title}</h3> </a></Link>
                                   {/* <p><a className="ms-3">الإمارات</a> منذ 5 دقائق</p> */}
                                <p> {news[0]?._source?.categories?.map((category: any, index: number)=>{return ( <a key={index} className=" ms-3">{category.title}</a>)} )}</p>

                                </div>
                            </div>
                        </div>
                        {news[1] ? <div className="col-md-4 col-sm-5">
                            <div className="newBox newBoxfs VideoNews">

                            {
                            news[1]?._source?.videoId ?
                                <>
                                    <div className="NewsImage img_sm_none">
                                        <img className="img-fluid" src={news[1]?._source?.thumbnail?.path ? baseUrlAdmin+news[1]?._source?.thumbnail?.path:newsImage.src} />
                                    </div>
                                    <div className="PlayTime">
                                        <h5>05:21</h5>
                                        <Link href={`/${secondNewsPage}/` + news[1]._id}>
                                            <a>
                                                <div className="btn-text">
                                                    <span>شاهد الآن</span>
                                                    <button className="btn btn-warning VideoPlay">
                                                        <i className="fa play_small"></i>
                                                    </button>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                 </>

                            :

                                <div className="NewsImage img_sm_none">
                                    {news[1]?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news[1]?._source.image?.path} />:<img className="img-fluid" src={newsImage.src} />}
                                </div>
                            }

                               {/* <div className="NewsImage">
                                {news[1]?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news[1]?._source.image?.path} />:<img className="img-fluid" src={newsImage.src} />}
                        </div>*/}
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
                                <Link href={`/${secondNewsPage}/`+news[1]._id}><a><h4>{news && news[1]?._source?.title}</h4> </a></Link>
                                    <p> {news[1]?._source?.categories?.map((category: any, index: number) => {return ( <a key={index} className=" ms-3">{category.title}</a>)} )}</p>
                                </div>
                            </div>
                        </div>:<span></span>}
                    </div>
                )}
                {/* 2 Top News End*/}

                {/* Remaining news */}
                <div className="row" >
                {news.length > loopIndex ? fields:<span></span>}
                </div>

                {/* <div className="row">
                  { fields}
                </div> */}
            </div> :<div>No Data</div>
            }
            {
                displayMoreButton && (
                    news?.length === limitX &&
                    <div className="text-center mt-3 mb-4 more_btn" onClick={() => setLimitX(limitX + loopIndex - 2)}>
                        <button className="btn btn-outline-primary">المزيد</button>
                    </div>
                )
            } 
        </>
    )
}

export default CategoryNewsSection