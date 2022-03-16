/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import MenuBar from "apps/frontend/components/Search/MenuBar/MenuBar"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SearchResultList from "apps/frontend/components/Shared/SearchResultList/SearchResultList"
import SearchWordCountList from "apps/frontend/components/Shared/SearchWordCountList/SearchWordCountList"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import search from "../../styles/images/search.svg";
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className="row justify-content-center mb-3">
                    <div className="col-md-6">
                        <div className="input-group flex-nowrap ltr search_page_search">
                            <span className="input-group-text bg-white text-primary">
                                {/* <i className="fa fa-search"></i> */}
                                <img className="img-fluid" src={search.src} />
                                </span>
                            <input type="text" className="form-control text-end border-start-0" placeholder="Amazon"/>
                        </div>
                    </div>
                </div>
                <div className='row flex-sm-row-reverse'>
                <div className='col-lg-3'>
                        <div className='sidebar pt-0 border-bottom-0'>

                            <Title styles={'topBorderText'}>
                                <h3 className="fs24_bolder">الأسهم ذات الصلة</h3>
                            </Title>
                            <div className="listBody">
                                <SearchWordCountList/>
                                <div className="text-center mb-3 mt-3">
                                    <button className="btn btn-outline-primary btn-sm-wide">المزيد</button>
                                </div>
                            </div>
                        </div>
                            <SideBar sideBarSequence={[{componentType:'SmallBanner', position:1}]}/>

                    </div>
                    <div className='col-lg-9'>
                        <Title styles={'topBorderText'}>
                            <h3 className="fs24_bolder">{`10 نتائج بحث عن "amazon"`}</h3>
                        </Title>
                        <hr></hr>
                        <div className='row'>
                            <MenuBar/>
                        </div>
                        <div className='row'>
                            <SearchResultList/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Index