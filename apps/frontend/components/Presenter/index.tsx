

import AdBanner from "../Shared/AdBanner/AdBanner"
import SideBar from "../Shared/SideBar/SideBar"
const Presenters = () => {

    return (
        <>
               <div className="container"> 
            <AdBanner />
            <div className='row'>
                <div className='col-md-8'>
                     design here
               
                </div>
                <div className='col-md-4'>
                    <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 2 }]} />
                </div>
            </div>
        </div>

        </>
    )
}

export default Presenters