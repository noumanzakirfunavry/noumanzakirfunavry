

const TopBar = () => {
   
    return (
        <div className="top-bar">
            <div className="alert alert-dark alert-dismissible top-grey-bar fade show" role="alert">
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="fa fa-times"></i></button>
                <strong>إعلان</strong> السيسي يشدد خلال اتصال مع المنفي على أهمية عقد الانتخابات الليبية في موعدها
            </div>
            <div className="alert alert-danger alert-dismissible top-red-bar fade show" role="alert">
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="fa fa-times"></i></button>
                <strong>الأخبار العاجلة</strong> السيسي يشدد خلال اتصال مع المنفي على أهمية عقد الانتخابات الليبية في موعدها
            </div>
        </div>
    )
}

export default TopBar