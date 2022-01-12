import { SideBar, SideBarProps } from "apps/frontend/types/Types"
import { FC } from "react"
import VideoSideList from "./VideoSideList/VideoSideList"
import SideBanner from "./SideBanner/SideBanner"
import SideList from "./SideList/SideList"

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
                                    <SideList type={"numbered"}></SideList>
                                )
                            }
                            {
                                 sequence.componentType === 'SmallBanner' && (
                                    <SideBanner size={"Small"}></SideBanner>
                                 )
                            }
                            {
                                 sequence.componentType === 'Trending' && (
                                    <VideoSideList ></VideoSideList>
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