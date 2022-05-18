/* eslint-disable @next/next/no-html-link-for-pages */

import { requests } from '../../../../services/Requests';
import GetData from '../../../../services/GetData';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MenuProps } from "../../../../types/Types";


const FooterMenu = ({pageNo}) =>{
    const [menuItems, setMenuItems] = useState<MenuProps[]>([{
        id: 0,
        title: '',
        url: ''
    }]);

    useEffect(() => {
        GetData(`${requests.moreMenus}getAll?position=FOOTER&limit=4&pageNo=${pageNo}`, {}, 'get', false).then(res=>{
            setMenuItems(res?.data?.response);

        }).catch(err=>{
            console.warn(err)
        })
    }, [])

    return (
        <>
            { 
                menuItems?.length && menuItems.map((menuItem: any, index: number)=>{
                    return(
                            <li key={index}> 
                                <Link href={menuItem.url}><a>{menuItem.title}</a></Link>
                            </li>
                    )
                })
            }
        </>
    )
}
export default FooterMenu