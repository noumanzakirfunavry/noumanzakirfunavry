import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"

const Index = () =>{

    return (
        <>
        
            <div className="container">
                <AdBanner />
                <div className="PageTitleYellow pageTitle mb-5"><h2>تعديل ملفك الشخصي</h2></div>
                
                <div className="row">
                <div className="col-md-6">
                        <h3 className="mb-4">إعادة تعيين كلمة المرور</h3>
                        <div className="mb-3">
                            <label className="form-label">كلمة سر قديمة</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">كلمة مرور جديدة</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label">تأكيد كلمة المرور</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="text-center mb-5">
                            <button className="btn btn-primary mb-3">تغيير كلمة المرور</button>
                            <h6 className="text-success">تم تحديث كلمة المرور</h6>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h3 className="mb-4">تحديث تفاصيل الحساب</h3>
                        <div className="mb-3">
                            <label className="form-label">الاسم</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">اسم العائلة</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">البريد الإلكتروني</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">بلد</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">عنوان وظيفي</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">العمل</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label">سنة الولادة</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary mb-3">تحديث الملف</button>
                            <h6 className="text-success">يتم تحديث الملف الشخصي</h6>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index