/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import NewsDetails from "apps/frontend/components/NewsDetails"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import NewsInfoBox from "apps/frontend/components/Shared/NewsInfoBox/NewsInfoBox";
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import smalllogo from "../../styles/images/cnbc-logo.svg";
import Title from "apps/frontend/components/Title";

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner/>

                {/* <Title styles={"pageSimpleTitle mb-5"}>
                    <span className="badge bg-success">PRO</span>
                    <h1>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h1>
                </Title> */}

                {/* <div className="SocialHeaderMobile">
                    <div className="row">

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
                </div> */}

                {/* <div className="row">
                    <div className='col-md-8'>
                        <NewsInfoBox/>
                    </div>
                </div> */}
                <div className="PageBuilder-pageRow">
                    <div className='PageBuilder-col-9'>
                        <iframe height={'100%'} width="100%" src={"http://157.90.67.186:80/zagtrader/widgets/watchlist/index.php?ticker_id=10696,1128,1130,10905,11489,105847"}></iframe>
                    </div>
                    <div className='PageBuilder-sidebar mt-0 pt_0'>
                        <SideBar sideBarSequence={[{ componentType: 'simple', position: 2 }, {componentType:'SmallBanner', position:1}]}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index