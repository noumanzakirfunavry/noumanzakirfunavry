

const MenuBar = () =>{
   
    return (
        <>
                <div className="page-nav">

                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown2" >
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown2">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">العربية</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">أوروبا</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="#">أميركا</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">العملات</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">النفط والطاقة</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">آسيا</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">العملات الرقمية</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">المعادن</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">السلع الزراعية</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
        </>
    )
}

export default MenuBar