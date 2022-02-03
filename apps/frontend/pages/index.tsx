import CategoryNewsSection from '../components/Home/CategoryNews';
import HorizontalMediaScrollBar from '../components/Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar';
import HorizontalNumberedList from '../components/Home/HorizontalNumberedList/HorizontalNumberedList';
import MarketIndices from '../components/Home/MarketIndices/MarketIndices';
import NewsSection from '../components/Home/NewsSection/NewsSection';
import QuickLinks from '../components/Home/QuickLinks/QuickLinks';
import SplitScreenNewsList from '../components/Home/SplitScreenNewsList/SplitScreenNewsList';
import TilesWithColoredBackground from '../components/Home/TilesWithColoredBackground/TilesWithColoredBackground';
import AdBanner from '../components/Shared/AdBanner/AdBanner';
import News2TopTiles from '../components/Shared/News2TopTiles';
import SideBar from '../components/Shared/SideBar/SideBar';
import SplitScreenBarCharts from '../components/Shared/SplitScreenBarCharts/SplitScreenBarCharts';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <MarketIndices />
      <div className="container">
        <AdBanner />
        <QuickLinks />

        <div className='row'>
          <div className='col-md-8'>
            <NewsSection />
          </div>
          <div className='col-md-4'>
            <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
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
        <div className='col-md-8'>
          <div className="yellowTitle mb-3"><h3>أميركا في أزمة</h3></div>
          <News2TopTiles />
          <CategoryNewsSection />

          <div className="yellowTitle mb-3"><h3>أميركا في أزمة</h3></div>
          <News2TopTiles />
          <CategoryNewsSection />
          <div className="yellowTitle mb-3"><h3>أميركا في أزمة</h3></div>
          <News2TopTiles />
          <CategoryNewsSection />
          <div className="yellowTitle mb-3"><h3>أميركا في أزمة</h3></div>
          <News2TopTiles />
          <CategoryNewsSection />
          <div className='text-center mt-3 mb-4'>
            <button className='btn btn-outline-primary'>المزيد</button>
          </div>

        </div>
        <div className='col-md-4'>
          <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }]} />
        </div>
      </div>

      </div>


    </>
  );
}

export default Index;
