import CategoryNewsSection from '../components/Shared/CategoryNews';
import HorizontalMediaScrollBar from '../components/Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar';
import HorizontalNumberedList from '../components/Home/HorizontalNumberedList/HorizontalNumberedList';
import MarketIndices from '../components/Home/MarketIndices/MarketIndices';
import NewsSection from '../components/Home/NewsSection/NewsSection';
import QuickLinks from '../components/Home/QuickLinks/QuickLinks';
import SplitScreenNewsList from '../components/Home/SplitScreenNewsList/SplitScreenNewsList';
import TilesWithColoredBackground from '../components/Home/TilesWithColoredBackground/TilesWithColoredBackground';
import AdBanner from '../components/Shared/AdBanner/AdBanner';
import SideBar from '../components/Shared/SideBar/SideBar';
import SplitScreenBarCharts from '../components/Shared/SplitScreenBarCharts/SplitScreenBarCharts';
import { User } from '../types/Types';
import { useAppDispatch } from '../store/Store';
import { setUser } from '../reducers/UserSlice';

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

  const dispatch = useAppDispatch()

  dispatch(setUser(user))

  return (
    <>
      <MarketIndices />
      <div className="container">
        <AdBanner />
        <QuickLinks />

        <div className='row'>
          <div className='col-lg-8'>
            <NewsSection />
          </div>
          <div className='col-lg-4'>
            <SideBar sideBarSequence={[{ componentType: 'dotList', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
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
      <div className="container">
        <div className='mb-5'>
            <HorizontalNumberedList />
        </div>

      <div className='row'>
        <div className='col-lg-8'>
         
          <CategoryNewsSection limit = {2} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
        
          <CategoryNewsSection limit = {2} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
         
          <CategoryNewsSection limit = {2} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
          
          <CategoryNewsSection limit = {2} displayTitle={true} displayTopTwoNews={true} displayMoreButton={true}/>

        </div>
        <div className='col-lg-4'>
          <SideBar sideBarSequence={[{ componentType: 'simple', position: 1 }, { componentType: 'dotList', position: 2 }]} />
        </div>
      </div>

      </div>


    </>
  );
}

export default Index;
