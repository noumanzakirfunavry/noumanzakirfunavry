
const DummyNewsInfoBox = () =>{
    return(
        <>
             <div className="NewsInfobox">
                <div className="infoItem">نشر الجمعة 5 نوفمبر 2021 | 10:35 صباحًا</div>
                <div className="infoItem">تم تحريره الجمعة 6 نوفمبر 2021 | 12:35 مساءً</div>
                <div className="newsSocial mt_sm_20">
                    <ul>
                        <li><a><i className="fa fa-envelope"></i></a></li>
                        <li><a><i className="fab fa-whatsapp"></i></a></li>
                        <li><a><i className="fab fa-linkedin"></i></a></li>
                        <li><a><i className="fab fa-twitter"></i></a></li>
                        <li><a><i className="fab fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DummyNewsInfoBox