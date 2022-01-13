
import { FC } from "react"
import NewsDetatilListWithMedia from "../../Shared/NewsDetatilListWithMedia/NewsDetatilListWithMedia"
import MainSection from "./MainSection/MainSection"


const NewsSection:FC = () =>{

    return (
        <>
            <MainSection/>   {/*Main News Section */}
            <NewsDetatilListWithMedia/> {/*Secondary News Section */}
        </>
    )
}

export default NewsSection