

const MainNews = () =>{

    return (
        <>
            <div className="VideoNews mb-4 latestmainNews">
                <div className="NewsImage">
                    <img className="img-fluid" src="/_next/static/media/biden.602d4cc9.jpg"/>
                </div>
                <div className="PlayTime"><h5>05:21</h5>
                    <div className="btn-text"><span>شاهد الآن</span>
                        <button className="btn btn-warning VideoPlay"><i className="fa play_big"></i></button>
                    </div>
                </div>
                <div className="NewsContent">
                    <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>
                    <p className="text-white"><a className="text-warning ms-3">الإمارات</a> منذ 5 دقائق</p>
                </div>
            </div>
        </>
    )
}

export default MainNews