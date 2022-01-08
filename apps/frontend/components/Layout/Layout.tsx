
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import TopBar from '../TopBar/TopBar'

const Layout = ({children}) =>{
   
    return (
        <>
            <TopBar></TopBar>
            <Header></Header>
            {children}
            <Footer/>

        </>
    )
}

export default Layout