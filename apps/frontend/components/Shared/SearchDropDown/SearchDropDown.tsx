import newslistimg from "../../../styles/images/biden2.jpg";

const SearchDropDown = () => {
    
    return (
        
        <div className='searchResulstBox'>
            <div className='topBorderText'>
                <h3>الأسهم ذات الصلة</h3>
            </div>
            <div className="wordCountList">
                <div className="table-responsive">
                    <table className="table table-borderless table-striped">
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
                    </table>
                </div>
            </div>
            <div className='topBorderText'>
                <h3>نتيجة البحث</h3>
            </div>
            <div className="searchResultList">
                <div className="NewsList mb-4">
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
    