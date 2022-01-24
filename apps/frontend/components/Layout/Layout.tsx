
import { useState } from 'react'
import BannerLayout from '../BannerLayout/BannerLayout'
import Cookies from '../Shared/CookieConsent/Cookies'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import TopBar from './TopBar/TopBar'

const Layout = ({children}) =>{
   
    const [displayCookies, setDisplayCookie] = useState<boolean>(true) //Will use any state management tool like redux to get state
    return (
        <>
            <TopBar></TopBar>
            <Header></Header>
            {/* <BannerLayout></BannerLayout> */}
            {children}
            <Footer/>
            {displayCookies && <Cookies/>}
        </>
    )
}

export default Layout