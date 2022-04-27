/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import CategoryNewsSection from "apps/frontend/components/Shared/CategoryNews"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"
import { TileList } from "apps/frontend/types/Types"

const Index = () =>{

  const newsList: TileList[] = [{ mediaType: 'image', media: 'url', title: "abc", categoryName: "", sourceName: "" }]
  return (
    <>
      <div className="container">
        <AdBanner />
</div>
        <Title styles={"pageTitle PageTitleYellow"} >
            <h2>الشرق الأوسط</h2>
        </Title>

        <div className="container">
        <ul className="category_news_tab">
        <li>
            <a href="javascript:void(0)">السعودية</a>
          </li>


          <li>
            <a href="javascript:void(0)">الإمارات</a>
          </li>
          <li>
            <a href="javascript:void(0)">قطر</a>
          </li>

        </ul>
        <div className='PageBuilder-pageRow'>
          <div className='PageBuilder-col-9'>
            <CategoryNewsSection cat={[]} limit = {3} displayTitle={false} displayTopTwoNews={true} displayMoreButton={false}/>
            <CategoryNewsSection cat={[]} limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
            <CategoryNewsSection cat={[]} limit = {1} displayTitle={true} displayTopTwoNews={true} displayMoreButton={false}/>
            <CategoryNewsSection cat={[]} limit = {3} displayTitle={true} displayTopTwoNews={false} displayMoreButton={true}/>
          </div>


          <div className='PageBuilder-sidebar'>
            <SideBar sideBarSequence={[{componentType:'numbered', position:1, title:'الأكثر تداولا'}, {componentType:'SmallBanner', position:2}, {componentType:'simple', position:2, title:'الأكثر قراءة'}, {componentType:'LargeBanner', position:2}]}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index