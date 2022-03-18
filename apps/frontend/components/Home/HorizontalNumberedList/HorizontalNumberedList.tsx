import { FC } from "react"

const HorizontalNumberedList:FC = () =>{

    return (
        <>
            <div className="horizontalNumberList">
                <div className="primaryTitle"><h3>الأكثر تداولا</h3></div>

                <div className="hNumberList">
                    <ol>
                        <li>
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
                    </ol>
                </div>
            </div>
        </>
    )
}

export default HorizontalNumberedList