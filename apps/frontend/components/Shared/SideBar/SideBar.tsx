import { SideBar, SideBarProps } from "apps/frontend/types/Types"
import { FC } from "react"
import LatestNewsSideList from "./LatestNewsSideList/LatestNewsSideList"
import SideBanner from "./SideBanner/SideBanner"
import TrendingSideList from "./TrendingSideList/TrendingSideList"

const SideBar:FC<SideBarProps> = ({sideBarSequence}) =>{

    sideBarSequence.sort((a,b)=> {
        return (a.position < b.position) ? -1 : (a.position > b.position) ? 1 : 0
    })

    return (
        <>
            {
                sideBarSequence.map((sequence:SideBar)=>{
                    return (
                        <>
                            {
                                sequence.componentType === 'Latest' && (
                                    <LatestNewsSideList></LatestNewsSideList>
                                )
                            }
                            {
                                 sequence.componentType === 'SmallBanner' && (
                                    <SideBanner size={"Small"}></SideBanner>
                                 )
                            }
                            {
                                 sequence.componentType === 'Trending' && (
                                    <TrendingSideList ></TrendingSideList>
                                 )
                            }
                            {
                                 sequence.componentType === 'LargeBanner' && (
                                    <SideBanner size={"Large"}></SideBanner>
                                )
                            }
                            
                        </>
                    )
                })
            }
        </>
    )
}

export default SideBar