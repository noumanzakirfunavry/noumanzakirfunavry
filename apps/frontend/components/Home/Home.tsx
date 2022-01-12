import { FC } from "react"
import MarketIndices from "./MarketIndices/MarketIndices"
import NewsSection from "./NewsSection/NewsSection"

const Home:FC = () =>{
    return (
        <>
          <MarketIndices/>
          <NewsSection/>
        </>
    )
}

export default Home