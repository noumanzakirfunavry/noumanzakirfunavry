import newsImage from "./../../styles/images/biden.jpg";
import Link from "next/link";
import { useState, useEffect } from "react";
import { requests, baseUrlAdmin } from "../../services/Requests";
import GetData from "../../services/GetData";

const VideoNewsTiles = () => {

    const [videoNewsList, setVideoNewsList] = useState<any>()
    const [limit, setLimit] = useState<any>(19)
    
    useEffect(()=>{
            GetData(`${requests.videoNews}&limit=${limit}&pageNo=1`, {}, 'get', false).then(res=>{
                const newsRes = res?.data && res?.data?.length ? res?.data : []
                setVideoNewsList(newsRes);

              }).catch(err=>{
                console.warn(err)
              })
    },[limit])

    return (
        <>
          <div className="NewsTiles">
            <div className="row">

              { // show video news
                  videoNewsList?.length && videoNewsList.map((newsItem: any, index: number)=>{
                    return(
                        (index > 0) &&
                          <div className="col-md-4 col-sm-6" key={index}>
                            <div className="newBox VideoNews">
                                <div className="NewsImage">
                                  {/*<img className="img-fluid" src={newsImage.src} />*/}
                                  <img className="img-fluid" src={newsItem?._source?.thumbnail?.path ? baseUrlAdmin+newsItem?._source?.thumbnail?.path:newsImage.src} />
                                    <div className="PlayTime">
                                      <h5>05:21</h5>
                                      <div className="btn-text">
                                          <span>شاهد الآن</span>
                                          <Link href={`/videoNews/` +newsItem?._id}>
                                            <button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
                                          </Link>
                                      </div>
                                    </div>
                                  </div>
                                <div className="NewsInfo">
                                    {newsItem?._source?.title}
                                    {/*<h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h4>*/}
                                    <p><a>الإمارات</a> منذ 5 دقائق</p>
                                </div>
                            </div>
                        </div>
                      )
                  })
              }

                {/*<div className="col-md-4 col-sm-6">
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
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
                    <div className="newBox VideoNews">
                        <div className="NewsImage">
                          <img className="img-fluid" src={newsImage.src} />

                            <div className="PlayTime">
                              <h5>05:21</h5>
                              <div className="btn-text">
                                  <span>شاهد الآن</span><button className="btn btn-warning VideoPlay"><i className="fa play_small"></i></button>
                              </div>
                            </div>

                          </div>
                        <div className="NewsInfo">
                            <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h4>
                            <p><a>الإمارات</a> منذ 5 دقائق</p>
                        </div>
                    </div>
                </div>*/}

            </div>
        </div>
        <div className="text-center mt-3 mb-4"><button className="btn btn-outline-primary"  onClick={() => setLimit(limit + 18)}>المزيد</button></div>

        </>
    )
}

export default VideoNewsTiles