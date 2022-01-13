import { FC } from "react"
import newsimg from "../../../../styles/images/biden.jpg";

const SecondarySection:FC = () =>{

    return (
        <>
            <div className="NewsList">
                <ul>
                    <li>
                        <div className="newsText">
                            <a href="javascript:voide(0)"><span className="badge bg-success">PRO</span> ايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                            <p><a href="javascript:voide(0)">أمريكا</a> منذ 5 دقائق</p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li>
                    <li>
                        <div className="newsText">
                            <a href="javascript:voide(0)">ايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                            <p><a href="javascript:voide(0)">أمريكا</a> منذ 5 دقائق</p>
                        </div>
                        <div className="newsImage">
                            <img className="img-fluid" src={newsimg.src} />
                        </div>
                    </li>
                    <li>
                        <div className="newsText">
                            <a href="javascript:voide(0)">ايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a>
                            <p><a href="javascript:voide(0)">أمريكا</a> منذ 5 دقائق</p>
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