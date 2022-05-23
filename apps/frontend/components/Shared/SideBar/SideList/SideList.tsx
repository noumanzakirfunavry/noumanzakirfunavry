/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { SideListProps } from "apps/frontend/types/Types"
import styles from "./sidelist.module.css";
import { FC, useEffect, useState } from "react";
import newsImage from "../../../../styles/images/biden.jpg";
import Title from "apps/frontend/components/Title";
import GetData from "apps/frontend/services/GetData";
import { requests, baseUrlAdmin, limitOfList } from "apps/frontend/services/Requests";
import Link from "next/link";
import TimeAgoArabicFormat from "../../TimeAgoCustom/TimeAgoArabicFormat";


const SideList:FC<SideListProps> = ({type, title}) =>{
    const [latestNewsList, setLatestNewsList] = useState<any>([]);
    const [mostReadNewsList, setMostReadNewsList] = useState<any>([]);

      useEffect(() => {
        // get data for latest news in side bar
        GetData(`${requests.latestNews}limit=${limitOfList}&pageNo=1`, {}, 'get', false).then(res=>{
            const newsRes = res?.data && res?.data?.length ? res?.data : []
            setLatestNewsList(newsRes);

        }).catch(err=>{
            console.warn(err)
        })

        GetData(`${requests.mostReadNews}limit=${limitOfList}&pageNo=1`, {}, 'get', false).then(res=>{
            const newsRes = res.data?.response && res.data?.response?.length ? res.data?.response : []
            //console.log('Most Read News:::::', newsRes)
            setMostReadNewsList(newsRes);

        }).catch(err=>{
            console.warn(err)
        })

      }, [])

      
    return (
        <>
        <div className={styles.sidebar}>

            <div className={styles.listBody}>

              {
                type === "numbered" && (
                  title === "الأكثر قراءة" ? // show most read news :: api data
                  <>
                    <div className="sideSimpleListWrap">
                     <Title styles={styles.themeTitle}>
                        <h4> {title} </h4>
                     </Title>
                    <ul className={styles.sidenumberList}>
                         {
                            mostReadNewsList?.length && mostReadNewsList?.map((newsItem:any, index:number)=>{
                                  const newsPage = newsItem?.news?.isPro ? 'proNews' : 'newsDetails';
                                  return(
                                    <li key={index} >
                                        <Link href={`/${newsPage}/` + newsItem?.news?.id}><a>{newsItem?.news?.title}</a></Link>
                                    </li>
                                  )
                            })
                          }
                    </ul>
                    </div>
                  </>
                  :
                  <>
                    <div className="sideSimpleListWrap">
                     <Title styles={styles.themeTitle}>
                        <h4> {title} </h4>
                     </Title>
                    <ul className={styles.sidenumberList}>
                      <li key={'12'} >
                        <a href="/newsDetails">
                        أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية
                        لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين
                        أميركي إعانات البطالة ثر من المتوقع
                        </a></li>
                        <li key={'343'}><a href="#">
                        النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                        </a></li>
                        <li key={'675'}><a href="#">
                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة
                        </a></li>
                        <li key={'34543'}><a href="#">
                        النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                        </a></li>
                        <li key={'fdw43'}><a href="#">
                        أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية
                        لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين
                        أميركي إعانات البطالة ثر من المتوقع
                        </a></li>
                        <li key={'fd43re3f'}><a href="#">
                        النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                        </a></li>
                        <li key={'sdf43t'}><a href="#">
                        بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة
                        </a></li>
                        <li key={'sdf54'}><a href="#">
                        النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                        </a></li>
                    </ul>
                    </div>
                  </>
                )
              }
              {
                type === "simple" && (
                  title === "الأكثر قراءة" ? // show most read news :: api data
                    <>
                    <div className="sideSimpleListWrap">
                      <Title styles={styles.themeTitle}>
                          <h4> {title} </h4>
                      </Title>

                    <ul className={styles.sidesimpleList}>
                          {
                            mostReadNewsList?.length && mostReadNewsList?.map((newsItem:any, index:number)=>{
                                  const newsPage = newsItem?.news?.isPro ? 'proNews' : 'newsDetails';
                                  return(
                                  <li key={index} >
                                      <div className="NewsImage show_mobile">
                                          <img className="img-fluid" src={newsItem?.news?.image?.path ? baseUrlAdmin+newsItem?.news?.image?.path:newsImage.src} />
                                      </div>
                                      <Link href={`/${newsPage}/` + newsItem?.news?.id}><a>{newsItem?.news?.title}</a></Link>
                                      <p>
                                        { // to show categories
                                            newsItem?.news?.categories?.map((category: any, categoryIndex: number) => {
                                                return(
                                                    <a key={categoryIndex}>{category.title}</a>
                                                )
                                            })  
                                        }
                                      </p>
                                      {/*<p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>*/}
                                  </li>
                                  )
                              })
                          }
                      </ul></div>
                  </>

                  :

                  <>
                    <div className="sideSimpleListWrap">
                      <Title styles={styles.themeTitle}>
                          <h4> {title} </h4>
                      </Title>

                    <ul className={styles.sidesimpleList}>
                        <li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                          <li key={'12'} >
                          <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                            <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                          <li key={'12'} >
                          <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                            <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                          <li key={'12'} >
                          <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                            <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                          <li key={'12'} >

                          <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                            <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>

                          {/* <li key={'343'}><a href="#">
                          <span>قبل 30 دقيقة</span>
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a></li>
                          <li key={'675'}><a href="#">
                          <span>منذ 1 ساعة</span>
                          بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة
                          </a></li>
                          <li key={'34543'}><a href="#">
                          <span>منذ 5 ساعات</span>
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a></li>
                          <li key={'fdw43'}><a href="#">
                          <span>منذ 5 دقائق</span>
                          أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية
                          لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين
                          أميركي إعانات البطالة ثر من المتوقع
                          </a></li>
                          <li key={'fd43re3f'}><a href="#">
                          <span>قبل 30 دقيقة</span>
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a></li>
                          <li key={'sdf43t'}><a href="#">
                          <span>منذ 1 ساعة</span>
                          بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة
                          </a></li>
                          <li key={'sdf54'}><a href="#">
                          <span>منذ 5 ساعات</span>
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a></li> */}
                      </ul></div>
                  </>
                )
              }
              {
                type === 'dotList' && (
                  title === "آخر الأخبار" && latestNewsList?.length ? // show lates news :: api data

                  <>
                    <Title styles={styles.themeTitle}>
                        <h4> {title} </h4>
                    </Title>
                    <div className="dotListwrap">
                        <ul className={styles.sideDotList}>
                          {
                              latestNewsList?.length && latestNewsList?.map((news:any, index:number)=>{
                              const newsPage = news?._source?.isPro ? 'proNews' : 'newsDetails';
                                  return(
                                      <li key={index} >
                                          <div>
                                            {/*<span>منذ 5 دقائق</span>*/}
                                            <span><TimeAgoArabicFormat date={news?._source?.createdAt} /></span>
                                            <Link href={`/${newsPage}/` + news?._id}><a>{news?._source?.title}</a></Link>
                                          </div>
                                      </li>
                                  )
                              })
                          }
                        </ul>
                        {
                            <div className="text-center mt-3 d-lg-none more_btn">
                                <button className="btn btn-outline-primary">المزيد</button>
                            </div>
                        }
                        </div>
                  </>
                   :

                  <>
                      <Title styles={styles.themeTitle}>
                          <h4> {title} </h4>
                      </Title>
                      <div  className="dotListwrap">
                        <ul className={styles.sideDotList}>
                          <li key={'12'} >
                            <div>
                            <span>منذ 5 دقائق</span>
                            <a href="/newsDetails">

                            أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية
                            لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين
                            أميركي إعانات البطالة ثر من المتوقع

                            </a>
                            </div>

                            </li>
                            <li key={'343'}>

                            <div>
                            <span>قبل 30 دقيقة</span>
                            <a href="#">

                            النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                            </a>
                            </div>
                            </li>
                            <li key={'675'}>
                             <div>
                             <span>منذ 1 ساعة</span>
                             <a href="#">

                            بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة
                            </a>
                             </div>
                            </li>
                            <li key={'34543'}>
                              <div>
                              <span>منذ 5 ساعات</span>
                              <a href="#">

                            النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                            </a>
                              </div>
                            </li>
                            <li key={'fdw43'}>
                             <div>
                             <span>منذ 5 دقائق</span>
                             <a href="#">

                            أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية
                            لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين
                            أميركي إعانات البطالة ثر من المتوقع
                            </a>
                             </div>
                            </li>
                            <li key={'fd43re3f'}>
                              <div>
                              <span>قبل 30 دقيقة</span>
                              <a href="#">

                            النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                            </a>
                              </div>

                            </li>
                            <li key={'sdf43t'}>

                             <div>
                             <span>منذ 1 ساعة</span>
                             <a href="#">

                            بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة
                            </a>
                             </div>

                            </li>
                            <li key={'sdf54'}>
                              <div>
                              <span>منذ 5 ساعات</span>
                              <a href="#">

                            النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                            </a>
                              </div>
                            </li>
                        </ul>
                        {

                    <div className="text-center mt-3 d-lg-none more_btn">
                        <button className="btn btn-outline-primary">المزيد</button>
                    </div>

            }
                      </div>
                  </>
                  
                )
              }
            </div>
        </div>

        </>
    )
}

export default SideList