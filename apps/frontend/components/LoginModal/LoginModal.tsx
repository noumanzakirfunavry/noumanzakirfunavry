import AccountModal from "../Shared/AccountModal/AccountModal";
import logo from "../../styles/images/cnbc-logo.svg";
import RegistrationModal from "../RegistrationModal/RegistrationModal";


const LoginModal = ()=>{
    return (
        <>
            <AccountModal modalId={"loginModal"}>

                <div className="p-2">
                    <div className="row mb-4 flex-row-reverse">
                    <div className="col-sm-3 text-start mb-3 mb-sm-0">
                            <img className="img-fluid" width={86} src={logo.src} />
                        </div>
                        <div className="col-sm-9 text-muted">
                            <h2 className="text-primary">تسجيل الدخول</h2>
                            <h6>هل أنت جديد في CNBC Arabia؟ <a>إنشاء حساب</a></h6>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="البريد الإلكتروني"/>
                        <label htmlFor="floatingInput">البريد الإلكتروني</label>
                    </div>
                    <div className="form-floating mb-3 iconFiled">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">كلمه السر</label>
                        <span className="showIcon"><i title="Show Password" className="fa fa-eye"></i></span>
                    </div>

                    <div className="row mb-4">
                        <div className="col-7">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    ابق متصلا   
                                </label>
                                <input className="float-end form-check-input ms-2" type="checkbox" value="" id="flexCheckDefault"/>
                            </div>
                        </div>
                        <div className="col-5 text-start">
                            <a> هل نسيت كلمة السر <span>?</span></a>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary mb-3" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#registrationModal">تسجيل الدخول</button>
                        <h6 className="text-muted mb-0">سياسة خاصة</h6>
                    </div>
                </div>

            </AccountModal>
            <RegistrationModal/>
        </>
    )
}

export default LoginModal