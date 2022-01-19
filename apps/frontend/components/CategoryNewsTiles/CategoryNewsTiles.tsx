import AdBanner from "../Shared/AdBanner/AdBanner"
import SideBar from "../Shared/SideBar/SideBar"
import NewsListTiles from "../Shared/NewsListTiles/NewsListTiles"
import { TileList } from "apps/frontend/types/Types"
import News2TopTiles from "../Shared/News2TopTiles"

const CategoryNewsTiles = () => {

  const newsList: TileList[] = [{ mediaType: 'image', media: 'url', title: "abc", categoryName: "", sourceName: "" }]
  return (
    <>
      <div className="container">
        <AdBanner />

        <div className="pageTitle PageTitleYellow"><h2>آخر الأخبار</h2></div>
        <div className='row'>
          <div className='col-md-8'>
            <News2TopTiles />
            <NewsListTiles newsList={newsList} />
          </div>
          <div className='col-md-4'>
            <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryNewsTiles