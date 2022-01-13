import { FC } from "react"
import newsimg from "../../../../styles/images/biden.jpg";

const SecondarySection:FC = () =>{

    return (
        <>
            <div className="NewsList">
                <ul>
                    <li>
                        <div className="newsText">
                            <a href=""><span className="badge bg-success">PRO</span> ايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                            <p><a href="">أمريكا</a> منذ 5 دقائق</p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li>
                    <li>
                        <div className="newsText">
                            <a href="">ايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                            <p><a href="">أمريكا</a> منذ 5 دقائق</p>
                        </div>
                        <div className="newsImage">
                            {/* <img className="img-fluid" src={newsimg.src} /> */}
                            <iframe width="190" src="https://www.youtube.com/embed/SbsgyRhYbdw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </li>
                    <li>
                        <div className="newsText">
                            <a href="">ايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                            <p><a href="">أمريكا</a> منذ 5 دقائق</p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SecondarySection