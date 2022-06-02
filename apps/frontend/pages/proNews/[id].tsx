/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import NewsDetails from "apps/frontend/components/NewsDetails"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import NewsInfoBox from 'apps/frontend/components/Shared/NewsInfoBox/NewsInfoBox';
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import smalllogo from "../../styles/images/cnbc-logo.svg";
import Title from "apps/frontend/components/Title";

import GetData from 'apps/frontend/services/GetData';
import { requests } from 'apps/frontend/services/Requests';
import HtmlData from '../../components/Shared/HtmlData/HtmlData';
import { GetMetaData } from 'apps/frontend/services/StaticData';
import SEO from '../../components/Shared/SEO/SEO';
import RecordNotFound from 'apps/frontend/components/Shared/RecordNotFound/RecordNotFound';

const Index = (props: any) => {

    const { news, metaData } = props;

    return (
        Object.keys(news).length > 0 ?
        <>
            <SEO metaData={metaData} />
            <div className="container">
                <AdBanner/>

               <div className="row justify-content-center">
                   <div className="col-xl-9">
                   <Title styles={"pageSimpleTitle mb-5"}>
                   <div className="newsdetail_title">
                        <span className="badge bg-success">PRO</span>
                        {/*<h1 className="fw-bold">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h1>*/}
                        <h1 className="fw-bold">{news?.title} </h1>
                    </div>
                </Title></div>
                <div className="col-xl-1"></div>
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
                    <div className='col-xl-7 col-lg-9'>
                    <NewsInfoBox news={news} />
                    </div>
                    <div className='col-xl-3 col-lg-3'>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-xl-7 col-lg-9'>
                        <NewsDetails news={news} />
                    </div>
                    <div className='col-xl-3 col-lg-3'>
                        <SideBar sideBarSequence={[{componentType:'Latest', position:1},  {componentType:'numbered', position:1, title:'الأكثر قراءة'}, {componentType:'SmallBanner', position:2}]}/>
                    </div>
                </div>
            </div>
        </>
        :
        <RecordNotFound />
    )
}


// export async function getStaticPaths() {
//     return {
//       paths: [
//         //{params: {id: '3'}},
//         //{params: {id: '2'}}
//       ],
//       fallback: 'blocking',
//     };
//   }
  
//   export async function getStaticProps(context) {
//     const resPost = await GetData(
//       `${requests.NewsById + context.params.id}`,
//       {},
//       'get',
//       false
//     );
//     const newsRes = resPost?.data?.response?.news ? resPost?.data?.response?.news : {}
  
//     const seoData = {
//       ...newsRes?.seoDetail,
//       image: newsRes?.image,
//     };
  
//     const metaData = GetMetaData(seoData);
  
//     return {
//       props: {
//         metaData: metaData,
//         news: newsRes,
//       },
//       revalidate: 50,
//     };
//   }

  export async function getServerSideProps(context){
    const resPost = await GetData(
        `${requests.NewsById + context.params.id}`,
        {},
        'get',
        false
      );
      const newsRes = resPost?.data?.response?.news ? resPost?.data?.response?.news : {}
    
      const seoData = {
        ...newsRes?.seoDetail,
        image: newsRes?.image,
      };
    
      const metaData = GetMetaData(seoData);
    
      return {
        props: {
          metaData: metaData,
          news: newsRes,
        },
        //revalidate: 50,
      };
  }

  

export default Index