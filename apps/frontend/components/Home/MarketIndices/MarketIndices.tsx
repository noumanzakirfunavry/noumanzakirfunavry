import { useEffect } from "react"
import AdBanner from "../../Shared/AdBanner/AdBanner"
import DetatilBoxes from "./DetailBoxes.tsx/DetailBoxes"
import MenuBar from "./MenuBar/MenuBar"
import GetData from "../../../services/GetData";


const MarketIndices = () =>{

    useEffect(() => {
        GetData(`https://cnbcarabia.zagtrader.com/External/cnbcarabiadynamic/api/ConfigHome.php?type=json`, {}, 'get', false).then(res=>{

            console.log('Market Indices:::', res);
        
        }).catch(err=>{
            console.warn(err)
        })
    }, [])

    return (
        <div className="container">

            <div className="order_flex_sm">
            <MenuBar/>
            <DetatilBoxes/>
            <AdBanner />
            </div>
        </div>
    )
}

export default MarketIndices