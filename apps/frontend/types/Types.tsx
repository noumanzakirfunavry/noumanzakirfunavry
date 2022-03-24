
export type SideBar = {
    componentType: string,  //Latest , Trending , SmallBanner, LargeBanner
    position: number,
    title?:string
    designType?:string
}
export type SideBarProps = {
   sideBarSequence:SideBar[]
}

export type SideBannerProps = {
    size:string    //small or Large
}
export type SideListProps = {
    type:string    //numbered or simple
    title:string
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

export type User = {
    email:string,
    username:string,
    password:string,
}

export type QuickLink = {
    addedBy: string
    createdAt: Date
    deletedAt: Date | null
    id: number
    position: number
    title: string
    updatedAt: Date | null
    url: string
    visible: boolean
}

export type BreakingNewsProps= {
    id: number,
    newsLink: string,
    title: string,
    isActive: boolean,
    addedBy: string | null,
    newsId: number,
    createdAt: Date | null,
    updatedAt: Date | null,
    deletedAt: Date | null
}
