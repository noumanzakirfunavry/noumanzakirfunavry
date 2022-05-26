import { useEffect, useState } from "react"
import AdBanner from "../../Shared/AdBanner/AdBanner"
import DetatilBoxes from "./DetailBoxes.tsx/DetailBoxes"
import MenuBar from "./MenuBar/MenuBar"
import GetData from "../../../services/GetData";


const MarketIndices = () =>{

    const [marketIndices, setMarketIndices] = useState<any>({})
    const [marketIndicesTilesData, setMarketIndicesTilesData] = useState<any>([])

    useEffect(() => {
<<<<<<< HEAD
        GetData(`https://cnbc-config.cnbcarabia.com/zagTrader/api/ConfigHome.php?type=json`, {}, 'get', false).then(res=>{
=======
        //GetData(`https://cnbc-config.cnbcarabia.com/External/cnbcarabiadynamic/api/ConfigHome.php?type=json`, {}, 'get', false).then(res=>{
            GetData(`https://cnbc-config.cnbcarabia.com/zagTrader/api/ConfigHome.php?type=json`, {}, 'get', false).then(res=>{
>>>>>>> b44ac33ae3921a63e544beac852f8e2aea181c53

            console.log('Market Indices:::', res);
            setMarketIndices(res?.data);

            const firstKey = res?.data ? Object.keys(res?.data)[0] : '';
            setMarketIndicesTilesData(res?.data[firstKey]); 
        }).catch(err=>{
            console.warn(err)
        })

    }, [])


    const setMarketTiles = (menuKey: string) => {
        console.log('menuKey::', menuKey);
        setMarketIndicesTilesData(marketIndices[menuKey]);
    }

   
    return (
        <div className="container">
            <div className="order_flex_sm"> 
            <MenuBar marketIndices={marketIndices} setMarketTiles={setMarketTiles} />
            <DetatilBoxes marketIndicesTilesData={marketIndicesTilesData} />
            <AdBanner />
            </div>
        </div>
    )
}

export default MarketIndices