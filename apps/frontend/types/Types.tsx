
export type SideBar = {
    componentType: string,  //Latest , Trending , SmallBanner, LargeBanner
    position: number,
}
export type SideBarProps = {
   sideBarSequence:SideBar[]
}

export type SideBannerProps = {
    size:string    //small or Large
}
export type SideListProps = {
    type:string    //numbered or simple
}