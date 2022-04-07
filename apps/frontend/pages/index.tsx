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
    GetData(`${requests.categories}/getAll?limit=${limit}&pageNo=1&displayInHomePage=true&displayInCategoryMenu=false`, {}, 'get', false).then(res=>{
      setCategories(res.data?.response?.categories)
    }).catch(err=>{
        console.warn(err)
    })
  }, [limit])


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
            <SideBar sideBarSequence={[{ componentType: 'dotList', position: 1, title:'آخر الأخبار' }, { componentType: 'SmallBanner', position: 2 }]} />
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
        <div className='mb-5'>
            <HorizontalNumberedList />
        </div>

      <div className='PageBuilder-pageRow flex-wrap-reverse'>
        <div className='PageBuilder-col-9'>

          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>

        </div>
        <div className='PageBuilder-sidebar'>
          {/* show on tab and mobile */}
          <MostReadSlider/>
          {/* show on web only */}
        <SideBar sideBarSequence={[{ componentType: 'simple', position: 1 , title:'الأكثر قراءة'} ]} />

      </div>
      </div>
      <div className='PageBuilder-pageRow'>
        <div className='PageBuilder-col-9'>

          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>

        </div>
        <div className='PageBuilder-sidebar'>
        </div>
      </div>
      <div className='PageBuilder-pageRow'>
        <div className='PageBuilder-col-9'>

          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>

        </div>
        <div className='PageBuilder-sidebar large_add'>
          <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 2 }]} />
        </div>
      </div>
      <div className='PageBuilder-pageRow'>
        <div className='PageBuilder-col-9'>
          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
        </div>
        <div className='PageBuilder-sidebar'>

        </div>
      </div>
      <div className='PageBuilder-pageRow'>
        <div className='PageBuilder-col-9'>
          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={true}/>
        </div>
        <div className='PageBuilder-sidebar'>

        </div>
      </div>

{/* categoreis code is save on usman's side i will revert it after integrating it */}

      {/* <div className="text-center mt-3 mb-4 more_btn" onClick={()=>setLimit(limit + 5)}>
          <button className="btn btn-outline-primary">المزيد</button>
      </div> */}

      {/* </div> */}

</div>
    </>
  );
}

export default Index;
