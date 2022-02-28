/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import AllProgrmasTilesList from "apps/frontend/components/Shared/AllProgrmasTilesList/AllProgrmasTilesList"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container"> 
                <AdBanner />
                </div>
                <Title styles="pageTitle PageTitleYellow">
                    <h2>برامج CNBC عربية</h2>
                </Title>
                <div className="container">
                <div className='row'>
                    <div className='col-lg-8'>
                    <AllProgrmasTilesList />
                    </div>
                    <div className='col-lg-4'>
                        <SideBar sideBarSequence={[{ componentType: 'numbered', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index