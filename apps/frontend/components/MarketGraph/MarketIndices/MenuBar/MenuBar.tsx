import { useState } from "react"

const MenuBar = ({marketIndices, setTickers}) =>{
    const [activeIndex, setActiveIndex] = useState(0);
    const menuKeys = marketIndices ? Object.keys(marketIndices) : []

    const handleClickMenuItem = (index, item) => {
        setActiveIndex(index)
        setTickers(item);
    };
   
    return (
        <>
                    <nav className="navbar navbar-expand">
                        <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown2" >
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown2">
                            <ul className="navbar-nav">

                                { // show menu items
                                    menuKeys?.length && menuKeys.map((item: string, index: number)=>{
                                        return(
                                            <li key={index} className="nav-item">
                                                <a onClick={() => handleClickMenuItem(index, item)} className={`nav-link ${index === activeIndex ? 'active' : ''}`} aria-current="page" >{item}</a>
                                            </li>
                                        )
                                    })
                                }
                                
                                {/*<li key={'vcxb'} className="nav-item">
                                    <a className="nav-link" aria-current="page" >العربية</a>
                                </li>
                                <li key={'xbch6575'} className="nav-item">
                                    <a className="nav-link" >أوروبا</a>
                                </li>

                                <li key={'vbgf65'} className="nav-item">
                                    <a className="nav-link active" >أميركا</a>
                                </li>
                                <li key={'sg546rg'} className="nav-item">
                                    <a className="nav-link" >العملات</a>
                                </li>
                                <li key={'vbnuyi87'} className="nav-item">
                                    <a className="nav-link" >النفط والطاقة</a>
                                </li>
                                <li key={'nmjhk,o8o87'} className="nav-item">
                                    <a className="nav-link" >آسيا</a>
                                </li>
                                <li key={'r5765gf'} className="nav-item">
                                    <a className="nav-link" >العملات الرقمية</a>
                                </li>
                                <li key={'cvbfn76'} className="nav-item">
                                    <a className="nav-link" >المعادن</a>
                                </li>
                                <li key={'bny7u65'} className="nav-item">
                                    <a className="nav-link" >السلع الزراعية</a>
                            </li>*/}

                            </ul>
                        </div>
                    </nav>
        </>
    )
}

export default MenuBar