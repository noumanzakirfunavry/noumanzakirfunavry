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
    displayMoreButton:boolean,
    cat:any
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

export type BranchProps = {
    id: number,
    title: string,
    isActive: boolean,
    phone: string,
    fax: string,
    email: string,
    zipCode: string,
    addressLine1: string,
    addressLine2: string,
    publishedBy: number | null,
    createdAt: Date,
    updatedAt: Date | null,
    deletedAt: Date | null,
}

export type JobProps = {
    id: number,
    title: string,
    totalOpenings: number,
    isActive: boolean,
    closingDate: Date,
    description: string,
    branchId: number,
    publishedBy: number | null,
    createdAt: Date,
    updatedAt: Date | null,
    deletedAt: Date | null
}

export type CategoryProps = {
    id: number,
    title: string,
    orders: number,
    displayInHomePage: boolean,
    displayInCategoryMenu: boolean,
    isActive: boolean,
    publishedBy: number | null,
    parentCategoryId: number | null,
    bannerId: number | null,
    createdAt:Date,
    updatedAt: Date | null,
    deletedAt: Date | null,
    user: any
}