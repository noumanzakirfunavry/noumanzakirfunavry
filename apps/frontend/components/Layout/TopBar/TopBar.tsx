import Link from "next/link"


const TopBar = () => {
   
    return (
        <div className="top-bar">
            <div className="alert alert-dark alert-dismissible top-grey-bar fade show" role="alert">
                <div className="container">
                    <div className="position-relative">
                        <button type="button" className="btn-close p-1" data-bs-dismiss="alert" aria-label="Close"><i className="fa fa-times"></i></button>
                        <strong>إعلان</strong> <Link href="breakingNews"><span role={'button'}> السيسي يشدد خلال اتصال مع المنفي على أهمية عقد الانتخابات الليبية في موعدها</span></Link>
                    </div>
                </div>
            </div>
            <div className="alert alert-danger alert-dismissible top-red-bar fade show" role="alert">
                <div className="container">
                    <div className="position-relative">
                        <button type="button" className="btn-close p-1" data-bs-dismiss="alert" aria-label="Close"><i className="fa fa-times"></i></button>
                        <strong>الأخبار العاجلة</strong><Link href="/breakingNews"><span role={'button'}> السيسي يشدد خلال اتصال مع المنفي على أهمية عقد الانتخابات الليبية في موعدها</span></Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar