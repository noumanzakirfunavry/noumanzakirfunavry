import { useEffect, useState } from "react"
import MarketDetail from "./MarketDetail/MarketDetail"
import MenuBar from "./MenuBar/MenuBar"
import GetData from "../../../services/GetData";
import SkeletonLoader from "../../Shared/SkeletonLoader/SkeletoLoader";


const MarketIndices = () =>{

    const [marketIndices, setMarketIndices] = useState<any>({})
    const [tickerIds, setTickerIds] = useState<any>()

    useEffect(() => {
        GetData(`https://cnbcarabia.zagtrader.com/External/cnbcarabiadynamic/api/ConfigHome.php?type=json`, {}, 'get', false).then(res=>{

            console.log('Market Graph Indices:::', res);
            setMarketIndices(res?.data);

            const firstKey = Object.keys(res?.data)[0];

            const specificMarket = res?.data[firstKey]
            const tickers = specificMarket?.map(marketItem =>  marketItem.tickerId).join(',');

            setTickerIds(tickers);
        }).catch(err=>{
            console.warn(err)
        })
        
    }, [])


    const setTickers = (menuKey) => {
        const specificMarket = marketIndices[menuKey]
        const tickers = specificMarket?.map(marketItem =>  marketItem.tickerId).join(',');

        setTickerIds(tickers);
    }


    return (
        <>
             {!marketIndices || Object.keys(marketIndices).length === 0 && <SkeletonLoader containerClassName="container" count={10} />}
             {marketIndices && Object.keys(marketIndices).length > 0 &&
                <>
                    <MenuBar marketIndices={marketIndices} setTickers={setTickers} />
                    {tickerIds && <MarketDetail tickerIds={tickerIds} />}
                </>
             }
        </>
    )
}

export default MarketIndices