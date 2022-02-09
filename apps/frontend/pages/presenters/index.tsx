/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import Presenters from "apps/frontend/components/Presenter";
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title";
import presenterimg from "../../styles/images/presenter.jpg";

const Index = () =>{

    return (
        <>
            <div className="container"> 
                <AdBanner />
                
                <Title styles={"pageTitle PageTitleYellow mb-0"}>
                    <h2>مذيعو ومراسلو CNBC عربية</h2>
                </Title>
                <div className='row'>
                    <div className='col-lg-9'>
                        <Presenters/>
                    </div>
                    <div className='col-lg-3'>
                        <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 2 }]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index