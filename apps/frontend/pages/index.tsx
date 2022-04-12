import CategoryNewsSection from '../components/Shared/CategoryNews';
import HorizontalMediaScrollBar from '../components/Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar';
import HorizontalNumberedList from '../components/Home/HorizontalNumberedList/HorizontalNumberedList';
import MarketIndices from '../components/Home/MarketIndices/MarketIndices';
import NewsSection from '../components/Home/NewsSection/NewsSection';
import QuickLinks from '../components/Home/QuickLinks/QuickLinks';
import SplitScreenNewsList from '../components/Home/SplitScreenNewsList/SplitScreenNewsList';
import TilesWithColoredBackground from '../components/Home/TilesWithColoredBackground/TilesWithColoredBackground';
import TilesWithLightColorBackground from '../components/Home/TilesWithColoredBackground/TilesWithLightColorBackground';
import SideBar from '../components/Shared/SideBar/SideBar';
import SplitScreenBarCharts from '../components/Shared/SplitScreenBarCharts/SplitScreenBarCharts';
import { CategoryProps, User } from '../types/Types';
import { useAppDispatch } from '../store/Store';
import { setUser } from '../reducers/UserSlice';
import GetData from '../services/GetData';
import { useEffect, useState } from 'react';
import { requests } from '../services/Requests';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import MostReadSlider from '../components/Home/MostReadSlider';
import NewsDetatilListWithMedia from '../components/Shared/NewsDetatilListWithMedia/NewsDetatilListWithMedia';
import AdBanner from '../components/Shared/AdBanner/AdBanner';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  const user:User = {
    email:'noman@gmail.com',
    username:"Noman",
    password:"12345"
  }

  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [limit, setLimit] = useState<number>(5)

  const dispatch = useAppDispatch()

  dispatch(setUser(user))

  useEffect(()=>{
    GetData(`${requests.categories}/getAll?limit=${limit}&pageNo=1&displayInHomePage=true`, {}, 'get', false).then(res=>{
      setCategories(res.data?.response?.categories)
    }).catch(err=>{
        console.warn(err)
    })
  }, [limit])

  const details = [
    {description:'سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي ', proIcon:true, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
    {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
    {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
]

  return (
    <>
     <div className="d">
     <MarketIndices />
      {/* <div className="container">
      <AdBanner />
      </div> */}
     </div>
      <div className="container">

        <QuickLinks />

        <div className='PageBuilder-pageRow'>
          <div className=' PageBuilder-col-9'>
            <NewsSection />
          </div>
          <div className='PageBuilder-sidebar'>
            <SideBar sideBarSequence={[{ componentType: 'dotList', position: 1, title:'آخر الأخبار' }]} />
          </div>
        </div>
        <div className='PageBuilder-pageRow'>
          <div className=' PageBuilder-col-9'>
          <NewsDetatilListWithMedia dispalyMoreButton={false} details={details}/> {/*Secondary News Section */}
          </div>
          <div className='PageBuilder-sidebar mt-0'>
            <SideBar sideBarSequence={[{ componentType: 'SmallBanner', position: 2 }]} />
            <div className="bannerAddMedia">
        <AdBanner />
        </div>
          </div>
        </div>
        
        <div>
          <SplitScreenBarCharts />
        </div>
        <div>
          <SplitScreenNewsList />
        </div>
      </div>
      <div>
        <TilesWithColoredBackground />
      </div>
      <div>
        <HorizontalMediaScrollBar />
      </div>
      <div>
        <TilesWithLightColorBackground />
      </div>
      <div className="container">
      <div className="bannerAddMedia">
        <AdBanner />
        </div>
      </div>
      <div className="container">
        <div className='mb-5'>
            <HorizontalNumberedList />
        </div>
        <div className='PageBuilder-sidebar hide_div_web'>
                    
                     
                        {/* <SideBar sideBarSequence={[{ componentType: 'simple', position: 1 , title:'الأكثر قراءة'} ]} /> */}
                    
                        <MostReadSlider/>
  
                   
              </div>

      {/* <div className='PageBuilder-pageRow flex-wrap-reverse p_sm_10'>
        <div className='PageBuilder-col-9'>

          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/> */}

      {
    !categories?.length && <Skeleton/>
  }
  {
    categories?.length && categories?.map((category:CategoryProps, index:number)=>{
      return (
        <div className='PageBuilder-pageRow' key={category.id}>
          <div className='PageBuilder-col-9'>
            <CategoryNewsSection cat={category} limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
          </div>
          <div className='PageBuilder-sidebar'>
                {
                  index === 0 && (
                    <SideBar sideBarSequence={[{ componentType: 'simple', position: 1 , title:'الأكثر قراءة'}, /*{ componentType: 'dotList', position: 2 }*/ ]} />
                  )
                }
                {
                  index === 2 && (
                    <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 2 }]} />
                  )
                }
          </div>
        </div>
      )
    })
  }
{/* categoreis code is save on usman's side i will revert it after integrating it */}

      <div className="text-center mt-3 mb-4 more_btn" onClick={()=>setLimit(limit + 5)}>
          <button className="btn btn-outline-primary">المزيد</button>
      </div>

      {/* </div> */}

</div>
    </>
  );
}

export default Index;
