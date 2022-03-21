import AdBanner from "../../Shared/AdBanner/AdBanner"
import DetatilBoxes from "./DetailBoxes.tsx/DetailBoxes"
import MenuBar from "./MenuBar/MenuBar"


const MarketIndices = () =>{

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