/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import ProgramDetails from "apps/frontend/components/Programs/detials"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import CategoryNewsSection from "apps/frontend/components/Shared/CategoryNews"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                </div>
                <Title styles="pageTitle PageTitleYellow mb-0"><h2>اكسبو في أسبوع</h2></Title>
                <ProgramDetails/>
<div className="container">


                <div className='PageBuilder-pageRow'>
                    <div className='PageBuilder-col-9'>
                        <Title styles="yellowTitle mb-4"><h3>الحلقات اكسبو في أسبوع</h3></Title>
                        <CategoryNewsSection limit={8} displayMoreButton={true} displayTopTwoNews={false} displayTitle={false} />
                    </div>
                    <div className='PageBuilder-sidebar pt_0'>
                        <SideBar sideBarSequence={[ { componentType: 'LargeBanner', position: 1 }]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index