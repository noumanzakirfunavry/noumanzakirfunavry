import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: '',
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
        path: 'category',
        title: 'category',
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