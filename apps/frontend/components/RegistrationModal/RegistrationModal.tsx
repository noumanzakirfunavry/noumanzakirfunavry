import AccountModal from "../Shared/AccountModal/AccountModal"
import logo from "../../styles/images/cnbc-logo.svg";
import RegistrationStep2 from "../RegistrationStep2/RegistrationStep2";

const RegistrationModal = ()=>{
    return (
        <>
            <AccountModal modalId={'registrationModal'} >
            <div className="p-2">
                    <div className="row mb-4 flex-row-reverse">
                    <div className="col-sm-3 text-start mb-3 mb-sm-0">
                            <img className="img-fluid" width={86} src={logo.src} />
                        </div>
                        <div className="col-sm-9 text-muted">
                            <h2 className="text-primary">إنشاء حساب</h2>
                            <h6>هل لديك حساب؟ <a>تسجيل الدخول</a></h6>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="البريد الإلكتروني"/>
                        <label htmlFor="floatingInput">البريد الإلكتروني</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">كلمه السر</label>
                    </div>

                    <div className="mb-4">
                            <div className="form-check d-flex">
                                <input className="float-end form-check-input ms-2" style={{width:'45px'}} type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                بالنقر فوق الزر “إنشاء حساب” ، فإنك توافق على شروط الخدمة وسياسة الخصوصية لقناة CNBC Arabia
                                <br></br>
                                يمكن مشاركة المعلومات التي تقدمها عند إنشاء حساب مع شركات NBCUniversal الأخرى واستخدامها لمساعدتنا على تخصيص خدماتنا ومنتجاتنا وإعلاناتنا لك بشكل أفضل. كجزء من حسابنا ، قد نرسل لك رسائل إخبارية وعروض ترويجية ومواد تسويقية أخرى.
                                </label>
                            </div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary mb-3" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#registrationStep2" >إنشاء حساب</button>
                        <h6 className="text-muted mb-0">سياسة خاصة</h6>
                    </div>
                </div>
            </AccountModal>
            <RegistrationStep2/>
        </>
    )
}

export default RegistrationModal