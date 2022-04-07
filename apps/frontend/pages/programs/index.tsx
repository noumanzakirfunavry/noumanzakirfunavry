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
                <div className='PageBuilder-pageRow'>
                    <div className='PageBuilder-col-9'>
                    <AllProgrmasTilesList />
                    </div>
                    <div className='PageBuilder-sidebar pt_0 mt-0'>
                        <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 1 }]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index