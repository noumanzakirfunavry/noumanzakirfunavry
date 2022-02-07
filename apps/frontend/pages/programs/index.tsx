/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import NewsListTiles from "apps/frontend/components/Shared/NewsListTiles/NewsListTiles"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container"> 
                <AdBanner />
                <Title styles="pageTitle PageTitleYellow">
                    <h2>برامج CNBC عربية</h2>
                </Title>
                <div className='row'>
                    <div className='col-md-8'>
                    <NewsListTiles />
                    </div>
                    <div className='col-md-4'>
                        <SideBar sideBarSequence={[{ componentType: 'numbered', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index