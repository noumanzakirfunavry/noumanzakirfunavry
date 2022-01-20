import AdBanner from "../Shared/AdBanner/AdBanner"
import SearchResultList from "../Shared/SearchResultList/SearchResultList"
import SearchWordCountList from "../Shared/SearchWordCountList/SearchWordCountList"
import SideBar from "../Shared/SideBar/SideBar"
import MenuBar from "./MenuBar/MenuBar"

const Search = () => {

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
                            <MenuBar/>
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

export default Search

