import AdBanner from "../Shared/AdBanner/AdBanner"
import SideBar from "../Shared/SideBar/SideBar"

const NewsDetails = () => {

    return (
        <>
        <AdBanner/>
        <div className='row'>
                <div className='col-md-8'>
                News Details
                </div>
                <div className='col-md-4'>
                   <SideBar sideBarSequence={[{componentType:'Latest', position:1}, {componentType:'SmallBanner', position:2}]}/>
                </div>
              </div>
            
       </>
        
    
    )
}

export default NewsDetails