
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

export type TileList = {
    mediaType:string ,   //image or video
    media:string,
    title: string,
    categoryName: string,
    sourceName: string,
}
export type CategoryNewsProps = {
    limit: number,
    displayTitle: boolean,
    displayTopTwoNews:boolean,
    displayMoreButton:boolean
}

export type ModalProps = {
    modalId:string,
}

export type TitleProps = {
    styles:string //for styles (color size etc) will be used as className
}

export type MobileHeaderProps = {
    handleMenuList: () =>void
}
