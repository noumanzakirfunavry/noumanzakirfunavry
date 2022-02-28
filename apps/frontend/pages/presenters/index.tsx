/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import Presenters from "apps/frontend/components/Presenter";
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title";
import useApiData from "apps/frontend/services/useApiData";

const Index = () =>{

    const {data, error, loading} = useApiData('https://jsonplaceholder.typicode.com/todos/1', 'get', {})

    if(loading){
        return (
            <>...Loading</>
        )
    }
    return (
        <>
            <div className="container"> 
                <AdBanner />
                </div>
                <Title styles={"pageTitle PageTitleYellow mb-4"}>
                    <h2>مذيعو ومراسلو CNBC عربية</h2>
                </Title>
                <div className="container">
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