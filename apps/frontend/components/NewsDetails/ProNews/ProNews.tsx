import cnbcdarklogo from "../../../styles/images/cnbc-arabia-logo-black.svg";

const ProNews = () => {

    return (
        <>
            <div className="proNews">
                <div className="float-start pt-2">
                    <p>هل لديك حساب؟ <a className="text-success">تسجيل الدخول</a></p>
                </div>
                <div className="float-end d-flex">
                    <div>
                        <img className="img-fluid" src={cnbcdarklogo.src} />
                    </div>
                    <div className="pt-4 me-3">
                        <span className="badge bg-success">PRO</span>
                    </div>
                </div>
                <div className="clearfix"></div>

                <h3 className="mb-5 mt-4 text-center">اشترك مجانًا وتمتع بالوصول إلى CNBC ARABIA PRO</h3>

                <div className="px-md-4 mx-lg-4 mb-3">
                    <button className="btn btn-success w-100 mb-3">انشئ حساب</button>
                    <button className="btn btn-outline-success w-100">تسجيل الدخول</button>
                </div>
            </div>
        </>
    )
}

export default ProNews