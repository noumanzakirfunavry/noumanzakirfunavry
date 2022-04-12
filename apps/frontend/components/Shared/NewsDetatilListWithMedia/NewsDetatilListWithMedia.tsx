/* eslint-disable @next/next/no-img-element */
import newsimg from "../../../styles/images/biden.jpg";
import dateFormat from "dateformat"
import Image from "next/image";

const NewsDetatilListWithMedia = ({dispalyMoreButton, newsList}) =>{

    return (
        <>
            <div className="NewsList">
                <ul>
                    {
                        newsList?.map((news, index)=>{
                            return (
                                <li key={index}>
                                    <div className="newsText">
                                        <a href="#">{news.isPro && (<span className="badge bg-success ms-3">PRO</span>)}{news?.news?.title}</a>
                                        <p><a href="#">{news?.news?.authorName}</a> <b> {dateFormat(news?.news?.createdAt, "dd-mm-yyyy")} </b></p>
                                    </div>
                                    <div className="newsImage">
                                        {news?.news?.imageId && (<img alt="img" className="img-fluid" src={newsimg.src} />)}
                                        {news?.news?.videoId && (<iframe width="190" src="https://www.youtube.com/embed/SbsgyRhYbdw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
                                    </div>
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