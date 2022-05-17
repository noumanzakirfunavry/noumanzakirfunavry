import { FC, useEffect, useState } from 'react';
import newsImage from '../../../styles/images/biden.jpg';
import Title from '../../Title';
import GetData from '../../../services/GetData';
import { requests, baseUrlAdmin } from '../../../services/Requests';
import Link from "next/link"

const TilesWithColoredBackground: FC = () => {
    // Dynamic list

    const [videoNewsList, setVideoNewsList] = useState<any>([])
    
    useEffect(()=>{
            GetData(`${requests.videoNews}&limit=4&pageNo=1`, {}, 'get', false).then(res=>{
                const newsRes = res?.data && res?.data?.length ? res?.data : []
                //console.log('Video News List::::', newsRes);
                setVideoNewsList(newsRes);

              }).catch(err=>{
                console.warn(err)
              })
    },[])

    return (
        <>
            <div className="NewsTilesBg mb-4">
                <div className="container">
                <div className="TitleBar">
                    <div className="float-start">
                    <Link href={`/latestVideos/`}>
                        <a>
                            <button className="btn btn-outline-light">جميع الفيديو</button>
                        </a>
                    </Link>
                        <button className="btn btn-danger me-3">شاهد البث المباشر</button>
                    </div>
                    <Title styles={'float-end'}>
                        <h2>عربية CNBC</h2>
                    </Title>
                    <div className="clearfix"></div>
                </div>
                <div className="VideoTilesContent">
                <div className="row">
                    <div className="col-lg-7 d-none d-sm-block">
                        <div className="VideoNews mb-4 mb-lg-0">
                            <div className="NewsImage">
                                <img className="img-fluid" src={videoNewsList[0]?._source?.thumbnail?.path ? baseUrlAdmin+videoNewsList[0]?._source?.thumbnail?.path:newsImage.src} />
                            </div>
                            <div className="PlayTime">
                                <h5>05:21</h5>
                                <div className="btn-text">
                                    <span className='PlayButton-flyout'>شاهد الآن</span>
                                    <Link href={`/videoNews/` +videoNewsList[0]?._id}>
                                        <a>
                                            <button className="btn btn-warning VideoPlay">
                                                <i className="fa play_big"></i>
                                                {/* <img className="img-fluid" src={playicon.src} /> */}
                                            </button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="NewsContent">
                                <h4>
                                    {videoNewsList[0]?._source?.title}
                                    {/*
                                    بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم
                                    توقيع ترامب خطة التحفيز الاقتصادي{' '}
                                    */}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                    {
                        videoNewsList?.length && videoNewsList?.map((newsItem:any, index:number)=>{
                            return(
                                (index > 0) &&
                                <div className="col-4 col-lg-12" key={index}>
                                <div className="VideoTiles">
                                    <div className="VideoNews">
                                        <div className="NewsImage">
                                            <img className="img-fluid" src={newsItem?._source?.thumbnail?.path ? baseUrlAdmin+newsItem?._source?.thumbnail?.path:newsImage.src} />
                                        </div>
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span>
                                                <Link href={`/videoNews/` + newsItem?._id}>
                                                    <a>
                                                        <button className="btn btn-warning VideoPlay">
                                                            <i className="fa play_small"></i>
                                                        </button>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NewsContent">
                                        <h4>{videoNewsList[0]?._source?.title}</h4>
                                        {/*
                                        <h4>
                                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة{' '}
                                        </h4>
                            */}
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                    
                            {/*<div className="col-4 col-lg-12">
                                <div className="VideoTiles">
                                    <div className="VideoNews">
                                        <div className="NewsImage">
                                            <img className="img-fluid" src={newsImage.src} />
                                        </div>
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span>
                                                <button className="btn btn-warning VideoPlay">
                                                    <i className="fa play_small"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NewsContent">
                                        <h4>
                                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة{' '}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-lg-12">
                                <div className="VideoTiles">
                                    <div className="VideoNews">
                                        <div className="NewsImage">
                                            <img className="img-fluid" src={newsImage.src} />
                                        </div>
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span>
                                                <button className="btn btn-warning VideoPlay">
                                                    <i className="fa play_small"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NewsContent">
                                        <h4>
                                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة بايدن: سيفقد حوالى 10 ملايين أميركي إعانات {' '}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-lg-12">
                                <div className="VideoTiles">
                                    <div className="VideoNews">
                                        <div className="NewsImage">
                                            <img className="img-fluid" src={newsImage.src} />
                                        </div>
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <div className="btn-text">
                                                <span>شاهد الآن</span>
                                                <button className="btn btn-warning VideoPlay">
                                                    <i className="fa play_small"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NewsContent">
                                        <h4>
                                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة{' '}
                                        </h4>
                                    </div>
                                </div>
                </div>*/}
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>


        </>
    );
};

export default TilesWithColoredBackground;
