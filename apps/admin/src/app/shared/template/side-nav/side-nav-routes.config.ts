import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: 'dashboard/home',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: 'news/list',
        title: 'News',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    // {
    //     path: 'news',
    //     title: 'News list',
    //     iconType: 'nzIcon',
    //     iconTheme: 'outline',
    //     icon: 'dashboard',
    //     submenu: []
    // },
    {
        path: 'quickLinks',
        title: 'Quick Links',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: 'tags/list',
        title: 'Tags',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: 'infographics/list',
        title: 'Infographics',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: 'programs/list',
        title: 'Programs',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: 'episodes/list',
        title: 'Episodes',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: 'category/list',
        title: 'Category',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
   
    {
        path: '',
        title: 'Multi Level Menu',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            { 
                path: '',
                title: 'Level 1', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '',
                        title: 'Level 2',
                        iconType: 'nzIcon',
                        iconTheme: 'outline',
                        icon: '',
                        submenu: []
                    }    
                ] 
            }
        ]
    }
]    