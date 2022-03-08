import AdBanner from "../Shared/AdBanner/AdBanner"
const ContactUsForm = () => {

    return (
        <>

        <h2 className="text-center text-primary mb-5 fs32_bolder">تقديم استفسار</h2>
        <div className="row justify-content-center">
            <div className="col-md-6">
            <form>
                    <div className="mb-3">
                        <label className="form-label">الاسم</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">بريد الكتروني</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">رقم الهاتف</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">الموضوع</label>
                        <textarea className="form-control" rows={3}></textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">إرسال</button>
                    </div>
                </form>
            </div>
        </div>


        </>
    )
}

export default ContactUsForm