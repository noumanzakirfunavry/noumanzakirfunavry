/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { SideBar, SideBarProps } from "apps/frontend/types/Types"
import { FC } from "react"
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
                        <div key={sequence.componentType}>
                            {
                                sequence.componentType === 'numbered' && (
                                    <SideList key={'numbered'} type={"numbered"}></SideList>
                                )
                            }
                            {
                                 sequence.componentType === 'SmallBanner' && (
                                    <SideBanner  key={'Small'} size={"Small"}></SideBanner>
                                 )
                            }
                            {
                                 sequence.componentType === 'simple' && (
                                    <SideList key={'simple'} type={"simple"}></SideList>
                                 )
                            }
                            {/* {
                                 sequence.componentType === 'dotList' && (
                                    <SideList key={'dotList'} type={"dotList"}></SideList>
                                 )
                            }
                            {
                                 sequence.componentType === 'LargeBanner' && (
                                    <SideBanner key={'Large'} size={"Large"}></SideBanner>
                                )
                            } */}

                        </div>
                    )
                })
            }
        </>
    )
}

export default SideBar