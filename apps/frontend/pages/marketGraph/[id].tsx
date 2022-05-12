/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import { useRouter } from 'next/router';
import SplitScreenBarCharts from "../../components/Shared/SplitScreenBarCharts/SplitScreenBarCharts";

const Index = () =>{

   const router = useRouter();
   const tickerId = router.query.id;

    return (
        <>
        <div className="marketGraph_wrap">
            <div className="container">
                <AdBanner/>
                <div className="PageBuilder-pageRow">
                    <div className='PageBuilder-col-9'>
                        <iframe height={'100%'} width="100%" src={`https://cnbcarabia.zagtrader.com/external/cnbcarabiadynamic/site2/full_symbol_info.php?tickerId=${tickerId}&langId=2&showLangSwitch=0&showAllMarkets=0&showCopyrights=0&showAllMarkets=1`}></iframe>
                    </div>
                    <div className='PageBuilder-sidebar mt-0 pt_0'>
                        <SideBar sideBarSequence={[{ componentType: 'simple', position: 2 }, {componentType:'SmallBanner', position:1}]}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Index