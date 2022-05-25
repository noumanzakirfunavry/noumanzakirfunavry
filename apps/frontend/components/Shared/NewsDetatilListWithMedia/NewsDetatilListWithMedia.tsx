/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import newsimg from "../../../styles/images/biden.jpg";
import dateFormat from "dateformat"
import Image from "next/image";
import Link from "next/link";
import { baseUrlAdmin } from "apps/frontend/services/Requests";

const NewsDetatilListWithMedia = ({dispalyMoreButton, newsList}) =>{
    console.log('secondary section::::', newsList);
    return (
        <>
            <div className="NewsList">
                <ul>
                    {
                       newsList?.length && newsList?.map((news:any, index:number)=>{
                            const newsPage = newsList[0]?._source?.isPro ? 'proNews' : 'newsDetails';
                            return (
                                <li key={index}>
                                    <div className="newsText">
                                        <Link href={`/${newsPage}/` + news?._id}><a style={{wordWrap:'break-word'}}>{news?._source?.isPro && (<span className="badge bg-success ms-3">PRO</span>)}{news?._source?.title}</a></Link>
                                        <p>
                                            { // to show categories
                                              news?._source?.categories?.map((category: any, categoryIndex: number) => {
                                                  return(
                                                    <a key={categoryIndex}>{category.title}</a>
                                                  )
                                              })  
                                            }
                                        </p>
                                    </div>
                                    
                                    { // show thmbnail with play icon if video news
                                     news?._source?.videoId ?
                                            <div className="NewsTiles">
                                                <div className="newBox">
                                                    <div className="newsImage">
                                                        <img className="img-fluid" src={news?._source?.thumbnail?.path ? baseUrlAdmin+news?._source?.thumbnail?.path:newsimg.src} />
                                                        <div className="PlayTime">
                                                        <h5>05:21</h5>
                                                        <Link href={`/${newsPage}/` + news._id}>
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
                                                    
                                                </div>
                                            </div>
                                                    
                                            : // else show image

                                            <div className="newsImage">
                                                    {news?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news?._source?.image?.path} /> : <img className="img-fluid" src={newsimg.src} />}
                                            </div>
                                    }

                                    {/*<div className="newsImage">
                                        {news?._source?.image ? <img alt="img" className="img-fluid" src={baseUrlAdmin+news._source?.image?.path} />:<img alt="img" className="img-fluid" src={newsimg.src} />}
                                        {news?._source?.videoId && (<iframe width="190" src="https://www.youtube.com/embed/SbsgyRhYbdw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
                                        </div>*/}
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                {
                    dispalyMoreButton && (
                        <div className="text-center mt-3 mb-4 mb-md-3">
                            <button className="btn btn-outline-primary btn-sm-wide">المزيد</button>
                        </div> 
                    )
                }
                    {/* <li>
                        <div className="newsText">
                            <a href="#"><span className="badge bg-success ms-3">PRO</span>
                             سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                            <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li>
                    <li>
                        <div className="newsText">
                            <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                            <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} /> 
                            <iframe width="190" src="https://www.youtube.com/embed/SbsgyRhYbdw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </li>
                    <li>
                        <div className="newsText">
                            <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                            <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>

                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li> 

                    <li>
                        <div className="newsText">
                            <a href="#">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي  </a>
                            <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>

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
                
            </div>


            {/* <div className="text-center mt-3 mb-4 mb-md-3">
                <button className="btn btn-outline-primary btn-sm-wide">المزيد</button>
            </div> */}
        </>
       
    )
}

export default NewsDetatilListWithMedia