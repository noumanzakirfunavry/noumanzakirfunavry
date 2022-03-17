/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import NewsInfoBox from "apps/frontend/components/Shared/NewsInfoBox/NewsInfoBox";
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import smalllogo from "../../styles/images/cnbc-logo.svg";
import Title from "apps/frontend/components/Title";
import ArticleDetails from "apps/frontend/components/NewsDetails/ArticleDetails";
import PageCatgories from "apps/frontend/components/Shared/PageCategories/PageCategories";
import HorizontalFooter2NewsSlider from "apps/frontend/components/Shared/NewsFooter2Slider";

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner/>

               <div className="row justify-content-center">
                   <div className="col-9">
                   <Title styles={"pageSimpleTitle mb-5"}>
                   <div className="newsdetail_title">
                   {/* <span className="badge bg-success">PRO</span> */}
                    <h1 className="fw-bold">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h1></div>
                </Title></div>
                <div className="col-1"></div>
                   </div>

                <div className="SocialHeaderMobile">
                    <div className="row ">

                        <div className="col-9">
                            <div className="newsSocial">
                                <ul>
                                    <li>
                                        <a><i className="fa fa-envelope"></i></a>
                                    </li>
                                    <li>
                                        <a><i className="fab fa-whatsapp"></i></a>
                                    </li>
                                    <li>
                                        <a><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="logo">
                                <img className="img-fluid" src={smalllogo.src} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className='col-md-7'>
                        <NewsInfoBox/>
                    </div>
                    <div className='col-md-3'>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-lg-7'>
                        <ArticleDetails/>
                    </div>
                    <div className='col-lg-3'>
                        <SideBar sideBarSequence={[{componentType:'Latest', position:1},  {componentType:'numbered', position:1, title:'الأكثر قراءة'}, {componentType:'SmallBanner', position:2}]}/>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-8"><PageCatgories/></div>
                </div>
                <div className="mb-3">
                <Title styles={"yellowTitle"}>
                    <h3>أخبار ذات صلة</h3>
                </Title>
                <HorizontalFooter2NewsSlider />
            </div>

            </div>
        </>
    )
}

export default Index