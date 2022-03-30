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

        <div className='row'>
          <div className='col-lg-9'>
            <NewsSection />
          </div>
          <div className='col-lg-3'>
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

      {/* <div className='row'>
        <div className='col-lg-9'>

          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>

        </div>
        <div className='col-lg-3'>
          
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-9'>

          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>

        </div>
        <div className='col-lg-3'>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-9'>

          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>

        </div>
        <div className='col-lg-3 large_add'>
          <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 2 }]} />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-9'>
          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
        </div>
        <div className='col-lg-3'>

        </div>
      </div>
      <div className='row'>
        <div className='col-lg-9'>
          <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={true}/>
        </div>
        <div className='col-lg-3'>

        </div>
      </div> */}
      {
        !categories?.length && <Skeleton/>
      }
      {
        categories?.length && categories?.map((category:CategoryProps, index:number)=>{
          return (
            <div className='row' key={category.id}>
              <div className='col-lg-9'>
                <CategoryNewsSection limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
              </div>
              <div className='col-lg-3'>
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


      <div className="text-center mt-3 mb-4 more_btn" onClick={()=>setLimit(limit + 5)}>
          <button className="btn btn-outline-primary">المزيد</button>
      </div>

      </div>


    </>
  );
}

export default Index;
