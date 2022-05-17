import newsImage from "./../../../styles/images/biden.jpg";
import { requests, baseUrlAdmin } from '../../../services/Requests';
import GetData from '../../../services/GetData';
import Link from "next/link";
import {useState, useEffect} from 'react';

const MainNews = () =>{

    const [mainVideoNews, setMainVideoNews] = useState<any>([]);

    useEffect(() => {
        GetData(`${requests.videoNews}&limit=1&pageNo=1`, {}, 'get', false).then(res=>{
            const newsRes = res?.data && res?.data?.length ? res?.data : []
            setMainVideoNews(newsRes[0]);

        }).catch(err=>{
            console.warn(err)
        })

    }, [])

    return (
        <>
            <div className="VideoNews mb-4 latestmainNews">
                <div className="NewsImage">
                    {/*<img className="img-fluid" src={newsImage.src} />*/}
                    <img className="img-fluid" src={mainVideoNews?._source?.thumbnail?.path ? baseUrlAdmin+mainVideoNews?._source?.thumbnail?.path:newsImage.src} />
                </div>
                <div className="PlayTime"><h5>05:21</h5>
                    <div className="btn-text"><span>شاهد الآن</span>
                        <Link href={`/videoNews/` +mainVideoNews?._id}>
                            <a>
                                <button className="btn btn-warning VideoPlay"><i className="fa play_big"></i></button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="NewsContent">
                    {/*<h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>*/}
                    <h4>{mainVideoNews?._source?.title}</h4>
                    <p className="text-white"><a className="text-warning ms-3">الإمارات</a> منذ 5 دقائق</p>
                </div>
            </div>
        </>
    )
}

export default MainNews