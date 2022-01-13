
import { FC } from "react"
import NewsDetatilListImageWithMedia from "../../Shared/NewsDetailListImageWithMedia/NewsDetailListImageWithMedia"
import MainSection from "./MainSection/MainSection"


const NewsSection:FC = () =>{

    return (
        <>
            <MainSection/>   {/*Main News Section */}
            <NewsDetatilListImageWithMedia/> {/*Secondary News Section */}
        </>
    )
}

export default NewsSection