
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
export type NewsListTilesProps = {
    newsList :TileList[]
}

export type ModalProps = {
    id:string,
    title:string
}

export type TitleProps = {
    text: string,
    position: string //center, right, left
    styles:string //for styles (color size etc) will be used as className
}
