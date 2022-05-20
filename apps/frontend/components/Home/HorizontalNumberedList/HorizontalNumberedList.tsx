import { FC, useState, useEffect } from "react";
import GetData from "../../../services/GetData";
import { requests } from "../../../services/Requests";
import Link from "next/link";

const HorizontalNumberedList:FC = () =>{

    const [trendingNewsList, setTrendingNewsList] = useState<any>([])
    
        useEffect(()=>{
            GetData(`${requests.trendingNews}&limit=5&pageNo=1`, {}, 'get', false).then(res=>{
                const newsRes = res.data && res.data.length ? res.data : []
                setTrendingNewsList(newsRes);
                
              }).catch(err=>{
                console.warn(err)
              })
        },[])   

    return (
        <>
            <div className="horizontalNumberList">
                <div className="primaryTitle"><h3>الأكثر تداولا</h3></div>

                <div className="hNumberList">
                    <ol>
                    {  
                    trendingNewsList.length && trendingNewsList.map((item: any, index: number)=>{
                            return(
                                <li key={index}>
                                    <Link href={`/newsDetails/` + item._id}><a >{item?._source?.title}</a></Link>
                                </li>                           
                            )
                        })
                    }
                      {/* <li>
                            <a href="javascript:void(0)">
                            وزير الطاقة الجزائري: تأثير متحور أوميكرون على الأسواق العالمية “أولي” ويستلزم “الحذر والمتابعة”</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            الرئيس التنفيذي لـ معدنية السعودية لـ CNBC عربية: مصاريف أرامكو في المحابس ومضخات البترول تبلغ 2- 3 مليار دولار سنويا</a>
                        </li>
                        <li><a href="javascript:void(0)">
                        “أوميكرون” يزلزل أسواق العالم ويعمق المخاوف من استمرار تأثيرات الجائحة
                            </a></li>
                        <li><a href="#">
                            فرنسا تسجل أكبر حصيلة إصابات يومية بكورونا منذ أبريل</a></li>
                        <li><a href="javascript:void(0)">
                        كيف سيتغير مشهد الأسواق في حال توصل شركات الأدوية للقاح ضد سلالة “أوميكرون”</a></li>
                    */}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default HorizontalNumberedList