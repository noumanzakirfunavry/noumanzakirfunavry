import { useEffect, useState } from 'react';
import GetData from '../../../services/GetData';
import { requests } from '../../../services/Requests';
import Link from "next/link"

const SplitScreenNewsList = () =>{

    const [latestMarketNewsList, setLatestMarketNewsList] = useState<any>([])
    const [latestStockNewsList, setLatestStockNewsList] = useState<any>([])
    
    useEffect(()=>{
        getLatestMarketNews();
        getLatestStockNews();
    },[])

    const getLatestMarketNews = () => {
        GetData(`${requests.latestMarketCategory}`, {}, 'get', false).then(res => {
            const marketNewsCategoryId = res?.data?.response?.id;
            marketNewsCategoryId && GetData(`${requests.newsByCategories}${marketNewsCategoryId}?limit=6&pageNo=1`, {}, 'get', false).then(result => {
            setLatestMarketNewsList(result?.data);
        }).catch(err=>{
            console.warn(err)
        })
        
      }).catch(err=>{
        console.warn(err)
      })
    }

    const getLatestStockNews = () => {
        GetData(`${requests.latestStockCategory}`, {}, 'get', false).then(res => {
            const stockNewsCategoryId = res?.data?.response?.id;
            stockNewsCategoryId && GetData(`${requests.newsByCategories}${stockNewsCategoryId}?limit=6&pageNo=1`, {}, 'get', false).then(result => {
            setLatestStockNewsList(result?.data);
        }).catch(err=>{
            console.warn(err)
        })
        
      }).catch(err=>{
        console.warn(err)
      })
    }

    return (
        <>
           <div className="stockMarketNews">
               <div className="row">
                   <div className="col-md-6">
                   <div className="sectionTitle">
                           <h3>أحدث أخبار الأسواق</h3>
                       </div>
                    <div className="NewsList">
                        <ul>
                            {
                                latestMarketNewsList?.length && latestMarketNewsList?.map((newsItem:any, index:number)=>{
                                    const newsPage = newsItem?._source?.isPro ? 'proNews' : 'newsDetails';
                                    return(
                                        <li key={index}>
                                            <div className="newsText">
                                                <Link href={`/${newsPage}/` + newsItem?._source?.id}><a>{newsItem?._source?.title}</a></Link>
                                                {/*<p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>*/}
                                                <p>
                                                    { // to show categories
                                                        newsItem?._source?.categories?.map((category: any, categoryIndex: number) => {
                                                            return(
                                                                <a key={categoryIndex}>{category.title}</a>
                                                            )
                                                        })  
                                                    }
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                           {/*<li>
                                <div className="newsText">
                                    <a href="#"> بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                    <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                                </div>
                            </li>
                            <li>
                                <div className="newsText">
                                    <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                    <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                                </div>
                            </li>
                            <li>
                                <div className="newsText">
                                    <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                    <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                                </div>
                        </li>*/}
                        </ul>
                    </div>
                   </div>
                   <div className="col-md-6">
                       <div className="sectionTitle">
                           <h3>أحدث أخبار الأسهم</h3>
                       </div>
                    <div className="NewsList">
                        <ul>
                            {
                                latestStockNewsList?.length && latestStockNewsList?.map((newsItem:any, index:number)=>{
                                    const newsPage = newsItem?._source?.isPro ? 'proNews' : 'newsDetails';
                                    return(
                                        <li key={index}>
                                            <div className="newsText">
                                                <Link href={`/${newsPage}/` + newsItem?._source?.id}><a>{newsItem?._source?.title}</a></Link>
                                                {/*<p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>*/}
                                                <p>
                                                    { // to show categories
                                                        newsItem?._source?.categories?.map((category: any, categoryIndex: number) => {
                                                            return(
                                                                <a key={categoryIndex}>{category.title}</a>
                                                            )
                                                        })  
                                                    }
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            {/*<li>
                                <div className="newsText">
                                    <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                    <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                                </div>
                            </li>
                            <li>
                                <div className="newsText">
                                    <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                    <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                                </div>
                            </li>
                            <li>
                                <div className="newsText">
                                    <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                                    <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                                </div>
                    </li>*/}
                        </ul>
                    </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default SplitScreenNewsList