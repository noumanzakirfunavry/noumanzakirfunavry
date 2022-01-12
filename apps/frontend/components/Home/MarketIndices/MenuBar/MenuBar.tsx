

const MenuBar = () =>{
   
    return (
        <>
            <div className="container-fluid">
                <div className="page-nav">

                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown2" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown2">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="javascript:voide(0)">العربية</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:voide(0)">أوروبا</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="javascript:voide(0)">أميركا</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:voide(0)">العملات</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:voide(0)">النفط والطاقة</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:voide(0)">آسيا</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:voide(0)">العملات الرقمية</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:voide(0)">المعادن</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:voide(0)">السلع الزراعية</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default MenuBar