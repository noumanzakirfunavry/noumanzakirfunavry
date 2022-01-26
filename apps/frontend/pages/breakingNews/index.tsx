/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import NewsList from "apps/frontend/components/BreakingNews/NewsList/NewsList"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container">     
                <AdBanner/>
                <Title styles={"pageTitle"} >
                    <h2>أخبار عاجلة</h2>
                </Title>
                <div className='row'>
                    <div className='col-md-8'>
                        <NewsList/>
                    </div>
                    <div className='col-md-4'>
                        <SideBar sideBarSequence={[{componentType:'Latest', position:1}, {componentType:'SmallBanner', position:2}]}/>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Index