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
            <h2>آخر الأخبار</h2>
        </Title>

        <div className="container">
        <div className='row'>
          <div className='col-lg-9'>
            <CategoryNewsSection limit = {8} displayTitle={false} displayTopTwoNews={true} displayMoreButton={true}/>

          </div>


          <div className='col-lg-3'>
            <SideBar sideBarSequence={[{componentType:'numbered', position:1, title:'الأكثر تداولا'}, {componentType:'SmallBanner', position:2}, {componentType:'simple', position:2, title:'الأكثر قراءة'}, {componentType:'LargeBanner', position:2}]}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index