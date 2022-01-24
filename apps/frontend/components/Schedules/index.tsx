

import AdBanner from "../Shared/AdBanner/AdBanner"
const Schedules = () => {

    return (
        <>
            <div className="container">
                <AdBanner />
                <div className="pageTitle PageTitleYellow">
                    <div className="float-start">
                        <button className="btn btn-danger">شاهد البث المباشر</button>
                    </div>
                    <h2>جدول البرامج</h2>
                    <div className="clearfix"></div>
                </div>
                <div className='scheduleCalendar'>
                    <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#schedule1">اليوم<span>15 Feb</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#schedule2">السبت</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#schedule3">الأحد</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#schedule4">الإثنين</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#schedule5">الثلاثاء</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#schedule6">الأربعاء</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#schedule7">الخميس</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#schedule8">الجمعة</button>
                        </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="schedule1">..1.</div>
                            <div className="tab-pane fade" id="schedule2">..2.</div>
                            <div className="tab-pane fade" id="schedule3">.3..</div>
                            <div className="tab-pane fade" id="schedule4">.4..</div>
                            <div className="tab-pane fade" id="schedule5">.5..</div>
                            <div className="tab-pane fade" id="schedule6">.6..</div>
                            <div className="tab-pane fade" id="schedule7">.7..</div>
                            <div className="tab-pane fade" id="schedule8">.8..</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Schedules