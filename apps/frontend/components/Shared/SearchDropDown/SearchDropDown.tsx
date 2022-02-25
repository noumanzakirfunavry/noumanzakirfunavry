import { FC } from "react";
import newslistimg from "../../../styles/images/biden2.jpg";
import Title from "../../Title";

const SearchDropDown:FC<any> = ({data}) => {
    
    const keys = Object.keys(data)
    return (
        
        <div className='searchResulstBox'>
            <Title styles={"topBorderText"}>
                <h3>الأسهم ذات الصلة</h3>
            </Title>
            <div className="wordCountList">
                <div className="table-responsive">
                    <table className="table table-borderless table-striped">
                        {
                            keys.map((key:string, index:number)=>{
                                return (
                                    <tr key={index}>
                                        <td>
                                            <h5 className="m-0 p-0">{data[key].MarketMIC}</h5>
                                            {data[key].MarketSymbol}
                                        </td>
                                        <td className="text-start">
                                            <div className="p-0">{data[key].LastPrice}</div>
                                            <div className="p-0 text-success">{`(3.09%)  ${data[key].LastBid}`}</div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {/* <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="m-0 p-0">AMZ</h5>
                                Amazon Inc
                            </td>
                            <td className="text-start">
                                <div className="p-0">3231.50</div>
                                <div className="p-0 text-success">(3.09%)  99.40</div>
                            </td>
                        </tr> */}
                    </table>
                </div>
            </div>
            <Title styles={'topBorderText'}>
                <h3>نتيجة البحث</h3>
            </Title>
            <div className="searchResultList">
                <div className="NewsList">
                    <ul>
                        <li>
                            <div className="newsText">
                                <h6><a> بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h6>
                                <p><a>أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="newsImage">
                                <img className="img-fluid" src={newslistimg.src} />
                            </div>
                        </li>
                        <li>
                            <div className="newsText">
                                <h6><a> بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h6>
                                <p><a>أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="newsImage">
                                <img className="img-fluid" src={newslistimg.src} />
                            </div>
                        </li>
                        <li>
                            <div className="newsText">
                                <h6><a> بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h6>
                                <p><a>أمريكا</a> منذ 5 دقائق</p>
                            </div>
                            <div className="newsImage">
                                <img className="img-fluid" src={newslistimg.src} />
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SearchDropDown
    