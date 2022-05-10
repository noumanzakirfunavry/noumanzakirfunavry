export interface SideNavInterface {
    path: string;
    title: string;
    iconType: "" | "nzIcon" | "fontawesome";
    iconTheme: "" | "fab" | "far" | "fas" | "fill" | "outline" | "twotone" | "light" | "fal";
    icon: string,
    submenu : SideNavInterface[];
}
