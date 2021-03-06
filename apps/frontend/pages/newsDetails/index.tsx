/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
// TODO: DummyNewsInfoBox will be updated with actual NewsInfoBox later on
import DummyNewsInfoBox from "apps/frontend/components/Shared/NewsInfoBox/DummyNewsInfoBox";
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import smalllogo from "../../styles/images/cnbc-logo.svg";
import Title from "apps/frontend/components/Title";
import ArticleDetails from "apps/frontend/components/NewsDetails/ArticleDetails";
import PageCatgories from "apps/frontend/components/Shared/PageCategories/PageCategories";
import HorizontalFooter2NewsSlider from "apps/frontend/components/Shared/NewsFooter2Slider";
import HorizontalNumberedList from "apps/frontend/components/Home/HorizontalNumberedList/HorizontalNumberedList";
import MostReadSlider from "apps/frontend/components/Home/MostReadSlider";

const Index = () =>{

    return (
        <>
        <div className="newsAarticaldetailwrap">
            <div className="container">
                <AdBanner/>

               <div className="row justify-content-center">
                   <div className="col-xl-9">
                   <Title styles={"pageSimpleTitle mb-5"}>
                   <div className="newsdetail_title">
                   {/* <span className="badge bg-success">PRO</span> */}
                    <h1 className="fw-bold">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h1></div>
                </Title></div>
                <div className="col-xl-1"></div>
                   </div>
        <div className="newsDetial_w">
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

                <div className="PageBuilder-pageRow justify-content-center">
                    <div className='PageBuilder-col-9'>
                        <DummyNewsInfoBox/>
                    </div>
                    <div className='PageBuilder-sidebar'>
                    </div>
                </div>
                <div className="PageBuilder-pageRow justify-content-center news_artical_detail">
                    <div className='PageBuilder-col-9'>
                        <ArticleDetails/>
                    </div>
                    <div className='PageBuilder-sidebar hide_div_mobile'>
                        <SideBar sideBarSequence={[{componentType:'Latest', position:1},  {componentType:'numbered', position:1, title:'الأكثر قراءة'}, {componentType:'SmallBanner', position:2}]}/>
                    </div>
                </div>

                </div>
                <div className="row mb-4">
                    <div className="col-12 col-xl-8"><PageCatgories tags={[]}/></div>
                </div>
                <div className="bannerAddMedia hide_div_web">
        <AdBanner />
        </div>
                <div className="mb-3">
                <Title styles={"yellowTitle"}>
                    <h3>أخبار ذات صلة</h3>
                </Title>
                <HorizontalFooter2NewsSlider />
            </div>

            <div className='mb-5 hide_div_web'>
            <HorizontalNumberedList />
        </div>
        <div className='PageBuilder-sidebar hide_div_web'>
                    
                     
                        {/* <SideBar sideBarSequence={[{ componentType: 'simple', position: 1 , title:'الأكثر قراءة'} ]} /> */}
                    
                        <MostReadSlider/>
  
                   
              </div>
            </div>
            </div>
        </>
    )
}

export default Index