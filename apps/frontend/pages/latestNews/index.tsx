/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
// import CategoryNewsSection from "apps/frontend/components/Shared/CategoryNews"
import DummyCategoryNewsSection from "apps/frontend/components/Shared/DummyCategoryNews"
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
            <h2>آخر الأخبار</h2>
        </Title>

        <div className="container">
        <div className='PageBuilder-pageRow'>
          <div className='PageBuilder-col-9'>
            <DummyCategoryNewsSection limit = {8} displayTitle={false} displayTopTwoNews={true} displayMoreButton={true}/>

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