/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import { useRouter } from 'next/router';

const Index = () =>{

   const router = useRouter();
   const tickerId = router.query.id;

   const marketGraphPrint = () => {
        // Store DIV contents in the variable.
        const div = document.getElementById('marketGraphWrapper');

        // Create a window object.
        // Open the window. Its a popup window.
        const win = window.open('', '', 'height=700,width=700');

        // Write contents in the new window.
        win.document.write(div.outerHTML);
        win.document.close();
        win.print(); // Finally, print the contents.
    };

    return (
        <>
        <div className="marketGraph_wrap">
            <div className="container">
                <AdBanner/>
                <div className="printButton mt-3 mb-3">
                    <input type="button" value="Print" onClick={() => marketGraphPrint()}/>
                </div>
                <div className="PageBuilder-pageRow">
                    <div className='PageBuilder-col-9' id="marketGraphWrapper">
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