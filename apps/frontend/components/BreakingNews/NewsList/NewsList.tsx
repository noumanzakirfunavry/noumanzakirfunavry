/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @next/next/no-html-link-for-pages */
import GetData from "apps/frontend/services/GetData"
import { requests } from "apps/frontend/services/Requests"
import { BreakingNewsProps } from "apps/frontend/types/Types"
import { useEffect, useState } from "react"
import SkeletonLoader from "../../Shared/SkeletonLoader/SkeletoLoader"

type BreakingNewsPageProps = {
  newsList:BreakingNewsProps[],
  displayMoreButton: boolean
}
const NewsList = () => {

    const [pageData, setPageData] = useState<BreakingNewsPageProps>({newsList:[], displayMoreButton:false})
    const [params, setParams] = useState<any>({
      limit:20,
      pageNo:1
    })

    const handlePage = () =>{
      params.page +=1
      setParams({...params})
    }

    useEffect(()=>{
        GetData(`${requests.breakingNews}/getAll?limit=${params.limit}&pageNo=${params.pageNo}`, {}, 'get', false).then(res=>{
          // eslint-disable-next-line no-unsafe-optional-chaining
          pageData.newsList = res.data?.response?.breakingNews && res.data?.response?.breakingNews.length ? [...pageData.newsList, ...res.data?.response?.breakingNews] : pageData.newsList
          pageData.displayMoreButton = res.data?.response?.breakingNews && res.data?.response?.breakingNews.length >= params.limit ? true : false
          setPageData({...pageData})
        }).catch(err=>{
          console.warn(err)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params])

    return (
        <>
            <div className="breakingNews">
              {
                !pageData.newsList?.length && (
                  <SkeletonLoader/>
                )
              }
              {
                pageData.newsList?.length > 0 && pageData.newsList?.map((news:BreakingNewsProps)=>{
                  return (
                    <div className="newsbox" key={news.id}>
                      <div className="newslink">
                          <p className="text-danger">{news.title}</p>
                          <a>{news.title}</a>
                      </div>
                      {
                        news.newsLink && (
                          <div className="newsaction">
                            <a className="btn btn-outline-primary" href={news.newsLink}>المزيد</a>
                          </div>
                        )
                      }
                    </div>
                  )
                })
              }
            </div>
            {
              pageData.displayMoreButton && 
              (<div className="text-center mt-3 mb-4 more_btn" onClick={handlePage}>
                  <button className="btn btn-outline-primary">المزيد</button>
              </div>)
            }
              {/* <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a href="/newsDetails">الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div>
              <div className="newsbox">
                <div className="newslink">
                    <p className="text-danger">منذ 5 دقائق</p>
                    <a>الشرطة السودانية: تسجيل 89 إصابة في صفوف قوات الأمن خلال مظاهرات أمس وإتلاف 4 عربات تابعة للشرطة</a>
                </div>
                <div className="newsaction">
                  <button className="btn btn-outline-primary">المزيد</button>
                </div>
              </div> */}
        </>
    )
}

export default NewsList