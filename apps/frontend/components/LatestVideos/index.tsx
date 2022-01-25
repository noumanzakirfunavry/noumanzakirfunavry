import AdBanner from "../Shared/AdBanner/AdBanner"
import NewsListTiles from "../Shared/NewsListTiles/NewsListTiles"
import SideBar from "../Shared/SideBar/SideBar"

const LatestVideos = () =>{

    return (
        <>
        <div className="container"> 
            <AdBanner />

            <div className="pageTitle PageTitleYellow"><h2>أحدث مقاطع الفيديو</h2></div>

            <div className='row'>
                <div className='col-md-8'>
                     

                <div className="VideoNews mb-4">
                    <div className="NewsImage">
                            <img className="img-fluid" src="/_next/static/media/biden.602d4cc9.jpg"/>
                        </div>
                        <div className="PlayTime"><h5>05:21</h5>
                            <div className="btn-text"><span>شاهد الآن</span>
                                <button className="btn btn-warning VideoPlay"><i className="fa fa-play"></i></button>
                            </div>
                        </div>
                        <div className="NewsContent">
                            <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>
                            <p className="text-white"><a className="text-warning ms-3">الإمارات</a> منذ 5 دقائق</p>
                        </div>
                </div>

                <NewsListTiles newsList={[]}/>
                    <div className="text-center mt-3">
                        <button className="btn btn-outline-primary">المزيد</button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                </div>
            </div>
        </div>
        </>
    )
}

export default LatestVideos