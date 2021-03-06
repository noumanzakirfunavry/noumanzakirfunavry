import AdBanner from "../Shared/AdBanner/AdBanner"
const ContactUsForm = () => {

    return (
        <>

        <h2 className="text-center text-primary mb-5 fs32_bolder">تقديم استفسار</h2>
        <div className="row justify-content-center">
            <div className="col-md-5">
            <form>
                    <div className="mb-3">
                        <label className="form-label fs12_gray">الاسم</label>
                        <input type="email1" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs12_gray">بريد الكتروني</label>
                        <input type="email2" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs12_gray">رقم الهاتف</label>
                        <input type="email3" className="form-control"/>
                    </div>
                    <div className="mb-3">
                <label className="form-label">الدول</label>
                <div className="customSelect simpleSelect">
                <select className="form-select text-start">
                  <option value="1">مبيعات </option>
                  <option value="2"> تسويق </option>
                  <option value="3"> أخبار</option>
                  <option value="3">  إداري</option>
                  <option value="3">   وظائف شاغرة</option>
                </select>
                </div>
              </div>
                    <div className="mb-4">
                        <label className="form-label fs12_gray">الموضوع</label>
                        <textarea className="form-control" rows={6}></textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-sm-wide fw-bold">إرسال</button>
                    </div>
                </form>
            </div>
        </div>


        </>
    )
}

export default ContactUsForm