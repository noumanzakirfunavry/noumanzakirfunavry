import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"

const Index = () =>{

    return (
        <>

            <div className="container">
                <AdBanner />
                </div>
                <div className="PageTitleYellow pageTitle mb-5"><h2>تعديل ملفك الشخصي</h2></div>
                <div className="container">
                <div className="row">
                <div className="col-md-6 profilIinputWrap">
                        <h3 className="mb-4 fs20_b_mobile fw-bold">إعادة تعيين كلمة المرور</h3>
                        <div className="mb-3 iconFiled">
                            <label className="form-label fs12_b_gray">كلمة سر قديمة</label>
                            <input type="password" className="form-control" />
                            <span className="showIcon"><i title="Show Password" className="fa fa-eye"></i></span>
                        </div>
                        <div className="mb-3 iconFiled">
                            <label className="form-label fs12_b_gray">كلمة مرور جديدة</label>
                            <input type="password" className="form-control" />
                            <span className="showIcon"><i title="Show Password" className="fa fa-eye-slash"></i></span>
                        </div>
                        <div className="mb-5 iconFiled">
                            <label className="form-label fs12_b_gray">تأكيد كلمة المرور</label>
                            <input type="password" className="form-control" />
                            <span className="showIcon"><i title="Show Password" className="fa fa-eye"></i></span>
                        </div>
                        <div className="text-center mb-5">
                            <button className="btn btn-primary mb-3 w_sm_100 fs15_b_mobile">تغيير كلمة المرور</button>
                            <h6 className="text-success fs12_b">تم تحديث كلمة المرور</h6>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h3 className="mb-4 fs20_b_mobile fw-bold">تحديث تفاصيل الحساب</h3>
                        <div className="mb-3">
                            <label className="form-label fs12_b_gray">الاسم</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs12_b_gray">اسم العائلة</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs12_b_gray">البريد الإلكتروني</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs12_b_gray">بلد</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs12_b_gray">عنوان وظيفي</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs12_b_gray">العمل</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label fs12_b_gray">سنة الولادة</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary mb-3 w_sm_100 fs15_b_mobile">تحديث الملف</button>
                            <h6 className="text-success">يتم تحديث الملف الشخصي</h6>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Index