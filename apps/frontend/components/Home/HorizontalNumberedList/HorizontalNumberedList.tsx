import { FC } from "react"

const HorizontalNumberedList:FC = () =>{

    return (
        <>
            <div className="horizontalNumberList">
                <div className="primaryTitle"><h3>الأكثر تداولا</h3></div>

                <div className="hNumberList">
                    <ol>
                        <li>وزير الطاقة الجزائري: تأثير متحور أوميكرون على الأسواق العالمية “أولي” ويستلزم “الحذر والمتابعة”</li>
                        <li>الرئيس التنفيذي لـ معدنية السعودية لـ CNBC عربية: مصاريف أرامكو في المحابس ومضخات البترول تبلغ 2- 3 مليار دولار سنويا</li>
                        <li>“أوميكرون” يزلزل أسواق العالم ويعمق المخاوف من استمرار تأثيرات الجائحة</li>
                        <li>فرنسا تسجل أكبر حصيلة إصابات يومية بكورونا منذ أبريل</li>
                        <li>كيف سيتغير مشهد الأسواق في حال توصل شركات الأدوية للقاح ضد سلالة “أوميكرون”</li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default HorizontalNumberedList