/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import SearchMenuBar from "apps/frontend/components/Search/SearchMenuBar/SearchMenuBar"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SearchResultList from "apps/frontend/components/Shared/SearchResultList/SearchResultList"
import SearchWordCountList from "apps/frontend/components/Shared/SearchWordCountList/SearchWordCountList"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"


const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row'>
                            Search Text Here
                        </div>
                        <div className='row'>
                            <SearchMenuBar/>
                        </div>
                        <div className='row'>
                            <SearchResultList/>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='row'>
                            <SearchWordCountList/>
                        </div>
                        <div className='row'>
                            <SideBar sideBarSequence={[{componentType:'SmallBanner', position:2}]}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index