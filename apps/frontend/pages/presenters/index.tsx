/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import Presenters from "apps/frontend/components/Presenter"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"

const Index = () =>{

    return (
        <>
            <div className="container"> 
                <AdBanner />
                <div className='row'>
                    <div className='col-md-8'>
                        <Presenters/>
                    </div>
                    <div className='col-md-4'>
                        <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 2 }]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index