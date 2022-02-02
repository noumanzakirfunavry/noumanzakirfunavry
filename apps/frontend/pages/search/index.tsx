/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import MenuBar from "apps/frontend/components/Search/MenuBar/MenuBar"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SearchResultList from "apps/frontend/components/Shared/SearchResultList/SearchResultList"
import SearchWordCountList from "apps/frontend/components/Shared/SearchWordCountList/SearchWordCountList"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <div className="input-group flex-nowrap ltr">
                            <span className="input-group-text bg-white text-primary"><i className="fa fa-search"></i></span>
                            <input type="text" className="form-control text-end border-start-0" placeholder="Search"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <Title styles={'topBorderText'}>
                            <h3>{`10 نتائج بحث عن "amazon"`}</h3>
                        </Title>
                        <hr></hr>
                        <div className='row'>
                            <MenuBar/>
                        </div>
                        <div className='row'>
                            <SearchResultList/>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='sidebar'>
                            <Title styles={'topBorderText'}>
                                <h3>الأسهم ذات الصلة</h3>
                            </Title>
                            <div className="listBody">
                                <SearchWordCountList/>
                                <div className="text-center">
                                    <button className="btn btn-outline-primary">المزيد</button>
                                </div>
                            </div>
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