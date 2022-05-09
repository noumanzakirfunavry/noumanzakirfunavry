
import { useState } from 'react'
import LoginModal from '../LoginModal/LoginModal'
// import BannerLayout from '../BannerLayout/BannerLayout'
import CookiesComponent from '../Shared/CookieConsent/CookiesComponent'
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
            {displayCookies && <CookiesComponent/>}
            <LoginModal/>
        </>
    )
}

export default Layout