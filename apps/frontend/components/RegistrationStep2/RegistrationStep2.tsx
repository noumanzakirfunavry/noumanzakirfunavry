import AccountModal from "../Shared/AccountModal/AccountModal"
import logo from "../../styles/images/cnbc-logo.svg";

const RegistrationStep2 = ()=>{
    return (
        <>
            <AccountModal modalId={'registrationStep2'}>
            <div className="p-2">
                    <div className="row mb-4 flex-row-reverse">
                    <div className="col-sm-3 text-sm-start text-center mb-3 mb-sm-0">
                            <img className="img-fluid" style={{width:'86px'}} src={logo.src} />
                        </div>
                        <div className="col-sm-9 text-muted pt-3">
                            <h6>لقد قمت بإنشاء حساب CNBC Arabia بنجاح. <a className="text-bold">johnsmith@email.com</a></h6>
                        </div>
                    </div>

                    <h6 className="text-primary mb-3 text-bold">دعنا نعرف المزيد عنك لمساعدتنا على خدمتك بشكل أفضل</h6>


                    <div className="form-floating mb-3 customSelect">
                        <select className="form-select text-start">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label>بلد</label>
                    </div>
                    <div className="form-floating mb-3 customSelect">
                        <select className="form-select text-start">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label>عنوان وظيفي</label>
                    </div>
                    <div className="form-floating mb-3 customSelect">
                        <select className="form-select text-start">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label>العمل</label>
                    </div>
                    <div className="form-floating mb-4 customSelect">
                        <select className="form-select text-start">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label>سنة الولادة</label>
                    </div>



                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-primary mb-3 btn-sm-wide">حفظ</button>
                        </div>
                        <div className="col-6 text-start">
                            <button className="btn btn-outline-primary mb-3 btn-sm-wide" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#registrationStep2" >تخطي لاحقًا</button>
                        </div>
                    </div>
                    <div className="text-center">
                        <h6 className="text-muted mb-0">سياسة خاصة</h6>
                    </div>
                </div>
            </AccountModal>
        </>
    )
}

export default RegistrationStep2