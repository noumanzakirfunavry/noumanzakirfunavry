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
                                    <SideList key={'numbered'} type={"numbered"} title={sequence.title}></SideList>
                                )
                            }
                            {
                                 sequence.componentType === 'SmallBanner' && (
                                    <div className="mb-4">
                                        <SideBanner  key={'Small'} size={"Small"}></SideBanner>
                                    </div>
                                 )
                            }
                            {
                                 sequence.componentType === 'simple' && (
                                    <SideList key={'simple'} type={"simple"} title={sequence.title}></SideList>
                                 )
                            }
                            {
                                 sequence.componentType === 'dotList' && (
                                    <SideList key={'dotList'} type={"dotList"} title={sequence.title}></SideList>
                                 )
                            }
                            {
                                 sequence.componentType === 'LargeBanner' && (
                                    <SideBanner key={'Large'} size={"Large"}></SideBanner>
                                )
                            }

                        </div>
                    )
                })
            }
        </>
    )
}

export default SideBar