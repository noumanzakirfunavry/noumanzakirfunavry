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

        <Title styles={"pageTitle PageTitleYellow"} >
            <h2>آخر الأخبار</h2>
        </Title>
        <div className='row'>
          <div className='col-md-8'>
            <CategoryNewsSection limit = {8} displayTitle={false} displayMoreButton={true}/>
          </div>
          <div className='col-lg-4'>
            <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index