const MarketDetail = ({tickerIds}) =>{
    //console.log('TickerIds::::', tickerIds);
   
    return (
        <>
            <iframe height={'100%'} width="100%" src={`https://cnbc-config.cnbcarabia.com/zagTrader/widgets/watchlist/index.php?ticker_id=${tickerIds}`}></iframe>
        </>
    )
}

export default MarketDetail
