/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import ProgramDetails from "apps/frontend/components/Programs/detials"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
//import NewsListTiles from "apps/frontend/components/Shared/NewsListTiles/NewsListTiles"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className='row'>
                    <div className='col-md-8'>
                        <ProgramDetails/>
                        {/* <NewsListTiles newsList={[]} /> */}
                    </div>
                    <div className='col-md-4'>
                        <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index