/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { useEffect, useState } from 'react';
import MenuBar from "apps/frontend/components/Search/MenuBar/MenuBar"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SearchResultList from "apps/frontend/components/Shared/SearchResultList/SearchResultList"
import SearchWordCountList from "apps/frontend/components/Shared/SearchWordCountList/SearchWordCountList"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import search from "../../styles/images/search.svg";
import Title from "apps/frontend/components/Title";
import { requests } from '../../services/Requests';

import GetData from '../../services/GetData';

const Index = () =>{

    // news search data
    const [newsSearchData, setNewsSearchData] = useState<any>([])

    // search Val
    const [searchVal, setSearchVal] = useState<any>("")

    const [activatedMenuItem, setActivatedMenuItem] = useState<string>("")

    const searchValue = 'test'; // TODO: it will be updated when routing will work, for now having static value

    useEffect(() => {
        if(activatedMenuItem === 'latestNews'){
            GetData(`${requests.latestNews}limit=50&pageNo=1`, {}, 'get', false).then(res=>{

                //console.log('latest news', res.data);
                const newsRes = res.data && res.data.length ? res.data : []
                setNewsSearchData(newsRes);
    
            }).catch(err=>{
                console.warn(err)
            })

        } else {
            setSearchVal(searchValue)
            if(searchVal){
                GetData(`${requests.search}`, {
                    searchTerm: `${searchVal}`
                    }, 'post', false).then(res => {
                        console.log('filtered news', res.data);
                        setNewsSearchData(res?.data)
                    
                    }).catch(err=>{
                        console.warn(err)
                });
            }
        }
        
    }, [searchVal, activatedMenuItem])


    const handleEvent = (event:any) => {
        setSearchVal(event.target.value)
    }

    const activateMenuItem = (stringVal: string) => {
        setActivatedMenuItem(stringVal);
    }

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
                            <input type="text" className="form-control text-end border-start-0" onChange={(e)=>handleEvent(e)} placeholder={searchVal}/>
                        </div>
                    </div>
                </div>
                <div className='PageBuilder-pageRow flex-sm-row-reverse'>
                <div className='PageBuilder-sidebar mt-0'>
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
                    <div className='PageBuilder-col-9'>
                        <Title styles={'topBorderText'}>
                            <h3 className="fs24_bolder">{`${newsSearchData?.length} نتائج بحث عن ${searchVal}`}</h3>
                        </Title>
                        <hr></hr>
                        <div className='row'>
                            <MenuBar activateMenuItem={activateMenuItem} />
                        </div>
                        <div className='row'>
                            <SearchResultList newsSearchData={newsSearchData}  />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Index