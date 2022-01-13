import AdBanner from "../Shared/AdBanner/AdBanner"
import SideBar from "../Shared/SideBar/SideBar"
import NewsList from "./NewsList/NewsList"

const BreakingNews = () => {

    return (
        <>
          <div className="container">     
              <AdBanner/>

            <div className="pageTitle">
              <h2>أخبار عاجلة</h2>
            </div>

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

export default BreakingNews