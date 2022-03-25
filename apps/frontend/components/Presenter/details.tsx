import presenterimg from "../../styles/images/presenterpic.jpg";
const PresenterDetails = () => {

    return (
        <>
            <div className='row'>
                <div className="col-xl-4 offset-xl-1 col-md-5 mb-4 ms-0 me-auto">
                    <img className="img-fluid" src={presenterimg.src} />
                </div>
                <div className="col-xl-6 col-md-7 offset-xl-1">
                    <h1>الطيب عبد الماجد</h1>
                    <h5 className="mb-3">كبير مذيعي CNBC عربية</h5>
                    <a className="mb-3 text-secondary color-secondary fs20_bold d-block" title="Follow on Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <p>كان يؤهل نفسه في بداية حياته ليكون رجل قانون، يطبق المواد والبنود واللوائح بحذافيرها ولا يسمح بالخروج عنها!
                    </p>
                    <p>ولحسن حظنا استطاعت أضواء العمل التلفزيوني إغراء الفتى الأسمر الحاصل على شهادة القانون من جامعة الخرطوم  ليشق طريقه  في العمل الاعلامى وتقديم البرامج والاخبار متنقلا بين محطات تلفزيونية مختلفة من بالخرطوم مرورا بالشارقة  ليستقر به المقام عند  CNBC عربية منذ نشأتها  فطبق قانون العرض والطلب عبر العديد من البرامج التى يقدمها فكان وجها من الوجوه المميزة للقناة …!! الطيب يقرض الشعر ….يكتب الرواية … ومقالاته تنشر فى الصحف العربية.</p>
                </div>
            </div>
        </>
    )
}

export default PresenterDetails